import {
  getSheetsId, getSheetsToken,
  getPessoalCreds, getUsuario,
} from './storage'

export class SheetsError extends Error {
  constructor(message, tipo = 'desconhecido') {
    super(message)
    this.name = 'SheetsError'
    this.tipo = tipo // 'auth' | 'rede' | 'permissao' | 'config' | 'desconhecido'
  }
}

// --- Autenticação via Service Account JWT (cache por client_email) ---

const _tokenCache = {} // client_email -> { token, expiry }

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

async function _obterToken(credentials) {
  if (!credentials) throw new SheetsError('Credenciais da Service Account não configuradas.', 'auth')

  const chave = credentials.client_email
  const cache = _tokenCache[chave]
  if (cache && Date.now() < cache.expiry) return cache.token

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
  _tokenCache[chave] = { token: access_token, expiry: Date.now() + (expires_in - 60) * 1000 }
  return access_token
}

// --- Requisições (recebem contexto { id, token }) ---

function _ctxCasal() {
  const id = getSheetsId()
  const token = getSheetsToken()
  if (!id) throw new SheetsError('ID da planilha do casal não configurado.', 'config')
  return { id, token }
}

function _ctxPessoal(pessoa) {
  const p = pessoa || getUsuario() || 'a'
  const creds = getPessoalCreds(p)
  if (!creds?.sheetsId) throw new SheetsError('Planilha pessoal não configurada.', 'config')
  return { id: creds.sheetsId, token: creds.token }
}

async function _request(ctx, method, path, body) {
  const token = await _obterToken(ctx.token)
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${ctx.id}${path}`

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

async function _get(ctx, range) {
  const data = await _request(ctx, 'GET', `/values/${encodeURIComponent(range)}`)
  return data.values ?? []
}

async function _append(ctx, range, values) {
  await _request(ctx, 'POST', `/values/${encodeURIComponent(range)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, { values })
}

async function _update(ctx, range, values) {
  await _request(ctx, 'PUT', `/values/${encodeURIComponent(range)}?valueInputOption=RAW`, { values })
}

const _sheetIdCache = {} // `${ctx.id}:${nome}` -> sheetId numérico

async function _getSheetId(ctx, sheetName) {
  const chave = `${ctx.id}:${sheetName}`
  if (_sheetIdCache[chave] !== undefined) return _sheetIdCache[chave]
  const data = await _request(ctx, 'GET', '?fields=sheets.properties')
  for (const s of data.sheets ?? []) {
    _sheetIdCache[`${ctx.id}:${s.properties.title}`] = s.properties.sheetId
  }
  if (_sheetIdCache[chave] === undefined) {
    throw new SheetsError(`Aba "${sheetName}" não encontrada na planilha.`, 'desconhecido')
  }
  return _sheetIdCache[chave]
}

async function _deleteRow(ctx, sheetName, sheetRowNum) {
  const sheetId = await _getSheetId(ctx, sheetName)
  await _request(ctx, 'POST', ':batchUpdate', {
    requests: [{
      deleteDimension: {
        range: { sheetId, dimension: 'ROWS', startIndex: sheetRowNum - 1, endIndex: sheetRowNum },
      },
    }],
  })
}

// --- Parsing: lançamentos do casal (A:I) ---

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

// --- Parsing: lançamentos pessoais (A:J) ---

function _rowParaPessoal(row) {
  return {
    id:           row[0] ?? '',
    data:         row[1] ?? '',
    valor:        parseFloat(row[2]) || 0,
    tipo:         row[3] ?? 'gasto',
    categoria:    row[4] ?? '',
    descricao:    row[5] ?? '',
    criado_em:    row[6] ?? '',
    origem:       row[7] ?? 'manual',
    ref_casal_id: row[8] ?? '',
    sincronizado: row[9] === 'true' || row[9] === true,
  }
}

function _pessoalParaRow(l) {
  return [l.id, l.data, l.valor, l.tipo, l.categoria, l.descricao ?? '', l.criado_em, l.origem ?? 'manual', l.ref_casal_id ?? '', 'true']
}

// --- API pública: CASAL ---

async function buscarLancamentos(mes, ano) {
  const rows = await _get(_ctxCasal(), 'lancamentos!A:I')
  return rows
    .filter(row => row[0] && row[0] !== 'id')
    .map(_rowParaLancamento)
    .filter(l => {
      const [y, m] = (l.data ?? '').split('-').map(Number)
      return y === ano && m === mes
    })
}

async function adicionarLancamento(lancamento) {
  await _append(_ctxCasal(), 'lancamentos!A:I', [_lancamentoParaRow(lancamento)])
}

async function atualizarLancamento(id, dados) {
  const ctx = _ctxCasal()
  const rows = await _get(ctx, 'lancamentos!A:I')
  const idx = rows.findIndex(row => row[0] === id)
  if (idx === -1) throw new SheetsError(`Lançamento ${id} não encontrado.`, 'desconhecido')
  const updated = { ..._rowParaLancamento(rows[idx]), ...dados }
  await _update(ctx, `lancamentos!A${idx + 1}:I${idx + 1}`, [_lancamentoParaRow(updated)])
}

async function removerLancamento(id) {
  const ctx = _ctxCasal()
  const rows = await _get(ctx, 'lancamentos!A:A')
  const idx = rows.findIndex(row => row[0] === id)
  if (idx === -1) throw new SheetsError(`Lançamento ${id} não encontrado.`, 'desconhecido')
  await _deleteRow(ctx, 'lancamentos', idx + 1)
}

async function buscarConfig() {
  const rows = await _get(_ctxCasal(), 'config!A:B')
  return Object.fromEntries(
    rows.filter(([k]) => k && k !== 'chave').map(([k, v]) => [k, v ?? ''])
  )
}

async function salvarConfig(config) {
  const ctx = _ctxCasal()
  const rows = await _get(ctx, 'config!A:B')
  const toAppend = []
  for (const [chave, valor] of Object.entries(config)) {
    const idx = rows.findIndex(row => row[0] === chave)
    if (idx === -1) {
      toAppend.push([chave, String(valor)])
    } else {
      await _update(ctx, `config!A${idx + 1}:B${idx + 1}`, [[chave, String(valor)]])
    }
  }
  if (toAppend.length > 0) await _append(ctx, 'config!A:B', toAppend)
}

async function testarConexao() {
  try {
    await buscarConfig()
    return { ok: true }
  } catch (err) {
    return { ok: false, erro: err.message }
  }
}

// --- API pública: PESSOAL (planilha da pessoa logada) ---

async function buscarPessoal(pessoa, mes, ano) {
  const rows = await _get(_ctxPessoal(pessoa), 'pessoal!A:J')
  return rows
    .filter(row => row[0] && row[0] !== 'id')
    .map(_rowParaPessoal)
    .filter(l => {
      if (mes == null) return true
      const [y, m] = (l.data ?? '').split('-').map(Number)
      return y === ano && m === mes
    })
}

async function adicionarPessoal(pessoa, lancamento) {
  await _append(_ctxPessoal(pessoa), 'pessoal!A:J', [_pessoalParaRow(lancamento)])
}

async function atualizarPessoal(pessoa, id, dados) {
  const ctx = _ctxPessoal(pessoa)
  const rows = await _get(ctx, 'pessoal!A:J')
  const idx = rows.findIndex(row => row[0] === id)
  if (idx === -1) throw new SheetsError(`Lançamento pessoal ${id} não encontrado.`, 'desconhecido')
  const updated = { ..._rowParaPessoal(rows[idx]), ...dados }
  await _update(ctx, `pessoal!A${idx + 1}:J${idx + 1}`, [_pessoalParaRow(updated)])
}

async function removerPessoal(pessoa, id) {
  const ctx = _ctxPessoal(pessoa)
  const rows = await _get(ctx, 'pessoal!A:A')
  const idx = rows.findIndex(row => row[0] === id)
  if (idx === -1) throw new SheetsError(`Lançamento pessoal ${id} não encontrado.`, 'desconhecido')
  await _deleteRow(ctx, 'pessoal', idx + 1)
}

async function testarConexaoPessoal(pessoa) {
  try {
    await buscarPessoal(pessoa, null, null)
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
  buscarPessoal,
  adicionarPessoal,
  atualizarPessoal,
  removerPessoal,
  testarConexaoPessoal,
}
