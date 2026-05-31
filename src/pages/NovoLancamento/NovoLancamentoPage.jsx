import { useState, useRef, useEffect, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useConfig from '../../hooks/useConfig'
import useLancamentos from '../../hooks/useLancamentos'
import usePessoal from '../../hooks/usePessoal'
import useCategorias from '../../hooks/useCategorias'
import useTodasContas from '../../hooks/useTodasContas'
import useTodosCartoes from '../../hooks/useTodosCartoes'
import Toast from '../../components/ui/Toast'
import { gerarUUID } from '../../utils/uuid'
import { TIPOS_LANCAMENTO, ESCOPOS, FREQUENCIAS } from '../../constants/financas'
import { competenciaCartao, faturasCartao } from '../../utils/lancamentos'
import { formatarCompetencia } from '../../utils/formatters'
import { getUsuario } from '../../services/storage'

// --- Helpers de data ----------------------------------------------------------
function addMeses(iso, n) {
  const [y, m, d] = iso.split('-').map(Number)
  const total = (m - 1) + n
  const ny = y + Math.floor(total / 12)
  const nm = ((total % 12) + 12) % 12
  const ultimoDia = new Date(ny, nm + 1, 0).getDate()
  const nd = Math.min(d, ultimoDia)
  return `${ny}-${String(nm + 1).padStart(2, '0')}-${String(nd).padStart(2, '0')}`
}

function addDias(iso, n) {
  const [y, m, d] = iso.split('-').map(Number)
  const dt = new Date(Date.UTC(y, m - 1, d + n))
  return dt.toISOString().split('T')[0]
}

function compMaisMeses(comp, n) {
  const [y, m] = comp.split('-').map(Number)
  const total = (m - 1) + n
  const ny = y + Math.floor(total / 12)
  const nm = ((total % 12) + 12) % 12
  return `${ny}-${String(nm + 1).padStart(2, '0')}`
}

// Formata valor para exibição no input (vírgula decimal, sem símbolo).
function fmtValor(raw) {
  return raw
}

function NovoLancamentoPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const editId    = searchParams.get('id')
  const editando  = !!editId
  // Escopo vem do param quando editando; caso contrário começa sem seleção (null).
  const escopoParam = searchParams.get('escopo')

  const [escopo, setEscopo] = useState(editando ? (escopoParam || 'pessoal') : null)
  const ehPessoal = escopo === 'pessoal'

  const { config } = useConfig()
  const { categorias }  = useCategorias()
  const { contas }      = useTodasContas()
  const { cartoes }     = useTodosCartoes()
  const now = new Date()
  const lancCasal   = useLancamentos(now.getMonth() + 1, now.getFullYear())
  const lancPessoal = usePessoal(now.getMonth() + 1, now.getFullYear())

  // --- Estado do formulário ---------------------------------------------------
  const [rawValor, setRawValor]         = useState('')
  const [tipo, setTipo]                 = useState('gasto')
  const [categoria, setCategoria]       = useState(null)
  const [quemPagou, setQuemPagou]       = useState('')
  const [contaId, setContaId]           = useState('')
  const [contaDestinoId, setContaDestinoId] = useState('')
  const [cartaoId, setCartaoId]         = useState('')
  const [parcelasStr, setParcelasStr]   = useState('1')
  const [recorrente, setRecorrente]     = useState(false)
  const [frequencia, setFrequencia]     = useState('mensal')
  const [repeticoesStr, setRepeticoesStr] = useState('12')
  const [vencimento, setVencimento]     = useState('')
  const [efetivada, setEfetivada]       = useState(true)
  const [descricao, setDescricao]       = useState('')
  const [data, setData]                 = useState(now.toISOString().split('T')[0])
  const [toast, setToast]               = useState(null)
  const [salvando, setSalvando]         = useState(false)
  const [confirmExcluir, setConfirmExcluir] = useState(false)
  const inputRef    = useRef(null)
  const prefilled   = useRef(false)
  const quemPagouAuto = useRef(false)

  const nomeA = config.nome_pessoa_a || 'Pessoa A'
  const nomeB = config.nome_pessoa_b || 'Pessoa B'

  // Valores derivados ----------------------------------------------------------
  const valorNum   = parseFloat(rawValor.replace(',', '.')) || 0
  const parcelas   = Math.max(1, Math.min(48, parseInt(parcelasStr) || 1))
  const repeticoes = Math.max(1, Math.min(60, parseInt(repeticoesStr) || 1))
  const ehTransferencia = tipo === 'transferencia'
  const ehCartao        = tipo === 'cartao'
  const usaCategoria    = !ehTransferencia
  const mostraQuemPagou = escopo === 'casal' && !ehTransferencia

  // Item em edição
  const itemEdit = editando
    ? (ehPessoal ? lancPessoal.todos : lancCasal.todos)?.find(l => l.id === editId)
    : null

  // --- Verificação de fatura do cartão ----------------------------------------
  const cartaoSelecionado = cartoes.find(c => c.id === cartaoId)
  const competenciaAtual  = ehCartao && cartaoId
    ? competenciaCartao(data, cartaoSelecionado?.dia_fechamento || 0)
    : ''

  const faturaInfo = useMemo(() => {
    if (!ehCartao || !cartaoId || !competenciaAtual) return null
    const todosLanc = [...(lancCasal.todos || []), ...(lancPessoal.todos || [])]
    const fats = faturasCartao({ id: cartaoId }, todosLanc)
    return fats.find(f => f.competencia === competenciaAtual) || null
  }, [ehCartao, cartaoId, competenciaAtual, lancCasal.todos, lancPessoal.todos])

  const faturaJaPaga = !editando && !!faturaInfo?.paga

  // --- Efeitos ----------------------------------------------------------------
  useEffect(() => { if (!editando) inputRef.current?.focus() }, [editando])

  useEffect(() => {
    if (!editando || prefilled.current || !itemEdit) return
    prefilled.current = true
    const v = itemEdit.valor ?? 0
    setRawValor(String(v).replace('.', ','))
    setTipo(itemEdit.tipo)
    setCategoria(itemEdit.categoria || null)
    setQuemPagou(itemEdit.quem_pagou || '')
    setContaId(itemEdit.conta_id || '')
    setContaDestinoId(itemEdit.conta_destino_id || '')
    setCartaoId(itemEdit.cartao_id || '')
    setRecorrente(!!itemEdit.recorrente)
    setFrequencia(itemEdit.frequencia || 'mensal')
    setVencimento(itemEdit.vencimento || '')
    setEfetivada(itemEdit.efetivada !== false)
    setDescricao(itemEdit.descricao || '')
    setData(itemEdit.data)
  }, [editando, itemEdit])

  // Quem pagou automático pelo login, com opção de trocar.
  useEffect(() => {
    if (editando || quemPagouAuto.current || escopo !== 'casal') return
    const eu = getUsuario() === 'b' ? nomeB : nomeA
    setQuemPagou(eu)
    quemPagouAuto.current = true
  }, [editando, escopo, nomeA, nomeB])

  // Quando troca escopo, reseta quemPagou automático para novo escopo.
  function handleEscopoChange(novoEscopo) {
    setEscopo(novoEscopo)
    if (novoEscopo === 'casal' && !editando) {
      quemPagouAuto.current = false
    }
  }

  function handleValorInput(e) {
    const v = e.target.value
    if (/^\d*([.,]\d{0,2})?$/.test(v)) setRawValor(v)
  }

  // podeSalvar -----------------------------------------------------------------
  const podeSalvar =
    escopo !== null &&
    valorNum > 0 &&
    (!usaCategoria || categoria) &&
    (ehCartao
      ? !!cartaoId && !faturaJaPaga
      : ehTransferencia
        ? (contaId && contaDestinoId && contaId !== contaDestinoId)
        : !!contaId) &&
    (!mostraQuemPagou || quemPagou)

  // Salvar ---------------------------------------------------------------------
  function salvarUm(lanc) {
    if (ehPessoal) lancPessoal.adicionar({ ...lanc, origem: 'manual', ref_casal_id: '' })
    else lancCasal.adicionar({ ...lanc, quem_pagou: quemPagou })
  }

  function montarLancamentos() {
    const base = {
      tipo,
      categoria: usaCategoria ? categoria : '',
      descricao: descricao.trim(),
      criado_em: new Date().toISOString(),
      conta_id: ehCartao ? '' : contaId,
      conta_destino_id: ehTransferencia ? contaDestinoId : '',
      cartao_id: ehCartao ? cartaoId : '',
      vencimento: ehCartao && cartaoSelecionado?.dia_vencimento
        ? (() => {
            const [y, m] = competenciaAtual.split('-').map(Number)
            const dia = cartaoSelecionado.dia_vencimento
            return `${y}-${String(m).padStart(2, '0')}-${String(dia).padStart(2, '0')}`
          })()
        : vencimento,
    }

    if (ehCartao && parcelas > 1) {
      const serie = gerarUUID()
      const baseComp = competenciaAtual
      const totalCentavos = Math.round(valorNum * 100)
      const baseC = Math.floor(totalCentavos / parcelas)
      const resto = totalCentavos - baseC * parcelas
      return Array.from({ length: parcelas }, (_, i) => ({
        ...base,
        id: gerarUUID(),
        data: addMeses(data, i),
        valor: (baseC + (i < resto ? 1 : 0)) / 100,
        recorrente: false, frequencia: '',
        serie_id: serie,
        parcela_num: i + 1, parcela_total: parcelas,
        pago: false,
        competencia: compMaisMeses(baseComp, i),
        efetivada: true,
      }))
    }

    if (!ehCartao && recorrente && repeticoes > 1) {
      const serie = gerarUUID()
      const passo = (i) =>
        frequencia === 'semanal' ? addDias(data, i * 7)
          : frequencia === 'anual' ? addMeses(data, i * 12)
            : addMeses(data, i)
      return Array.from({ length: repeticoes }, (_, i) => ({
        ...base,
        id: gerarUUID(),
        data: passo(i),
        valor: valorNum,
        recorrente: true, frequencia,
        serie_id: serie,
        parcela_num: i + 1, parcela_total: repeticoes,
        pago: true, competencia: '',
        efetivada: i === 0 ? efetivada : false,
      }))
    }

    return [{
      ...base,
      id: gerarUUID(),
      data,
      valor: valorNum,
      recorrente,
      frequencia: recorrente ? frequencia : '',
      serie_id: '', parcela_num: ehCartao ? 1 : 0, parcela_total: ehCartao ? 1 : 0,
      pago: ehCartao ? false : true,
      competencia: competenciaAtual,
      efetivada,
    }]
  }

  async function salvar() {
    if (!podeSalvar || salvando) return
    setSalvando(true)
    if (editando) {
      const dados = {
        data, valor: valorNum, tipo,
        categoria: usaCategoria ? categoria : '',
        descricao: descricao.trim(),
        conta_id: ehCartao ? '' : contaId,
        conta_destino_id: ehTransferencia ? contaDestinoId : '',
        cartao_id: ehCartao ? cartaoId : '',
        recorrente, frequencia: recorrente ? frequencia : '',
        vencimento, efetivada,
        ...(mostraQuemPagou ? { quem_pagou: quemPagou } : {}),
      }
      if (ehPessoal) lancPessoal.atualizar(editId, dados)
      else lancCasal.atualizar(editId, dados)
    } else {
      montarLancamentos().forEach(salvarUm)
    }
    setToast({ mensagem: editando ? 'Lançamento atualizado!' : 'Lançamento salvo!', tipo: 'sucesso' })
    setSalvando(false)
    setTimeout(() => navigate(-1), 800)
  }

  function excluir(serie) {
    if (!itemEdit) return
    const hook = ehPessoal ? lancPessoal : lancCasal
    if (serie && itemEdit.serie_id) {
      const todos = (ehPessoal ? lancPessoal.todos : lancCasal.todos) || []
      todos.filter(l => l.serie_id === itemEdit.serie_id).forEach(l => hook.remover(l.id))
    } else {
      hook.remover(editId)
    }
    setToast({ mensagem: 'Lançamento excluído.', tipo: 'sucesso' })
    setTimeout(() => navigate(-1), 600)
  }

  const bloqueadoEdicao = editando && ehPessoal && itemEdit?.origem === 'casal'
  const ehSerie = editando && itemEdit?.serie_id && (itemEdit?.parcela_total || 0) > 1

  return (
    <div className="min-h-full bg-bg-primary">
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <button onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-text-secondary text-sm active:text-text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Voltar
        </button>
        {editando && <span className="text-xs text-text-secondary">Editando</span>}
      </div>

      <div className="px-4 pb-8 space-y-6">

        {/* Escopo — sem pré-seleção em novos lançamentos */}
        <Section titulo="Escopo">
          <div className="flex gap-2">
            {ESCOPOS.map(e => (
              <button key={e.id}
                onClick={() => !editando && handleEscopoChange(e.id)}
                disabled={editando}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                  escopo === e.id
                    ? 'bg-accent-primary/20 border-accent-primary text-accent-primary'
                    : 'bg-bg-card border-border text-text-secondary'
                } ${editando ? 'opacity-60' : ''}`}>
                {e.label}
              </button>
            ))}
          </div>
          {!escopo && !editando && (
            <p className="text-xs text-text-secondary mt-1">Selecione o escopo para continuar.</p>
          )}
        </Section>

        {/* Valor */}
        <div className="text-center pt-1">
          <p className="text-text-secondary text-xs mb-2">Valor</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-text-secondary text-2xl font-light">R$</span>
            <input ref={inputRef} type="text" inputMode="decimal" value={rawValor}
              onChange={handleValorInput} placeholder="0,00"
              className="text-4xl font-bold text-text-primary bg-transparent outline-none w-40 text-center placeholder:text-border" />
          </div>
        </div>

        {/* Tipo */}
        <Section titulo="Tipo">
          <div className="grid grid-cols-2 gap-2">
            {TIPOS_LANCAMENTO.map(t => (
              <button key={t.id} onClick={() => setTipo(t.id)}
                className={`py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                  tipo === t.id
                    ? 'bg-accent-primary/20 border-accent-primary text-accent-primary'
                    : 'bg-bg-card border-border text-text-secondary'
                }`}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>
        </Section>

        {/* Cartão */}
        {ehCartao && (
          <Section titulo="Cartão">
            {cartoes.length === 0 ? (
              <AvisoVazio texto="Nenhum cartão cadastrado." />
            ) : (
              <div className="space-y-2">
                <select value={cartaoId} onChange={e => setCartaoId(e.target.value)} className={selectCls}>
                  <option value="">Selecione o cartão</option>
                  {cartoes.map(c => (
                    <option key={c.id} value={c.id}>{c.nome} · {c._escopo}</option>
                  ))}
                </select>

                {/* Info da fatura */}
                {cartaoId && competenciaAtual && (
                  <div className={`rounded-xl px-4 py-3 text-xs ${
                    faturaJaPaga
                      ? 'bg-danger/15 border border-danger/40 text-danger'
                      : 'bg-bg-card border border-border text-text-secondary'
                  }`}>
                    {faturaJaPaga
                      ? `Fatura de ${formatarCompetencia(competenciaAtual)} já foi paga. Escolha outra data.`
                      : `Fatura: ${formatarCompetencia(competenciaAtual)}${cartaoSelecionado?.dia_vencimento ? ` · vence dia ${cartaoSelecionado.dia_vencimento}` : ''}`
                    }
                  </div>
                )}

                {!editando && (
                  <div className="flex items-center gap-3 bg-bg-card border border-border rounded-xl px-4 py-3">
                    <span className="text-sm text-text-secondary flex-shrink-0">Parcelas</span>
                    <input
                      type="number" inputMode="numeric"
                      value={parcelasStr}
                      onChange={e => setParcelasStr(e.target.value)}
                      onBlur={() => setParcelasStr(String(Math.max(1, Math.min(48, parseInt(parcelasStr) || 1))))}
                      className="flex-1 bg-transparent text-sm text-text-primary outline-none text-right" />
                    {parcelas > 1 && valorNum > 0 && (
                      <span className="text-xs text-text-secondary">
                        {parcelas}× de R$ {(valorNum / parcelas).toFixed(2)}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}
          </Section>
        )}

        {/* Contas */}
        {ehTransferencia ? (
          <Section titulo="Transferência entre contas">
            <div className="space-y-2">
              <select value={contaId} onChange={e => setContaId(e.target.value)} className={selectCls}>
                <option value="">De qual conta</option>
                {contas.map(c => <option key={c.id} value={c.id}>{c.nome} · {c._escopo}</option>)}
              </select>
              <select value={contaDestinoId} onChange={e => setContaDestinoId(e.target.value)} className={selectCls}>
                <option value="">Para qual conta</option>
                {contas.map(c => <option key={c.id} value={c.id}>{c.nome} · {c._escopo}</option>)}
              </select>
            </div>
            {contas.length < 2 && <AvisoVazio texto="Cadastre ao menos duas contas." />}
          </Section>
        ) : !ehCartao && (
          <Section titulo="Conta">
            {contas.length === 0 ? (
              <AvisoVazio texto="Cadastre uma conta na Carteira para lançar." />
            ) : (
              <select value={contaId} onChange={e => setContaId(e.target.value)} className={selectCls}>
                <option value="">Selecione a conta</option>
                {contas.map(c => <option key={c.id} value={c.id}>{c.nome} · {c._escopo}</option>)}
              </select>
            )}
          </Section>
        )}

        {/* Categoria */}
        {usaCategoria && (
          <Section titulo="Categoria">
            <div className="grid grid-cols-4 gap-2">
              {categorias.map(cat => (
                <button key={cat.id} onClick={() => setCategoria(cat.id)}
                  className={`flex flex-col items-center gap-1 py-3 rounded-xl border text-xs transition-colors ${
                    categoria === cat.id
                      ? 'bg-accent-primary/20 border-accent-primary text-accent-primary'
                      : 'bg-bg-card border-border text-text-secondary'
                  }`}>
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="leading-tight text-center">{cat.label}</span>
                </button>
              ))}
            </div>
          </Section>
        )}

        {/* Quem pagou */}
        {mostraQuemPagou && (
          <Section titulo="Quem pagou">
            <div className="flex gap-2">
              {[nomeA, nomeB].map(nome => (
                <button key={nome} onClick={() => setQuemPagou(nome)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                    quemPagou === nome
                      ? 'bg-accent-primary/20 border-accent-primary text-accent-primary'
                      : 'bg-bg-card border-border text-text-secondary'
                  }`}>
                  {nome}
                </button>
              ))}
            </div>
          </Section>
        )}

        {/* Recorrência */}
        {!ehCartao && (
          <Section titulo="Programação">
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-bg-card border border-border rounded-xl px-4 py-3">
                <span className="text-sm text-text-primary">Recorrente</span>
                <Toggle ativo={recorrente} onToggle={() => setRecorrente(v => !v)} />
              </div>
              {recorrente && (
                <>
                  <select value={frequencia} onChange={e => setFrequencia(e.target.value)} className={selectCls}>
                    {FREQUENCIAS.map(f => <option key={f.id} value={f.id}>{f.label}</option>)}
                  </select>
                  {!editando && (
                    <div className="flex items-center gap-3 bg-bg-card border border-border rounded-xl px-4 py-3">
                      <span className="text-sm text-text-secondary flex-shrink-0">Repetições</span>
                      <input
                        type="number" inputMode="numeric"
                        value={repeticoesStr}
                        onChange={e => setRepeticoesStr(e.target.value)}
                        onBlur={() => setRepeticoesStr(String(Math.max(1, Math.min(60, parseInt(repeticoesStr) || 1))))}
                        className="flex-1 bg-transparent text-sm text-text-primary outline-none text-right" />
                    </div>
                  )}
                  {!editando && repeticoes > 1 && (
                    <p className="text-xs text-text-secondary px-1">
                      As próximas {repeticoes - 1} ficam pendentes de confirmação (em Agendados).
                    </p>
                  )}
                </>
              )}
              <div className="flex items-center gap-3 bg-bg-card border border-border rounded-xl px-4 py-3">
                <span className="text-sm text-text-secondary flex-shrink-0">Vencimento</span>
                <input type="date" value={vencimento} onChange={e => setVencimento(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-text-primary outline-none text-right" />
              </div>
              <div className="flex items-center justify-between bg-bg-card border border-border rounded-xl px-4 py-3">
                <span className="text-sm text-text-primary">Já efetivada</span>
                <Toggle ativo={efetivada} onToggle={() => setEfetivada(v => !v)} />
              </div>
            </div>
          </Section>
        )}

        {/* Detalhes */}
        <Section titulo="Detalhes (opcionais)">
          <div className="space-y-3">
            <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)}
              placeholder="Ex: Almoço no shopping" maxLength={120} className={selectCls} />
            <div className="flex items-center gap-3 bg-bg-card border border-border rounded-xl px-4 py-3">
              <span className="text-sm text-text-secondary flex-shrink-0">Data</span>
              <input type="date" value={data} onChange={e => setData(e.target.value)}
                className="flex-1 bg-transparent text-sm text-text-primary outline-none text-right" />
            </div>
          </div>
        </Section>

        {bloqueadoEdicao && (
          <p className="text-xs text-danger px-1">
            Este item é uma cópia automática de uma despesa do casal e não pode ser editado aqui.
          </p>
        )}

        <button onClick={salvar} disabled={!podeSalvar || salvando || bloqueadoEdicao}
          className="w-full py-3.5 rounded-2xl bg-accent-primary text-white text-base font-semibold disabled:opacity-40 active:scale-95 transition-all">
          {salvando ? 'Salvando...' : editando ? 'Salvar alterações' : 'Salvar'}
        </button>

        {editando && !bloqueadoEdicao && (
          confirmExcluir ? (
            <div className="space-y-2">
              {ehSerie && (
                <button onClick={() => excluir(true)}
                  className="w-full py-3 rounded-2xl bg-danger/15 text-danger text-sm font-semibold active:scale-95 transition-all">
                  Excluir toda a série ({itemEdit.parcela_total})
                </button>
              )}
              <button onClick={() => excluir(false)}
                className="w-full py-3 rounded-2xl bg-danger/15 text-danger text-sm font-semibold active:scale-95 transition-all">
                {ehSerie ? 'Excluir só este' : 'Confirmar exclusão'}
              </button>
              <button onClick={() => setConfirmExcluir(false)}
                className="w-full py-3 rounded-2xl bg-bg-card border border-border text-text-secondary text-sm active:scale-95 transition-all">
                Cancelar
              </button>
            </div>
          ) : (
            <button onClick={() => setConfirmExcluir(true)}
              className="w-full py-3 rounded-2xl border border-danger/40 text-danger text-sm font-semibold active:scale-95 transition-all">
              Excluir lançamento
            </button>
          )
        )}
      </div>

      {toast && <Toast mensagem={toast.mensagem} tipo={toast.tipo} onClose={() => setToast(null)} />}
    </div>
  )
}

const selectCls = 'w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:border-accent-primary transition-colors'

function Section({ titulo, children }) {
  return (
    <div>
      <p className="text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">{titulo}</p>
      {children}
    </div>
  )
}

function AvisoVazio({ texto }) {
  return <p className="text-text-secondary text-xs py-1">{texto}</p>
}

function Toggle({ ativo, onToggle }) {
  return (
    <button onClick={onToggle}
      className={`w-11 h-6 rounded-full transition-colors relative ${ativo ? 'bg-accent-primary' : 'bg-border'}`}>
      <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${ativo ? 'left-5' : 'left-0.5'}`} />
    </button>
  )
}

export default NovoLancamentoPage
