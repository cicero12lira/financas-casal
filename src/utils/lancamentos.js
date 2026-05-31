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

// soEfetivadas: ignora agendados pendentes.
// somentePagosCartao: despesas de cartão (tipo='cartao') só contam quando pago===true.
//   Use true em Saldo do mês, Orçado×Realizado, Últimos 6 meses.
//   Use false na previsão futura (onde queremos ver o que ainda vai sair).
function somaDespesas(lista, { soEfetivadas = true, somentePagosCartao = false } = {}) {
  return lista
    .filter(l => {
      if (!ehDespesa(l.tipo)) return false
      if (soEfetivadas && !_efetivada(l)) return false
      if (somentePagosCartao && l.tipo === 'cartao' && l.pago !== true) return false
      return true
    })
    .reduce((s, l) => s + l.valor, 0)
}

// --- Saldos de conta e uso de cartão ---------------------------------------

// Saldo atual de uma conta = saldo_inicial + receitas − despesas ± transferências.
// Compras de cartão (tipo 'cartao') só saem da conta quando a fatura é paga:
// nesse momento o item ganha pago=true e conta_id = conta de pagamento do cartão.
// Itens não efetivados (agendados/pendentes) não entram por padrão.
function saldoConta(conta, lancamentos, { soEfetivadas = true } = {}) {
  let saldo = conta.saldo_inicial || 0
  for (const l of lancamentos) {
    if (soEfetivadas && l.efetivada === false) continue
    if (l.tipo === 'receita' && l.conta_id === conta.id) saldo += l.valor
    else if (l.tipo === 'gasto' && l.conta_id === conta.id) saldo -= l.valor
    else if (l.tipo === 'cartao' && l.pago === true && l.conta_id === conta.id) saldo -= l.valor
    else if (l.tipo === 'transferencia') {
      if (l.conta_id === conta.id) saldo -= l.valor
      if (l.conta_destino_id === conta.id) saldo += l.valor
    }
  }
  return saldo
}

// Limite usado de um cartão = soma das compras (tipo 'cartao') ainda não pagas.
function usoCartao(cartao, lancamentos) {
  const usado = lancamentos
    .filter(l => l.tipo === 'cartao' && l.cartao_id === cartao.id && l.pago === false)
    .reduce((s, l) => s + l.valor, 0)
  const limite = cartao.limite || 0
  return { usado, limite, disponivel: limite - usado }
}

// Mês de fatura (competência YYYY-MM) de uma compra, conforme o dia de fechamento.
// Compras após o fechamento entram na fatura do mês seguinte.
function competenciaCartao(dataISO, diaFechamento = 0) {
  const [ano, mes, dia] = (dataISO || '').split('-').map(Number)
  if (!ano || !mes) return ''
  let y = ano, m = mes
  if (diaFechamento && dia > diaFechamento) {
    m += 1
    if (m > 12) { m = 1; y += 1 }
  }
  return `${y}-${String(m).padStart(2, '0')}`
}

// Agrupa as compras de um cartão por competência (fatura).
function faturasCartao(cartao, lancamentos) {
  const itens = lancamentos.filter(l => l.tipo === 'cartao' && l.cartao_id === cartao.id)
  const mapa = new Map()
  for (const l of itens) {
    const comp = l.competencia || (l.data ? l.data.slice(0, 7) : '')
    if (!mapa.has(comp)) mapa.set(comp, [])
    mapa.get(comp).push(l)
  }
  return [...mapa.entries()]
    .map(([competencia, lista]) => ({
      competencia,
      itens: lista,
      total: lista.reduce((s, l) => s + l.valor, 0),
      paga: lista.every(l => l.pago !== false),
    }))
    .sort((a, b) => b.competencia.localeCompare(a.competencia))
}

export {
  combinarLancamentos, somaReceitas, somaDespesas,
  saldoConta, usoCartao, competenciaCartao, faturasCartao,
}
