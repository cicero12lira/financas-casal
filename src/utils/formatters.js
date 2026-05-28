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

export { formatarMoeda, formatarData, formatarDataCurta, formatarMesAno }
