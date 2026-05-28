import { useState, useEffect, useCallback } from 'react'
import { getLancamentosPessoal, setLancamentosPessoal, getUsuario, getPessoalCreds } from '../services/storage'
import { buscarPessoal } from '../services/sheets'
import { sincronizarPessoalPendentes, reconciliarPessoal } from '../services/pessoal'
import useUsuario from './useUsuario'

function _doMes(l, mes, ano) {
  const [y, m] = (l.data || '').split('-').map(Number)
  return y === ano && m === mes
}

function usePessoal(mes, ano) {
  const { nome } = useUsuario()
  const usuario = getUsuario() || 'a'
  const temCreds = !!getPessoalCreds(usuario)?.sheetsId

  const carregarLocal = useCallback(
    () => getLancamentosPessoal(usuario).filter(l => _doMes(l, mes, ano)),
    [usuario, mes, ano],
  )

  const [lancamentos, setLocal] = useState(carregarLocal)
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState(null)

  useEffect(() => { setLocal(carregarLocal()) }, [carregarLocal])

  const sincronizar = useCallback(async () => {
    if (!navigator.onLine || !temCreds) return
    setCarregando(true)
    setErro(null)
    try {
      await reconciliarPessoal({ usuario, nome })
      await sincronizarPessoalPendentes(usuario)

      const remotos = await buscarPessoal(usuario, mes, ano)
      const todos = getLancamentosPessoal(usuario)
      const outrosMeses = todos.filter(l => !_doMes(l, mes, ano))
      const pendentesMes = todos.filter(l => _doMes(l, mes, ano) && !l.sincronizado)
      const soPendentes = pendentesMes.filter(p => !remotos.find(r => r.id === p.id))

      const mesAtualizado = [...remotos, ...soPendentes]
      setLancamentosPessoal(usuario, [...outrosMeses, ...mesAtualizado])
      setLocal(mesAtualizado)
    } catch (err) {
      setErro(err.message)
    } finally {
      setCarregando(false)
    }
  }, [usuario, nome, mes, ano, temCreds])

  useEffect(() => { sincronizar() }, [sincronizar])

  function adicionarLocal(lancamento) {
    const todos = getLancamentosPessoal(usuario)
    setLancamentosPessoal(usuario, [...todos, lancamento])
    setLocal(prev => [...prev, lancamento])
  }

  function atualizarLocal(id, dados) {
    const todos = getLancamentosPessoal(usuario).map(l => l.id === id ? { ...l, ...dados } : l)
    setLancamentosPessoal(usuario, todos)
    setLocal(prev => prev.map(l => l.id === id ? { ...l, ...dados } : l))
  }

  function removerLocal(id) {
    setLancamentosPessoal(usuario, getLancamentosPessoal(usuario).filter(l => l.id !== id))
    setLocal(prev => prev.filter(l => l.id !== id))
  }

  const pendentes = lancamentos.filter(l => !l.sincronizado).length

  return { lancamentos, carregando, erro, pendentes, temCreds, sincronizar, adicionarLocal, atualizarLocal, removerLocal }
}

export default usePessoal
