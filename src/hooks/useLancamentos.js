import { useState, useEffect, useMemo, useCallback } from 'react'
import { estaLogado } from '../services/storage'
import {
  assinarLancamentos, buscarLancamentos,
  adicionarLancamento, atualizarLancamento, removerLancamento,
} from '../services/dados'

function _doMes(lancamento, mes, ano) {
  const [y, m] = (lancamento.data || '').split('-').map(Number)
  return y === ano && m === mes
}

// Lançamentos do casal. Faz polling do backend (~15s). `todos` traz todos os
// meses; `lancamentos`, só o mês pedido.
function useLancamentos(mes, ano) {
  const [todos, setTodos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro] = useState(null)

  useEffect(() => {
    if (!estaLogado()) { setCarregando(false); return }
    const unsub = assinarLancamentos(lista => {
      setTodos(lista)
      setCarregando(false)
    })
    return unsub
  }, [])

  const lancamentos = useMemo(() => todos.filter(l => _doMes(l, mes, ano)), [todos, mes, ano])
  const pendentes = 0 // sem fila offline: escritas confirmam no servidor

  const sincronizar = useCallback(async () => {
    try { setTodos(await buscarLancamentos()) } catch { /* offline */ }
  }, [])

  // Escrita otimista: aplica local na hora e confirma no servidor.
  const adicionar = useCallback((l) => {
    setTodos(prev => [...prev, { ...l, sincronizado: true }])
    adicionarLancamento(l).catch(() => {})
  }, [])

  const atualizar = useCallback((id, dados) => {
    setTodos(prev => prev.map(l => l.id === id ? { ...l, ...dados } : l))
    atualizarLancamento(id, dados).catch(() => {})
  }, [])

  const remover = useCallback((id) => {
    setTodos(prev => prev.filter(l => l.id !== id))
    removerLancamento(id).catch(() => {})
  }, [])

  return {
    lancamentos, todos, carregando, erro, pendentes, sincronizar,
    adicionar, atualizar, remover,
    adicionarLocal: adicionar, atualizarLocal: atualizar, removerLocal: remover,
  }
}

export default useLancamentos
