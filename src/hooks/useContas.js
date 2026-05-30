import useColecaoFirestore from './useColecaoFirestore'
import { assinarContas, adicionarConta, atualizarConta, removerConta } from '../services/dados'

const OPS = {
  assinar: assinarContas,
  adicionar: adicionarConta,
  atualizar: atualizarConta,
  remover: removerConta,
}

function useContas(escopo) {
  const { itens, ...resto } = useColecaoFirestore(escopo, OPS)
  return { contas: itens, ...resto }
}

export default useContas
