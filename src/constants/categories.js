const CATEGORIAS = [
  { id: 'alimentacao', label: 'Alimentação', icon: '🍔' },
  { id: 'transporte',  label: 'Transporte',  icon: '🚗' },
  { id: 'casa',        label: 'Casa',         icon: '🏠' },
  { id: 'saude',       label: 'Saúde',        icon: '💊' },
  { id: 'lazer',       label: 'Lazer',        icon: '🎬' },
  { id: 'compras',     label: 'Compras',      icon: '🛍️' },
  { id: 'trabalho',    label: 'Trabalho',     icon: '💼' },
  { id: 'outro',       label: 'Outro',        icon: '➕' },
]

function iconeCategoria(id) {
  return CATEGORIAS.find(c => c.id === id)?.icon ?? '💰'
}

export { CATEGORIAS, iconeCategoria }
