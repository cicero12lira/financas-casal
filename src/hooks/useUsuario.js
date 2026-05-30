import useConfig from './useConfig'
import { getAuth } from '../services/storage'

// Identifica o usuário logado ('a' | 'b') e resolve nomes a partir do login Google + config.
function useUsuario() {
  const { config } = useConfig()
  const auth = getAuth()
  const usuario = auth?.usuario || 'a'

  const nomeA = config.nome_pessoa_a || 'Pessoa A'
  const nomeB = config.nome_pessoa_b || 'Pessoa B'

  const nome      = auth?.nome || (usuario === 'b' ? nomeB : nomeA)
  const nomeOutro = usuario === 'b' ? nomeA : nomeB
  const email     = auth?.email || ''

  return { usuario, nome, nomeOutro, email }
}

export default useUsuario
