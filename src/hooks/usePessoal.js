import { useState, useEffect, useMemo, useCallback } from 'react'
import { estaLogado } from '../services/storage'
import {
  assinarPessoal, buscarPessoal,
  adicionarPessoal, atualizarPessoal, removerPessoal,
} from '../services/dados'

function _doMes(l, mes, ano) {
  const [y, m] = (l.data || '').split('-').map(Number)
  return y === ano && m === mes
}

// Lançamentos pessoais do usuário logado (isolados no backend por usuário).
function usePessoal(mes, ano) {
  const temCreds = estaLogado()
  const [todos, setTodos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro] = useState(null)

  useEffect(() => {
    if (!temCreds) { setCarregando(false); return }
    const unsub = assinarPessoal(lista => {
      setTodos(lista)
      setCarregando(false)
    })
    return unsub
  }, [temCreds])

  const lancamentos = useMemo(() => todos.filter(l => _doMes(l, mes, ano)), [todos, mes, ano])
  const pendentes = 0

  const sincronizar = useCallback(async () => {
    if (!temCreds) return
    try { setTodos(await buscarPessoal()) } catch { /* offline */ }
  }, [temCreds])

  const adicionar = useCallback((l) => {
    setTodos(prev => [...prev, { ...l, sincronizado: true }])
    adicionarPessoal(l).catch(() => {})
  }, [])

  const atualizar = useCallback((id, dados) => {
    setTodos(prev => prev.map(l => l.id === id ? { ...l, ...dados } : l))
    atualizarPessoal(id, dados).catch(() => {})
  }, [])

  const remover = useCallback((id) => {
    setTodos(prev => prev.filter(l => l.id !== id))
    removerPessoal(id).catch(() => {})
  }, [])

  return {
    lancamentos, todos, carregando, erro, pendentes, temCreds, sincronizar,
    adicionar, atualizar, remover,
    adicionarLocal: adicionar, atualizarLocal: atualizar, removerLocal: remover,
  }
}

export default usePessoal
