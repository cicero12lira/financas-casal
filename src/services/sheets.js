import { getSheetsId, getSheetsToken } from './storage'

export class SheetsError extends Error {
  constructor(message, tipo = 'desconhecido') {
    super(message)
    this.name = 'SheetsError'
    this.tipo = tipo // 'auth' | 'rede' | 'permissao' | 'config' | 'desconhecido'
  }
}

// --- Autenticação via Service Account JWT ---

let _tokenCache = null
let _tokenExpiry = 0

function _base64url(str) {
  return btoa(str).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

function _base64urlFromBuffer(buf) {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

async function _criarJWT(credentials) {
  const { client_email, private_key } = credentials
  const now = Math.floor(Date.now() / 1000)
  const header  = _base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const payload = _base64url(JSON.stringify({
    iss:   client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud:   'https://oauth2.googleapis.com/token',
    exp:   now + 3600,
    iat:   now,
  }))
  const signingInput = `${header}.${payload}`

  const pemBody = private_key
    .replace(/-----BEGIN PRIVATE KEY-----/g, '')
    .replace(/-----END PRIVATE KEY-----/g, '')
    .replace(/\s/g, '')
  const keyData = Uint8Array.from(atob(pemBody), c => c.charCodeAt(0))

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8', keyData,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false, ['sign'],
  )
  const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', cryptoKey, new TextEncoder().encode(signingInput))
  return `${signingInput}.${_base64urlFromBuffer(sig)}`
}

async function _obterToken() {
  if (_tokenCache && Date.now() < _tokenExpiry) return _tokenCache

  const credentials = getSheetsToken()
  if (!credentials) throw new SheetsError('Credenciais da Service Account não configuradas.', 'auth')

  const jwt = await _criarJWT(credentials)
  let res
  try {
    res = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt,
      }),
    })
  } catch {
    throw new SheetsError('Sem conexão com a internet.', 'rede')
  }

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new SheetsError(err.error_description ?? 'Falha na autenticação com o Google.', 'auth')
  }

  const { access_token, expires_in } = await res.json()
  _tokenCache = access_token
  _tokenExpiry = Date.now() + (expires_in - 60) * 1000
  return _tokenCache
}

// --- Helpers ---

function _spreadsheetId() {
  const id = getSheetsId()
  if (!id) throw new SheetsError('ID da planilha não configurado.', 'config')
  return id
}

async function _request(method, path, body) {
  const token = await _obterToken()
  const id = _spreadsheetId()
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}${path}`

  let res
  try {
    res = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    })
  } catch {
    throw new SheetsError('Sem conexão com a internet.', 'rede')
  }

  if (res.status === 403) throw new SheetsError('Sem permissão para acessar a planilha.', 'permissao')
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new SheetsError(err.error?.message ?? 'Erro na API do Google Sheets.', 'desconhecido')
  }
  return res.status === 204 ? null : res.json()
}

async function _get(range) {
  const data = await _request('GET', `/values/${encodeURIComponent(range)}`)
  return data.values ?? []
}

async function _append(range, values) {
  await _request('POST', `/values/${encodeURIComponent(range)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, { values })
}

async function _update(range, values) {
  await _request('PUT', `/values/${encodeURIComponent(range)}?valueInputOption=RAW`, { values })
}

const _sheetIdCache = {}

async function _getSheetId(sheetName) {
  if (_sheetIdCache[sheetName] !== undefined) return _sheetIdCache[sheetName]
  const data = await _request('GET', '?fields=sheets.properties')
  for (const s of data.sheets ?? []) {
    _sheetIdCache[s.properties.title] = s.properties.sheetId
  }
  if (_sheetIdCache[sheetName] === undefined) {
    throw new SheetsError(`Aba "${sheetName}" não encontrada na planilha.`, 'desconhecido')
  }
  return _sheetIdCache[sheetName]
}

async function _deleteRow(sheetName, sheetRowNum) {
  const sheetId = await _getSheetId(sheetName)
  await _request('POST', ':batchUpdate', {
    requests: [{
      deleteDimension: {
        range: { sheetId, dimension: 'ROWS', startIndex: sheetRowNum - 1, endIndex: sheetRowNum },
      },
    }],
  })
}

// --- Parsing ---

function _rowParaLancamento(row) {
  return {
    id:           row[0] ?? '',
    data:         row[1] ?? '',
    valor:        parseFloat(row[2]) || 0,
    tipo:         row[3] ?? 'gasto',
    categoria:    row[4] ?? '',
    quem_pagou:   row[5] ?? '',
    descricao:    row[6] ?? '',
    criado_em:    row[7] ?? '',
    sincronizado: row[8] === 'true' || row[8] === true,
  }
}

function _lancamentoParaRow(l) {
  return [l.id, l.data, l.valor, l.tipo, l.categoria, l.quem_pagou, l.descricao ?? '', l.criado_em, 'true']
}

// --- API pública ---

async function buscarLancamentos(mes, ano) {
  const rows = await _get('lancamentos!A:I')
  return rows
    .filter(row => row[0] && row[0] !== 'id')
    .map(_rowParaLancamento)
    .filter(l => {
      const [y, m] = (l.data ?? '').split('-').map(Number)
      return y === ano && m === mes
    })
}

async function adicionarLancamento(lancamento) {
  await _append('lancamentos!A:I', [_lancamentoParaRow(lancamento)])
}

async function atualizarLancamento(id, dados) {
  const rows = await _get('lancamentos!A:I')
  const idx = rows.findIndex(row => row[0] === id)
  if (idx === -1) throw new SheetsError(`Lançamento ${id} não encontrado.`, 'desconhecido')
  const updated = { ..._rowParaLancamento(rows[idx]), ...dados }
  await _update(`lancamentos!A${idx + 1}:I${idx + 1}`, [_lancamentoParaRow(updated)])
}

async function removerLancamento(id) {
  const rows = await _get('lancamentos!A:A')
  const idx = rows.findIndex(row => row[0] === id)
  if (idx === -1) throw new SheetsError(`Lançamento ${id} não encontrado.`, 'desconhecido')
  await _deleteRow('lancamentos', idx + 1)
}

async function buscarConfig() {
  const rows = await _get('config!A:B')
  return Object.fromEntries(
    rows.filter(([k]) => k && k !== 'chave').map(([k, v]) => [k, v ?? ''])
  )
}

async function salvarConfig(config) {
  const rows = await _get('config!A:B')
  const toAppend = []

  for (const [chave, valor] of Object.entries(config)) {
    const idx = rows.findIndex(row => row[0] === chave)
    if (idx === -1) {
      toAppend.push([chave, String(valor)])
    } else {
      await _update(`config!A${idx + 1}:B${idx + 1}`, [[chave, String(valor)]])
    }
  }

  if (toAppend.length > 0) await _append('config!A:B', toAppend)
}

async function testarConexao() {
  try {
    await buscarConfig()
    return { ok: true }
  } catch (err) {
    return { ok: false, erro: err.message }
  }
}

export {
  buscarLancamentos,
  adicionarLancamento,
  atualizarLancamento,
  removerLancamento,
  buscarConfig,
  salvarConfig,
  testarConexao,
}
