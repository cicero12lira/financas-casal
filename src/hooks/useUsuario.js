import useConfig from './useConfig'
import { getUsuario } from '../services/storage'

// Identifica o usuário logado ('a' | 'b') e resolve nomes a partir da config do casal.
function useUsuario() {
  const { config } = useConfig()
  const usuario = getUsuario() || 'a'

  const nomeA = config.nome_pessoa_a || 'Pessoa A'
  const nomeB = config.nome_pessoa_b || 'Pessoa B'

  const nome      = usuario === 'b' ? nomeB : nomeA
  const nomeOutro = usuario === 'b' ? nomeA : nomeB

  return { usuario, nome, nomeOutro }
}

export default useUsuario
