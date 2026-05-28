const CATEGORIAS_PADRAO = [
  { id: 'alimentacao', label: 'Alimentação', icon: '🍔' },
  { id: 'transporte',  label: 'Transporte',  icon: '🚗' },
  { id: 'casa',        label: 'Casa',         icon: '🏠' },
  { id: 'saude',       label: 'Saúde',        icon: '💊' },
  { id: 'lazer',       label: 'Lazer',        icon: '🎬' },
  { id: 'compras',     label: 'Compras',      icon: '🛍️' },
  { id: 'trabalho',    label: 'Trabalho',     icon: '💼' },
  { id: 'outro',       label: 'Outro',        icon: '➕' },
]

function iconeCategoria(id, categorias = CATEGORIAS_PADRAO) {
  return categorias.find(c => c.id === id)?.icon ?? '💰'
}

function labelCategoria(id, categorias = CATEGORIAS_PADRAO) {
  return categorias.find(c => c.id === id)?.label ?? id
}

export { CATEGORIAS_PADRAO, iconeCategoria, labelCategoria }
