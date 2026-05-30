import { ehDespesa } from '../constants/financas'

// Combina lançamentos do casal e pessoais conforme o escopo selecionado.
// No modo "tudo", exclui as cópias pessoais de despesas do casal (origem === 'casal')
// para não contar duas vezes. Cada item ganha _escopo para exibição.
function combinarLancamentos(casal, pessoal, escopo) {
  const comCasal = casal.map(l => ({ ...l, _escopo: 'casal' }))
  const comPessoal = pessoal.map(l => ({ ...l, _escopo: 'pessoal' }))
  if (escopo === 'casal') return comCasal
  if (escopo === 'pessoal') return comPessoal
  return [...comCasal, ...comPessoal.filter(l => l.origem !== 'casal')]
}

const _efetivada = (l) => l.efetivada !== false

function somaReceitas(lista, { soEfetivadas = true } = {}) {
  return lista
    .filter(l => l.tipo === 'receita' && (!soEfetivadas || _efetivada(l)))
    .reduce((s, l) => s + l.valor, 0)
}

function somaDespesas(lista, { soEfetivadas = true } = {}) {
  return lista
    .filter(l => ehDespesa(l.tipo) && (!soEfetivadas || _efetivada(l)))
    .reduce((s, l) => s + l.valor, 0)
}

export { combinarLancamentos, somaReceitas, somaDespesas }
