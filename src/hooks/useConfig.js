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

// Orçamento conforme o escopo selecionado.
//  - 'casal'   → orcamento_casal
//  - 'pessoal' → orcamento_pessoal_<usuario> (a|b)
//  - 'tudo'    → casal + meu pessoal
// Compatível com o campo único antigo `orcamento_mensal` (fallback).
function orcamentoDoEscopo(config, escopo, usuario) {
  const legado = Number(config.orcamento_mensal) || 0
  const chaveMeu = usuario === 'b' ? 'orcamento_pessoal_b' : 'orcamento_pessoal_a'
  const casal = Number(config.orcamento_casal) || 0
  const meu = Number(config[chaveMeu]) || 0
  if (escopo === 'pessoal') return meu || legado
  if (escopo === 'casal') return casal || legado
  return (casal + meu) || legado
}

export default useConfig
export { orcamentoDoEscopo }
