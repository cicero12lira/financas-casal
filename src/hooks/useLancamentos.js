import { useState, useEffect, useCallback } from 'react'
import { getLancamentos, setLancamentos as saveLancamentos } from '../services/storage'
import { buscarLancamentos } from '../services/sheets'

function _doMes(lancamento, mes, ano) {
  const [y, m] = (lancamento.data || '').split('-').map(Number)
  return y === ano && m === mes
}

function _carregarLocal(mes, ano) {
  return getLancamentos().filter(l => _doMes(l, mes, ano))
}

function useLancamentos(mes, ano) {
  const [lancamentos, setLocal] = useState(() => _carregarLocal(mes, ano))
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState(null)

  // Recarrega do localStorage quando o mês/ano muda
  useEffect(() => {
    setLocal(_carregarLocal(mes, ano))
  }, [mes, ano])

  const sincronizar = useCallback(async () => {
    if (!navigator.onLine) return
    setCarregando(true)
    setErro(null)
    try {
      const remotos = await buscarLancamentos(mes, ano)

      const todos = getLancamentos()
      const outrosMeses = todos.filter(l => !_doMes(l, mes, ano))
      const pendentes = todos.filter(l => _doMes(l, mes, ano) && !l.sincronizado)
      const somentePendentes = pendentes.filter(p => !remotos.find(r => r.id === p.id))

      const mesAtualizado = [...remotos, ...somentePendentes]
      saveLancamentos([...outrosMeses, ...mesAtualizado])
      setLocal(mesAtualizado)
    } catch (err) {
      setErro(err.message)
    } finally {
      setCarregando(false)
    }
  }, [mes, ano])

  useEffect(() => { sincronizar() }, [sincronizar])

  function adicionarLocal(lancamento) {
    const todos = getLancamentos()
    saveLancamentos([...todos, lancamento])
    setLocal(prev => [...prev, lancamento])
  }

  function atualizarLocal(id, dados) {
    const todos = getLancamentos().map(l => l.id === id ? { ...l, ...dados } : l)
    saveLancamentos(todos)
    setLocal(prev => prev.map(l => l.id === id ? { ...l, ...dados } : l))
  }

  function removerLocal(id) {
    saveLancamentos(getLancamentos().filter(l => l.id !== id))
    setLocal(prev => prev.filter(l => l.id !== id))
  }

  const pendentes = lancamentos.filter(l => !l.sincronizado).length

  return { lancamentos, carregando, erro, pendentes, sincronizar, adicionarLocal, atualizarLocal, removerLocal }
}

export default useLancamentos
