import { useState, useEffect } from 'react'
import { estaLogado } from '../services/storage'
import { assinarContas } from '../services/dados'

// Todas as contas acessíveis ao usuário logado: as do casal + as suas pessoais.
// (As contas pessoais do parceiro não são retornadas pelo backend, por privacidade.)
// Cada conta ganha _escopo, usado para exibição e para saber onde gravar.
// Somente leitura — a edição/criação continua em useContas(escopo) na Carteira.
function useTodasContas() {
  const temCreds = estaLogado()
  const [casal, setCasal] = useState([])
  const [pessoal, setPessoal] = useState([])

  useEffect(() => {
    if (!temCreds) return
    const u1 = assinarContas('casal', l => setCasal(l.map(c => ({ ...c, _escopo: 'casal' }))))
    const u2 = assinarContas('pessoal', l => setPessoal(l.map(c => ({ ...c, _escopo: 'pessoal' }))))
    return () => { u1(); u2() }
  }, [temCreds])

  return { contas: [...casal, ...pessoal], temCreds }
}

export default useTodasContas
