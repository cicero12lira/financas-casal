import useColecaoFirestore from './useColecaoFirestore'
import { assinarCartoes, adicionarCartao, atualizarCartao, removerCartao } from '../services/dados'

const OPS = {
  assinar: assinarCartoes,
  adicionar: adicionarCartao,
  atualizar: atualizarCartao,
  remover: removerCartao,
}

function useCartoes(escopo) {
  const { itens, ...resto } = useColecaoFirestore(escopo, OPS)
  return { cartoes: itens, ...resto }
}

export default useCartoes
