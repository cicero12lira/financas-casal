/**
 * Abstração do localStorage.
 * Os dados ficam no backend (Postgres). O localStorage guarda apenas:
 *  - Sessão/identidade (token JWT + dados do usuário)
 *  - Cache da config do casal (exibição offline)
 */

function get(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw === null ? null : JSON.parse(raw)
  } catch {
    return null
  }
}

function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function remove(key) {
  localStorage.removeItem(key)
}

// --- Auth (sessão) = { token, uid, usuario: 'a'|'b', email, nome } ---
const getAuth    = ()      => get('fc_auth')
const setAuth    = (auth)  => set('fc_auth', auth)
const clearAuth  = ()      => remove('fc_auth')
const estaLogado = ()      => !!getAuth()?.token
const getUsuario = ()      => getAuth()?.usuario ?? null
const getUid     = ()      => getAuth()?.uid ?? null

// --- Config do casal (cache local para exibição offline) ---
const getConfig = ()    => get('fc_config') ?? {}
const setConfig = (cfg) => set('fc_config', cfg)

// --- Banner de instalação PWA ---
const getInstalacaoBanner = ()    => get('fc_instalacao_banner') ?? false
const setInstalacaoBanner = (val) => set('fc_instalacao_banner', val)

// --- Última sync ---
const getUltimaSync = ()    => get('fc_ultima_sync')
const setUltimaSync = (iso) => set('fc_ultima_sync', iso)

export {
  getAuth, setAuth, clearAuth, estaLogado, getUsuario, getUid,
  getConfig, setConfig,
  getInstalacaoBanner, setInstalacaoBanner,
  getUltimaSync, setUltimaSync,
}
