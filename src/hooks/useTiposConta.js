import { useMemo } from 'react'
import useConfig from './useConfig'
import { TIPOS_CONTA } from '../constants/financas'

// Tipos de conta editáveis pelo casal, guardados na config (campo `tipos_conta`).
// Espelha o padrão de useCategorias. Quando não há nada salvo, usa TIPOS_CONTA.
function parseLista(raw) {
  if (Array.isArray(raw)) return raw
  if (typeof raw === 'string' && raw.trim()) {
    try {
      const arr = JSON.parse(raw)
      if (Array.isArray(arr)) return arr
    } catch {
      // valor inválido — cai no seed padrão
    }
  }
  return null
}

function slug(label) {
  return label
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    || `tipo_${Date.now()}`
}

function useTiposConta() {
  const { config, atualizar } = useConfig()

  const tipos = useMemo(
    () => parseLista(config.tipos_conta) ?? TIPOS_CONTA,
    [config.tipos_conta],
  )

  async function persistir(novos) {
    await atualizar({ tipos_conta: JSON.stringify(novos) })
  }

  async function adicionar({ label, icon }) {
    const nome = label.trim()
    if (!nome) return
    let id = slug(nome)
    if (tipos.some(t => t.id === id)) id = `${id}_${Date.now()}`
    await persistir([...tipos, { id, label: nome, icon: icon || '🏦' }])
  }

  async function editar(id, { label, icon }) {
    await persistir(tipos.map(t =>
      t.id === id ? { ...t, label: label.trim() || t.label, icon: icon || t.icon } : t
    ))
  }

  async function remover(id) {
    await persistir(tipos.filter(t => t.id !== id))
  }

  return { tipos, adicionar, editar, remover }
}

export default useTiposConta
