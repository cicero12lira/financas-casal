import { useState } from 'react'
import { EMOJIS_CATEGORIA } from '../../constants/financas'

// Seletor de emoji: botão com o emoji atual que abre uma grade de opções.
// Também aceita digitar/colar um emoji direto no campo.
function EmojiPicker({ value, onChange }) {
  const [aberto, setAberto] = useState(false)

  function escolher(e) {
    onChange(e)
    setAberto(false)
  }

  return (
    <div className="relative">
      <button type="button" onClick={() => setAberto(v => !v)}
        className="w-14 h-[46px] flex items-center justify-center bg-bg-primary border border-border rounded-xl text-xl outline-none focus:border-accent-primary transition-colors">
        {value || '🙂'}
      </button>
      {aberto && (
        <div className="absolute z-20 mt-1 left-0 w-64 max-h-48 overflow-y-auto bg-bg-card border border-border rounded-xl p-2 shadow-lg">
          <input autoFocus value={value || ''} onChange={e => onChange(e.target.value.slice(0, 2))}
            placeholder="Digitar emoji…"
            className="w-full mb-2 bg-bg-primary border border-border rounded-lg px-2 py-1.5 text-sm text-center outline-none" />
          <div className="grid grid-cols-8 gap-1">
            {EMOJIS_CATEGORIA.map(e => (
              <button key={e} type="button" onClick={() => escolher(e)}
                className={`h-8 rounded-lg text-lg active:scale-90 transition-transform ${value === e ? 'bg-accent-primary/30' : 'hover:bg-bg-primary'}`}>
                {e}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default EmojiPicker
