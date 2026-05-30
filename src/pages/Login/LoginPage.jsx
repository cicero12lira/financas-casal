import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { estaLogado } from '../../services/storage'

const MENSAGENS_ERRO = {
  credenciais: 'E-mail ou senha inválidos.',
  rede: 'Não foi possível conectar. Verifique sua internet e tente novamente.',
}

const inputCls = 'w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:border-accent-primary transition-colors'

function LoginPage() {
  const navigate = useNavigate()
  const { erro, login, carregando } = useAuth()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  useEffect(() => {
    if (estaLogado()) navigate('/', { replace: true })
  }, [navigate])

  async function entrar(e) {
    e.preventDefault()
    if (!email.trim() || !senha) return
    const auth = await login(email, senha)
    if (auth) navigate('/', { replace: true })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-primary px-6 py-10 safe-top safe-bottom">
      <div className="mb-10 text-center">
        <div className="text-5xl mb-3">💰</div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">FinançasCasal</h1>
        <p className="text-text-secondary text-sm mt-2">Entre na sua conta</p>
      </div>

      <form onSubmit={entrar} className="w-full max-w-sm space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs text-text-secondary">E-mail</label>
          <input type="email" autoComplete="username" value={email}
            onChange={e => setEmail(e.target.value)} placeholder="voce@gmail.com" className={inputCls} />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs text-text-secondary">Senha</label>
          <input type="password" autoComplete="current-password" value={senha}
            onChange={e => setSenha(e.target.value)} placeholder="••••••••" className={inputCls} />
        </div>

        <button type="submit" disabled={carregando || !email.trim() || !senha}
          className="w-full py-3 rounded-xl bg-accent-primary text-white text-sm font-semibold disabled:opacity-40 active:scale-95 transition-all">
          {carregando ? 'Entrando...' : 'Entrar'}
        </button>

        <div className="h-6 text-center">
          {erro && <p className="text-danger text-sm animate-fade-in">{MENSAGENS_ERRO[erro]}</p>}
        </div>
      </form>
    </div>
  )
}

export default LoginPage
