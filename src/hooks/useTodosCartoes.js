import { useState, useEffect } from 'react'
import { estaLogado } from '../services/storage'
import { assinarCartoes } from '../services/dados'

// Todos os cartões acessíveis: do casal + os pessoais do usuário logado.
// (Os cartões pessoais do parceiro não são retornados pelo backend, por privacidade.)
// Cada cartão ganha _escopo para exibição e para saber onde gravar.
function useTodosCartoes() {
  const temCreds = estaLogado()
  const [casal, setCasal] = useState([])
  const [pessoal, setPessoal] = useState([])

  useEffect(() => {
    if (!temCreds) return
    const u1 = assinarCartoes('casal', l => setCasal(l.map(c => ({ ...c, _escopo: 'casal' }))))
    const u2 = assinarCartoes('pessoal', l => setPessoal(l.map(c => ({ ...c, _escopo: 'pessoal' }))))
    return () => { u1(); u2() }
  }, [temCreds])

  return { cartoes: [...casal, ...pessoal], temCreds }
}

export default useTodosCartoes
