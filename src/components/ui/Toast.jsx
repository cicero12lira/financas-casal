import { useEffect } from 'react'

const CORES = {
  sucesso: 'bg-accent-secondary/20 border-accent-secondary/40 text-accent-secondary',
  erro:    'bg-danger/20 border-danger/40 text-danger',
  aviso:   'bg-yellow-400/20 border-yellow-400/40 text-yellow-300',
}

const ICONES = { sucesso: '✓', erro: '✕', aviso: '!' }

function Toast({ mensagem, tipo = 'sucesso', onClose }) {
  useEffect(() => {
    const id = setTimeout(onClose, 3000)
    return () => clearTimeout(id)
  }, [onClose])

  return (
    <div className={`fixed top-16 left-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border ${CORES[tipo]} animate-fade-in shadow-lg`}>
      <span className="font-bold">{ICONES[tipo]}</span>
      <span className="text-sm flex-1">{mensagem}</span>
      <button onClick={onClose} className="opacity-60 hover:opacity-100 text-lg leading-none">&times;</button>
    </div>
  )
}

export default Toast
