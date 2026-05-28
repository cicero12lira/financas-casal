import { useMemo } from 'react'
import useConfig from './useConfig'
import { CATEGORIAS_PADRAO } from '../constants/categories'

function parseCategorias(raw) {
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
    || `cat_${Date.now()}`
}

function useCategorias() {
  const { config, atualizar } = useConfig()

  const categorias = useMemo(
    () => parseCategorias(config.categorias) ?? CATEGORIAS_PADRAO,
    [config.categorias],
  )

  async function persistir(novas) {
    await atualizar({ categorias: JSON.stringify(novas) })
  }

  async function adicionar({ label, icon }) {
    const nome = label.trim()
    if (!nome) return
    let id = slug(nome)
    if (categorias.some(c => c.id === id)) id = `${id}_${Date.now()}`
    await persistir([...categorias, { id, label: nome, icon: icon || '💰' }])
  }

  async function editar(id, { label, icon }) {
    await persistir(categorias.map(c =>
      c.id === id ? { ...c, label: label.trim() || c.label, icon: icon || c.icon } : c
    ))
  }

  async function remover(id) {
    await persistir(categorias.filter(c => c.id !== id))
  }

  return { categorias, adicionar, editar, remover }
}

export default useCategorias
