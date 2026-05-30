/**
 * Camada de dados sobre o backend FinançasCasal (substitui o antigo firestore.js).
 * Mantém os mesmos nomes de função que os hooks já usavam; as "assinaturas" em
 * tempo real viram POLLING periódico (o backend não empurra mudanças).
 *
 * assinar*(onChange) → faz um fetch imediato + refetch a cada POLL_MS e
 * retorna uma função de cleanup (mesmo contrato de unsubscribe()).
 */
import { apiGet, apiPost, apiPut, apiDel } from './api'

const POLL_MS = 15000

// Cria uma "assinatura" por polling de um endpoint que retorna lista.
function assinarLista(caminho, onChange) {
  let vivo = true
  const buscar = async () => {
    try {
      const lista = await apiGet(caminho)
      if (vivo) onChange(lista)
    } catch { /* offline/erro: mantém o que já tem */ }
  }
  buscar()
  const timer = setInterval(buscar, POLL_MS)
  return () => { vivo = false; clearInterval(timer) }
}

// ---------- Lançamentos do casal ----------

export const assinarLancamentos  = (onChange) => assinarLista('/lancamentos?escopo=casal', onChange)
export const buscarLancamentos   = ()         => apiGet('/lancamentos?escopo=casal')
export const adicionarLancamento = (l)        => apiPost('/lancamentos?escopo=casal', l)
export const atualizarLancamento = (id, d)    => apiPut(`/lancamentos/${id}`, d)
export const removerLancamento   = (id)       => apiDel(`/lancamentos/${id}`)

// ---------- Lançamentos pessoais ----------

export const assinarPessoal  = (onChange) => assinarLista('/lancamentos?escopo=pessoal', onChange)
export const buscarPessoal   = ()         => apiGet('/lancamentos?escopo=pessoal')
export const adicionarPessoal = (l)        => apiPost('/lancamentos?escopo=pessoal', l)
export const atualizarPessoal = (id, d)    => apiPut(`/lancamentos/${id}`, d)
export const removerPessoal   = (id)       => apiDel(`/lancamentos/${id}`)

// ---------- Contas e cartões (por escopo: 'casal' | 'pessoal') ----------

export const assinarContas  = (escopo, onChange) => assinarLista(`/contas?escopo=${escopo}`, onChange)
export const adicionarConta = (escopo, c)         => apiPost(`/contas?escopo=${escopo}`, c)
export const atualizarConta = (escopo, id, d)     => apiPut(`/contas/${id}`, d)
export const removerConta   = (escopo, id)        => apiDel(`/contas/${id}`)

export const assinarCartoes  = (escopo, onChange) => assinarLista(`/cartoes?escopo=${escopo}`, onChange)
export const adicionarCartao = (escopo, c)         => apiPost(`/cartoes?escopo=${escopo}`, c)
export const atualizarCartao = (escopo, id, d)     => apiPut(`/cartoes/${id}`, d)
export const removerCartao   = (escopo, id)        => apiDel(`/cartoes/${id}`)

// ---------- Config ----------

export const buscarConfig = ()       => apiGet('/config')
export const salvarConfig = (config) => apiPut('/config', config)
export const assinarConfig = (onChange) => assinarLista('/config', onChange)

export async function testarConexao() {
  try {
    await apiGet('/config')
    return { ok: true }
  } catch (err) {
    return { ok: false, erro: err.message }
  }
}

// ---------- Reconciliação do controle pessoal (server-side) ----------

export const reconciliar = () => apiPost('/reconciliar')
