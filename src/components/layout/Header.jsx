import { useNavigate } from 'react-router-dom'
import { formatarMesAno } from '../../utils/formatters'

function Header({ pendentes = 0 }) {
  const navigate = useNavigate()
  const now = new Date()

  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 h-14 bg-bg-primary border-b border-border">
      <div className="flex items-center gap-2">
        <h1 className="text-text-primary font-semibold text-lg leading-none">
          {formatarMesAno(now.getMonth() + 1, now.getFullYear())}
        </h1>
        {pendentes > 0 && (
          <span className="text-xs text-text-secondary" title="Sincronização pendente">
            🔄 {pendentes}
          </span>
        )}
      </div>

      <button
        onClick={() => navigate('/configuracoes')}
        aria-label="Configurações"
        className="w-9 h-9 flex items-center justify-center rounded-full text-text-secondary active:bg-border transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </button>
    </header>
  )
}

export default Header
