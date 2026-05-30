import { useState, useEffect } from 'react'
import { estaLogado, getConfig, setConfig as saveConfig } from '../services/storage'
import { assinarConfig, salvarConfig } from '../services/dados'

// Config do casal. Cacheada no localStorage (exibição offline) e sincronizada
// com o backend por polling.
function useConfig() {
  const [config, setLocal] = useState(() => getConfig())
  const [carregando, setCarregando] = useState(false)

  useEffect(() => {
    if (!estaLogado()) return
    setCarregando(true)
    const unsub = assinarConfig(remote => {
      const merged = { ...getConfig(), ...remote }
      saveConfig(merged)
      setLocal(merged)
      setCarregando(false)
    })
    return unsub
  }, [])

  async function atualizar(novos) {
    const updated = { ...getConfig(), ...novos }
    saveConfig(updated)
    setLocal(updated)
    if (estaLogado()) {
      await salvarConfig(novos).catch(() => {})
    }
  }

  return { config, carregando, atualizar }
}

export default useConfig
