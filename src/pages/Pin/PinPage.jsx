import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import usePin from '../../hooks/usePin'
import { temAlgumPin } from '../../services/storage'

const TITULOS = {
  criar_a:     'Crie o PIN da Pessoa A',
  confirmar_a: 'Confirme o PIN da Pessoa A',
  criar_b:     'Crie o PIN da Pessoa B',
  confirmar_b: 'Confirme o PIN da Pessoa B',
  validar:     'Digite seu PIN',
}

const TECLAS = ['1','2','3','4','5','6','7','8','9','','0','⌫']

function PinPage() {
  const navigate = useNavigate()
  const { modo, digitos, erro, bloqueado, segundosRestantes, autenticado, adicionarDigito, removerDigito } = usePin()

  useEffect(() => {
    const sessionAtiva = sessionStorage.getItem('fc_session') === 'true'
    if (sessionAtiva && temAlgumPin()) navigate('/', { replace: true })
  }, [navigate])

  useEffect(() => {
    if (autenticado) navigate('/', { replace: true })
  }, [autenticado, navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-primary px-6 safe-top safe-bottom">
      {/* Logo */}
      <div className="mb-12 text-center">
        <div className="text-5xl mb-3">💰</div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">FinançasCasal</h1>
      </div>

      {/* Título */}
      <p className="text-text-secondary text-sm mb-8 text-center">{TITULOS[modo]}</p>

      {/* Dots */}
      <div className="flex gap-5 mb-6">
        {[0, 1, 2, 3].map(i => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full transition-all duration-150 ${
              i < digitos.length
                ? 'bg-accent-primary scale-110'
                : 'bg-border'
            }`}
          />
        ))}
      </div>

      {/* Mensagem de status */}
      <div className="h-6 mb-8">
        {bloqueado ? (
          <p className="text-danger text-sm text-center">
            Aguarde {segundosRestantes}s para tentar novamente
          </p>
        ) : erro ? (
          <p className="text-danger text-sm text-center animate-fade-in">{erro}</p>
        ) : null}
      </div>

      {/* Teclado numérico */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
        {TECLAS.map((tecla, i) => {
          if (tecla === '') return <div key={i} />

          if (tecla === '⌫') {
            return (
              <button
                key={i}
                onClick={removerDigito}
                disabled={bloqueado || digitos.length === 0}
                aria-label="Apagar"
                className="flex items-center justify-center h-16 rounded-2xl text-text-secondary text-2xl active:bg-border transition-colors disabled:opacity-30"
              >
                ⌫
              </button>
            )
          }

          return (
            <button
              key={i}
              onClick={() => adicionarDigito(tecla)}
              disabled={bloqueado}
              className="flex items-center justify-center h-16 rounded-2xl bg-bg-card border border-border text-text-primary text-2xl font-medium active:bg-border transition-colors disabled:opacity-30"
            >
              {tecla}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default PinPage
