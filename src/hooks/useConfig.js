import { useState, useEffect } from 'react'
import { getConfig, setConfig as saveConfig } from '../services/storage'
import { buscarConfig, salvarConfig } from '../services/sheets'

function useConfig() {
  const [config, setLocal] = useState(() => getConfig())
  const [carregando, setCarregando] = useState(false)

  useEffect(() => {
    if (!navigator.onLine) return
    setCarregando(true)
    buscarConfig()
      .then(remote => {
        const merged = { ...getConfig(), ...remote }
        saveConfig(merged)
        setLocal(merged)
      })
      .catch(() => {})
      .finally(() => setCarregando(false))
  }, [])

  async function atualizar(novos) {
    const updated = { ...config, ...novos }
    saveConfig(updated)
    setLocal(updated)
    if (navigator.onLine) {
      await salvarConfig(novos).catch(() => {})
    }
  }

  return { config, carregando, atualizar }
}

export default useConfig
