import {
  getLancamentos,
  getLancamentosPessoal, setLancamentosPessoal,
  getPessoalCreds,
} from './storage'
import { adicionarPessoal, removerPessoal } from './sheets'
import { gerarUUID } from '../utils/uuid'

// Envia para a planilha pessoal os lançamentos ainda não sincronizados.
async function sincronizarPessoalPendentes(usuario) {
  if (!getPessoalCreds(usuario)?.sheetsId) return
  const pendentes = getLancamentosPessoal(usuario).filter(l => !l.sincronizado)
  for (const l of pendentes) {
    try {
      await adicionarPessoal(usuario, l)
      const todos = getLancamentosPessoal(usuario).map(x =>
        x.id === l.id ? { ...x, sincronizado: true } : x
      )
      setLancamentosPessoal(usuario, todos)
    } catch {
      // mantém pendente para o próximo ciclo
    }
  }
}

// Garante que cada despesa do casal paga por "nome" tenha uma despesa pessoal
// vinculada no controle do usuário, e remove vínculos órfãos (despesa do casal
// excluída ou repassada a outra pessoa).
async function reconciliarPessoal({ usuario, nome }) {
  if (!nome) return

  const despesasCasal = getLancamentos().filter(l => l.tipo === 'gasto' && l.quem_pagou === nome)
  const idsCasalMeus = new Set(despesasCasal.map(l => l.id))

  let pessoais = getLancamentosPessoal(usuario)
  const temVinculo = new Set(pessoais.filter(l => l.origem === 'casal').map(l => l.ref_casal_id))

  const online = navigator.onLine && !!getPessoalCreds(usuario)?.sheetsId
  let mutou = false

  // Cria os vínculos faltantes
  for (const d of despesasCasal) {
    if (temVinculo.has(d.id)) continue
    const novo = {
      id:           gerarUUID(),
      data:         d.data,
      valor:        d.valor,
      tipo:         'gasto',
      categoria:    d.categoria,
      descricao:    d.descricao ? `[Casal] ${d.descricao}` : '[Casal]',
      criado_em:    new Date().toISOString(),
      origem:       'casal',
      ref_casal_id: d.id,
      sincronizado: false,
    }
    pessoais = [...pessoais, novo]
    mutou = true
    if (online) {
      try {
        await adicionarPessoal(usuario, novo)
        pessoais = pessoais.map(x => x.id === novo.id ? { ...x, sincronizado: true } : x)
      } catch {
        // fica pendente
      }
    }
  }

  // Remove vínculos órfãos
  const orfaos = pessoais.filter(l => l.origem === 'casal' && !idsCasalMeus.has(l.ref_casal_id))
  if (orfaos.length > 0) {
    for (const o of orfaos) {
      if (online && o.sincronizado) {
        try { await removerPessoal(usuario, o.id) } catch { /* tenta depois */ }
      }
    }
    pessoais = pessoais.filter(l => !(l.origem === 'casal' && !idsCasalMeus.has(l.ref_casal_id)))
    mutou = true
  }

  if (mutou) setLancamentosPessoal(usuario, pessoais)
}

export { sincronizarPessoalPendentes, reconciliarPessoal }
