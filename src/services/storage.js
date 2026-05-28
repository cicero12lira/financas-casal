const KEYS = {
  PIN_HASH_LEGACY:   'fc_pin_hash',
  PIN_HASH_A:        'fc_pin_hash_a',
  PIN_HASH_B:        'fc_pin_hash_b',
  LANCAMENTOS:       'fc_lancamentos',
  CONFIG:            'fc_config',
  SHEETS_ID:         'fc_sheets_id',
  SHEETS_TOKEN:      'fc_sheets_token',
  ULTIMA_SYNC:       'fc_ultima_sync',
  INSTALACAO_BANNER: 'fc_instalacao_banner',
}

function get(key) {
  try {
    const raw = localStorage.getItem(key)
    if (raw === null) return null
    return JSON.parse(raw)
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

// --- Migração: PIN único legado → PIN da Pessoa A ---
;(function migrarPin() {
  const legado = get(KEYS.PIN_HASH_LEGACY)
  if (legado && !get(KEYS.PIN_HASH_A)) {
    set(KEYS.PIN_HASH_A, legado)
    remove(KEYS.PIN_HASH_LEGACY)
  }
})()

// --- PIN por pessoa ('a' | 'b') ---
const _pinKey = (pessoa) => pessoa === 'b' ? KEYS.PIN_HASH_B : KEYS.PIN_HASH_A
const getPinHash = (pessoa) => get(_pinKey(pessoa))
const setPinHash = (pessoa, hash) => set(_pinKey(pessoa), hash)
const removePinHash = (pessoa) => remove(_pinKey(pessoa))
const temAlgumPin = () => !!(get(KEYS.PIN_HASH_A) || get(KEYS.PIN_HASH_B))

// --- Usuário da sessão ('a' | 'b') ---
const getUsuario = () => sessionStorage.getItem('fc_usuario')
const setUsuario = (pessoa) => sessionStorage.setItem('fc_usuario', pessoa)

// --- Lançamentos do casal ---
const getLancamentos = ()    => get(KEYS.LANCAMENTOS) ?? []
const setLancamentos = (arr) => set(KEYS.LANCAMENTOS, arr)

// --- Lançamentos pessoais (por pessoa) ---
const getLancamentosPessoal = (pessoa)      => get(`fc_lancamentos_pessoal_${pessoa}`) ?? []
const setLancamentosPessoal = (pessoa, arr) => set(`fc_lancamentos_pessoal_${pessoa}`, arr)

// --- Config (casal) ---
const getConfig = ()    => get(KEYS.CONFIG) ?? {}
const setConfig = (cfg) => set(KEYS.CONFIG, cfg)

// --- Google Sheets do casal ---
const getSheetsId = ()       => get(KEYS.SHEETS_ID)
const setSheetsId = (id)     => set(KEYS.SHEETS_ID, id)
const getSheetsToken = ()    => get(KEYS.SHEETS_TOKEN)
const setSheetsToken = (tok) => set(KEYS.SHEETS_TOKEN, tok)
const removeSheetsToken = () => remove(KEYS.SHEETS_TOKEN)

// --- Credenciais pessoais (por pessoa) = { sheetsId, token } ---
const getPessoalCreds = (pessoa)         => get(`fc_pessoal_${pessoa}`)
const setPessoalCreds = (pessoa, creds)  => set(`fc_pessoal_${pessoa}`, creds)
const removePessoalCreds = (pessoa)      => remove(`fc_pessoal_${pessoa}`)

// --- Sync ---
const getUltimaSync = ()    => get(KEYS.ULTIMA_SYNC)
const setUltimaSync = (iso) => set(KEYS.ULTIMA_SYNC, iso)

// --- Banner de instalação ---
const getInstalacaoBanner = ()    => get(KEYS.INSTALACAO_BANNER) ?? false
const setInstalacaoBanner = (val) => set(KEYS.INSTALACAO_BANNER, val)

export {
  getPinHash, setPinHash, removePinHash, temAlgumPin,
  getUsuario, setUsuario,
  getLancamentos, setLancamentos,
  getLancamentosPessoal, setLancamentosPessoal,
  getConfig, setConfig,
  getSheetsId, setSheetsId,
  getSheetsToken, setSheetsToken, removeSheetsToken,
  getPessoalCreds, setPessoalCreds, removePessoalCreds,
  getUltimaSync, setUltimaSync,
  getInstalacaoBanner, setInstalacaoBanner,
}
