/**
 * Cliente HTTP do backend FinançasCasal (FastAPI em /api).
 * Injeta o JWT do fc_auth e trata 401 (sessão expirada → logout).
 */
import { getAuth, clearAuth } from './storage'

const BASE = '/api'

function authHeader() {
  const token = getAuth()?.token
  return token ? { Authorization: `Bearer ${token}` } : {}
}

async function request(metodo, caminho, corpo) {
  const resp = await fetch(BASE + caminho, {
    method: metodo,
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(),
    },
    body: corpo !== undefined ? JSON.stringify(corpo) : undefined,
  })

  if (resp.status === 401) {
    clearAuth()
    if (!location.pathname.endsWith('/login')) location.assign('login')
    throw new Error('Sessão expirada.')
  }

  if (!resp.ok) {
    let msg = `Erro ${resp.status}`
    try { msg = (await resp.json()).detail || msg } catch { /* sem corpo */ }
    throw new Error(msg)
  }

  if (resp.status === 204) return null
  return resp.json()
}

export const apiGet  = (caminho)        => request('GET', caminho)
export const apiPost = (caminho, corpo) => request('POST', caminho, corpo)
export const apiPut  = (caminho, corpo) => request('PUT', caminho, corpo)
export const apiDel  = (caminho)        => request('DELETE', caminho)
