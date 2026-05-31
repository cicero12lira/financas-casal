const LOCALE = 'pt-BR'

function formatarMoeda(valor) {
  return new Intl.NumberFormat(LOCALE, {
    style: 'currency',
    currency: 'BRL',
  }).format(valor)
}

function formatarData(isoString) {
  return new Intl.DateTimeFormat(LOCALE, { day: 'numeric', month: 'long' }).format(new Date(isoString))
}

function formatarDataCurta(isoString) {
  return new Intl.DateTimeFormat(LOCALE, { day: '2-digit', month: '2-digit' }).format(new Date(isoString))
}

const MESES = [
  'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
  'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',
]

function formatarMesAno(mes, ano) {
  return `${MESES[mes - 1]} ${ano}`
}

// "2026-05" → "Maio 2026" (competência de fatura).
function formatarCompetencia(comp) {
  if (!comp) return ''
  const [ano, mes] = comp.split('-').map(Number)
  if (!ano || !mes) return comp
  return formatarMesAno(mes, ano)
}

// --- Máscara de centavos para o input de valor -----------------------------
// O usuário digita só dígitos; eles preenchem da direita (centavos → reais),
// evitando o problema do cursor "no meio do nada".
function digitosParaCentavos(str) {
  const digitos = String(str ?? '').replace(/\D/g, '')
  return digitos ? parseInt(digitos, 10) : 0
}

// Centavos (inteiro) → texto "1.234,56" (sem símbolo; o "R$" fica fora do input).
function formatarValorInput(centavos) {
  return ((centavos || 0) / 100).toLocaleString(LOCALE, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export {
  formatarMoeda, formatarData, formatarDataCurta, formatarMesAno,
  formatarCompetencia, digitosParaCentavos, formatarValorInput,
}
