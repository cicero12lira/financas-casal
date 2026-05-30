/**
 * Reconciliação do controle pessoal com as despesas do casal.
 * A lógica vive no backend (POST /api/reconciliar): garante que cada despesa do
 * casal paga pelo usuário logado tenha uma cópia pessoal vinculada e remove órfãos.
 */
import { reconciliar } from './dados'

async function reconciliarPessoal() {
  await reconciliar()
}

export { reconciliarPessoal }
