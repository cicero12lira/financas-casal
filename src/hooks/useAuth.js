import { useCallback, useState } from 'react'
import { apiPost } from '../services/api'
import { setAuth, clearAuth } from '../services/storage'

// Login por e-mail + senha contra o backend (FastAPI + JWT).
function useAuth() {
  // erro: null | 'credenciais' | 'rede'
  const [erro, setErro] = useState(null)
  const [carregando, setCarregando] = useState(false)

  const login = useCallback(async (email, senha) => {
    setCarregando(true)
    setErro(null)
    try {
      const { token, usuario } = await apiPost('/auth/login', {
        email: (email || '').trim().toLowerCase(),
        senha,
      })
      const auth = {
        token,
        uid: usuario.id,
        usuario: usuario.papel,
        email: usuario.email,
        nome: usuario.nome,
      }
      setAuth(auth)
      return auth
    } catch (e) {
      setErro(/inv[aá]lid/i.test(e.message) ? 'credenciais' : 'rede')
      return null
    } finally {
      setCarregando(false)
    }
  }, [])

  const logout = useCallback(() => {
    clearAuth()
  }, [])

  return { erro, setErro, login, logout, carregando }
}

export default useAuth
