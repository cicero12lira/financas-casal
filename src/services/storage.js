const KEYS = {
  PIN_HASH:          'fc_pin_hash',
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

// --- PIN ---
const getPinHash = ()        => get(KEYS.PIN_HASH)
const setPinHash = (hash)    => set(KEYS.PIN_HASH, hash)
const removePinHash = ()     => remove(KEYS.PIN_HASH)

// --- Lançamentos ---
const getLancamentos = ()    => get(KEYS.LANCAMENTOS) ?? []
const setLancamentos = (arr) => set(KEYS.LANCAMENTOS, arr)

// --- Config ---
const getConfig = ()         => get(KEYS.CONFIG) ?? {}
const setConfig = (cfg)      => set(KEYS.CONFIG, cfg)

// --- Google Sheets ---
const getSheetsId = ()       => get(KEYS.SHEETS_ID)
const setSheetsId = (id)     => set(KEYS.SHEETS_ID, id)

const getSheetsToken = ()    => get(KEYS.SHEETS_TOKEN)
const setSheetsToken = (tok) => set(KEYS.SHEETS_TOKEN, tok)
const removeSheetsToken = () => remove(KEYS.SHEETS_TOKEN)

// --- Sync ---
const getUltimaSync = ()     => get(KEYS.ULTIMA_SYNC)
const setUltimaSync = (iso)  => set(KEYS.ULTIMA_SYNC, iso)

// --- Banner de instalação ---
const getInstalacaoBanner = ()    => get(KEYS.INSTALACAO_BANNER) ?? false
const setInstalacaoBanner = (val) => set(KEYS.INSTALACAO_BANNER, val)

export {
  getPinHash, setPinHash, removePinHash,
  getLancamentos, setLancamentos,
  getConfig, setConfig,
  getSheetsId, setSheetsId,
  getSheetsToken, setSheetsToken, removeSheetsToken,
  getUltimaSync, setUltimaSync,
  getInstalacaoBanner, setInstalacaoBanner,
}
