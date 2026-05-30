const TIPOS_CONTA = [
  { id: 'corrente', label: 'Conta corrente',   icon: '🏦' },
  { id: 'poupanca', label: 'Poupança',         icon: '🐖' },
  { id: 'dinheiro', label: 'Dinheiro',         icon: '💵' },
  { id: 'carteira', label: 'Carteira digital', icon: '📱' },
]

const BANDEIRAS = ['Visa', 'Mastercard', 'Elo', 'American Express', 'Hipercard', 'Outro']

// 'gasto' mantém o valor legado (rótulo "Despesa") para não migrar dados antigos.
const TIPOS_LANCAMENTO = [
  { id: 'gasto',         label: 'Despesa',           icon: '💸' },
  { id: 'receita',       label: 'Receita',           icon: '💰' },
  { id: 'transferencia', label: 'Transferência',     icon: '🔄' },
  { id: 'cartao',        label: 'Despesa de cartão', icon: '💳' },
]

const ESCOPOS = [
  { id: 'casal',   label: 'Casal' },
  { id: 'pessoal', label: 'Pessoal' },
]

const ESCOPOS_FILTRO = [
  { id: 'tudo',    label: 'Tudo' },
  { id: 'casal',   label: 'Casal' },
  { id: 'pessoal', label: 'Pessoal' },
]

const FREQUENCIAS = [
  { id: 'mensal',     label: 'Mensal' },
  { id: 'semanal',    label: 'Semanal' },
  { id: 'anual',      label: 'Anual' },
]

const tipoConta        = (id) => TIPOS_CONTA.find(t => t.id === id)
const labelTipoConta   = (id) => tipoConta(id)?.label ?? id
const iconeTipoConta   = (id) => tipoConta(id)?.icon ?? '🏦'

const tipoLancamento      = (id) => TIPOS_LANCAMENTO.find(t => t.id === id)
const labelTipoLancamento = (id) => tipoLancamento(id)?.label ?? id
const iconeTipoLancamento = (id) => tipoLancamento(id)?.icon ?? '💰'

// Despesas reais (saem do saldo): despesa comum + despesa de cartão.
const ehDespesa = (tipo) => tipo === 'gasto' || tipo === 'cartao'

export {
  TIPOS_CONTA, BANDEIRAS, TIPOS_LANCAMENTO, ESCOPOS, ESCOPOS_FILTRO, FREQUENCIAS,
  labelTipoConta, iconeTipoConta,
  labelTipoLancamento, iconeTipoLancamento,
  ehDespesa,
}
