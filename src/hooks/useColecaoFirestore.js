import { useState, useEffect, useCallback } from 'react'
import { estaLogado } from '../services/storage'

// Coleção sincronizada por polling com o backend (contas, cartões), por escopo.
// ops: { assinar(escopo, onChange), adicionar(escopo, item), atualizar(escopo, id, dados), remover(escopo, id) }
function useColecaoFirestore(escopo, ops) {
  const temCreds = estaLogado()

  const [itens, setItens] = useState([])
  const [carregando, setCarregando] = useState(temCreds)

  useEffect(() => {
    if (!temCreds) { setCarregando(false); return }
    const unsub = ops.assinar(escopo, lista => {
      setItens(lista)
      setCarregando(false)
    })
    return unsub
  }, [escopo, temCreds])

  const adicionar = useCallback((item) => {
    if (!temCreds) return
    setItens(prev => [...prev, { ...item, sincronizado: true }])
    ops.adicionar(escopo, item).catch(() => {})
  }, [escopo, temCreds])

  const atualizar = useCallback((id, dados) => {
    if (!temCreds) return
    setItens(prev => prev.map(i => i.id === id ? { ...i, ...dados } : i))
    ops.atualizar(escopo, id, dados).catch(() => {})
  }, [escopo, temCreds])

  const remover = useCallback((id) => {
    if (!temCreds) return
    setItens(prev => prev.filter(i => i.id !== id))
    ops.remover(escopo, id).catch(() => {})
  }, [escopo, temCreds])

  const sincronizar = useCallback(() => {}, [])

  return { itens, carregando, temCreds, sincronizar, adicionar, atualizar, remover }
}

export default useColecaoFirestore
