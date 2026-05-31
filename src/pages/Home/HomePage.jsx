import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useLancamentos from '../../hooks/useLancamentos'
import usePessoal from '../../hooks/usePessoal'
import useConfig, { orcamentoDoEscopo } from '../../hooks/useConfig'
import useCategorias from '../../hooks/useCategorias'
import useTodasContas from '../../hooks/useTodasContas'
import useCartoes from '../../hooks/useCartoes'
import { getUsuario } from '../../services/storage'
import { formatarMoeda, formatarDataCurta } from '../../utils/formatters'
import { iconeCategoria } from '../../constants/categories'
import { ESCOPOS_FILTRO, iconeTipoLancamento } from '../../constants/financas'
import { combinarLancamentos, somaReceitas, somaDespesas, saldoConta, usoCartao } from '../../utils/lancamentos'

function HomePage() {
  const now = new Date()
  const mes = now.getMonth() + 1
  const ano = now.getFullYear()
  const navigate = useNavigate()

  const [escopo, setEscopo] = useState('pessoal')

  const casal = useLancamentos(mes, ano)
  const pessoal = usePessoal(mes, ano)
  const { config } = useConfig()
  const { categorias } = useCategorias()
  const { contas } = useTodasContas()
  const casalCartoes = useCartoes('casal')
  const pessoalCartoes = useCartoes('pessoal')

  const lancamentos = combinarLancamentos(casal.lancamentos, pessoal.lancamentos, escopo)
  // Para saldos e cartões usamos todos os lançamentos (de todos os meses) das duas esferas.
  const todosLanc = [...(casal.todos || []), ...(pessoal.todos || [])]

  // Saldo do mês: cartão só conta quando fatura paga (somentePagosCartao).
  const totalDespesas = somaDespesas(lancamentos, { somentePagosCartao: true })
  const totalReceitas = somaReceitas(lancamentos)
  const saldo = totalReceitas - totalDespesas
  const orcamento = orcamentoDoEscopo(config, escopo, getUsuario())
  const pct = orcamento > 0 ? Math.min((totalDespesas / orcamento) * 100, 100) : 0

  const hoje = now.toISOString().split('T')[0]
  // Só mostra na Home os agendados do dia ou atrasados (data <= hoje).
  const agendadosVisiveis = todosLanc.filter(l => l.efetivada === false && l.data <= hoje)
  const pendentesCount = agendadosVisiveis.length
  const contasFiltradas = escopo === 'tudo' ? contas : contas.filter(c => c._escopo === escopo)
  const cartoes = [
    ...casalCartoes.cartoes.map(c => ({ ...c, _escopo: 'casal' })),
    ...pessoalCartoes.cartoes.map(c => ({ ...c, _escopo: 'pessoal' })),
  ]
  const cartoesFiltrados = escopo === 'tudo' ? cartoes : cartoes.filter(c => c._escopo === escopo)
  const saldoTotal = contasFiltradas.reduce((s, c) => s + saldoConta(c, todosLanc), 0)

  const ultimos5 = [...lancamentos]
    .sort((a, b) => (b.criado_em ?? '').localeCompare(a.criado_em ?? ''))
    .slice(0, 5)

  const carregando = casal.carregando || pessoal.carregando

  function sincronizar() {
    casal.sincronizar()
    pessoal.sincronizar()
  }

  const touchY = useRef(0)
  const scrollRef = useRef(null)

  function onTouchStart(e) {
    if (scrollRef.current?.scrollTop === 0) touchY.current = e.touches[0].clientY
  }
  function onTouchEnd(e) {
    const delta = e.changedTouches[0].clientY - touchY.current
    if (delta > 70 && scrollRef.current?.scrollTop === 0) sincronizar()
    touchY.current = 0
  }

  return (
    <div ref={scrollRef} className="h-full overflow-y-auto px-4 pt-4 pb-6"
      onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>

      {/* Filtro de escopo */}
      <div className="flex gap-2 mb-4">
        {ESCOPOS_FILTRO.map(e => (
          <button key={e.id} onClick={() => setEscopo(e.id)}
            className={`flex-1 py-2 rounded-xl text-xs font-medium border transition-colors ${
              escopo === e.id
                ? 'bg-accent-primary/20 border-accent-primary text-accent-primary'
                : 'bg-bg-card border-border text-text-secondary'
            }`}>
            {e.label}
          </button>
        ))}
      </div>

      {/* Atalho para agendados pendentes */}
      {pendentesCount > 0 && (
        <button onClick={() => navigate('/historico?agendados=1')}
          className="w-full mb-4 flex items-center justify-between bg-accent-primary/10 border border-accent-primary/30 rounded-xl px-4 py-3 active:opacity-70">
          <span className="text-sm text-text-primary">📅 {pendentesCount} agendado(s) a confirmar</span>
          <span className="text-accent-primary text-sm">›</span>
        </button>
      )}

      {/* Cards de resumo */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-bg-card rounded-2xl border border-border p-4">
          <p className="text-xs text-text-secondary mb-1">Saldo do mês</p>
          <p className={`text-xl font-bold ${saldo >= 0 ? 'text-accent-secondary' : 'text-danger'}`}>
            {formatarMoeda(saldo)}
          </p>
        </div>
        <div className="bg-bg-card rounded-2xl border border-border p-4">
          <p className="text-xs text-text-secondary mb-1">Total gasto</p>
          <p className="text-xl font-bold text-text-primary">{formatarMoeda(totalDespesas)}</p>
        </div>
      </div>

      {/* Barra de orçamento */}
      {orcamento > 0 && (
        <div className="bg-bg-card rounded-2xl border border-border p-4 mb-4">
          <div className="flex justify-between text-xs text-text-secondary mb-2">
            <span>Orçamento mensal</span>
            <span>{formatarMoeda(orcamento)}</span>
          </div>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-500 ${
              pct >= 90 ? 'bg-danger' : pct >= 70 ? 'bg-yellow-400' : 'bg-accent-secondary'
            }`} style={{ width: `${pct}%` }} />
          </div>
          <p className="text-xs text-text-secondary mt-1 text-right">{pct.toFixed(0)}% utilizado</p>
        </div>
      )}

      {/* Saldos das contas */}
      {contasFiltradas.length > 0 && (
        <div className="bg-bg-card rounded-2xl border border-border p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Contas</span>
            <span className="text-sm font-bold text-text-primary">{formatarMoeda(saldoTotal)}</span>
          </div>
          <div className="space-y-1.5">
            {contasFiltradas.map(c => (
              <div key={c.id} className="flex justify-between text-sm">
                <span className="text-text-secondary truncate">{c.nome}</span>
                <span className="text-text-primary font-medium">{formatarMoeda(saldoConta(c, todosLanc))}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cartões de crédito */}
      {cartoesFiltrados.length > 0 && (
        <div className="bg-bg-card rounded-2xl border border-border p-4 mb-4">
          <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Cartões de crédito</span>
          <div className="space-y-2.5 mt-2">
            {cartoesFiltrados.map(c => {
              const u = usoCartao(c, todosLanc)
              const p = u.limite > 0 ? Math.min(100, (u.usado / u.limite) * 100) : 0
              return (
                <button key={c.id} onClick={() => navigate(`/cartao/${c.id}?escopo=${c._escopo}`)}
                  className="w-full text-left active:opacity-70">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary truncate">{c.nome}</span>
                    <span className="text-text-primary">{formatarMoeda(u.usado)} / {formatarMoeda(u.limite)}</span>
                  </div>
                  {u.limite > 0 && (
                    <div className="h-1.5 rounded-full bg-border overflow-hidden mt-1">
                      <div className={`h-full ${p < 70 ? 'bg-accent-secondary' : p < 90 ? 'bg-yellow-500' : 'bg-danger'}`}
                        style={{ width: `${p}%` }} />
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {(casal.erro || pessoal.erro) && (
        <div className="bg-danger/10 border border-danger/30 rounded-xl px-4 py-3 mb-4">
          <p className="text-danger text-xs">{casal.erro || pessoal.erro}</p>
        </div>
      )}

      <h2 className="text-sm font-medium text-text-secondary mb-3">Últimos lançamentos</h2>

      {carregando && lancamentos.length === 0 ? (
        <div className="flex items-center justify-center py-12">
          <p className="text-text-secondary text-sm">Carregando...</p>
        </div>
      ) : ultimos5.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-4xl mb-3">💸</p>
          <p className="text-text-secondary text-sm">Nenhum lançamento este mês.</p>
          <p className="text-text-secondary text-xs mt-1">Toque no + para adicionar.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {ultimos5.map(l => (
            <ItemLancamento key={l.id} lancamento={l} categorias={categorias}
              onClick={() => navigate(`/novo?id=${l.id}&escopo=${l._escopo}`)} />
          ))}
        </div>
      )}
    </div>
  )
}

function ItemLancamento({ lancamento, categorias, onClick }) {
  const { descricao, categoria, valor, tipo, quem_pagou, data, sincronizado, efetivada, _escopo } = lancamento
  const hoje = new Date().toISOString().split('T')[0]
  const vencido = efetivada === false && data <= hoje
  const ehReceita = tipo === 'receita'
  const ehTransf = tipo === 'transferencia'
  const icone = tipo === 'receita' || ehTransf || tipo === 'cartao'
    ? iconeTipoLancamento(tipo)
    : iconeCategoria(categoria, categorias)
  const legenda = [quem_pagou || (_escopo === 'pessoal' ? 'Pessoal' : 'Casal'), formatarDataCurta(data + 'T00:00:00')]
    .filter(Boolean).join(' · ')

  return (
    <button onClick={onClick}
      className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3 animate-fade-in text-left active:opacity-70 ${
        vencido ? 'bg-danger/10 border-danger/40' : 'bg-bg-card border-border'
      }`}>
      <span className="text-xl w-8 text-center">{icone}</span>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate ${vencido ? 'text-danger' : 'text-text-primary'}`}>
          {descricao || categoria || 'Transferência'}
        </p>
        <p className="text-text-secondary text-xs">{legenda}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <p className={`text-sm font-semibold ${ehReceita ? 'text-accent-secondary' : ehTransf ? 'text-text-secondary' : vencido ? 'text-danger' : 'text-text-primary'}`}>
          {ehTransf ? '' : ehReceita ? '+' : '−'}{formatarMoeda(valor)}
        </p>
        <p className="text-xs text-text-secondary">
          {vencido ? '⚠️' : efetivada === false ? '📅' : ''}{!sincronizado ? '⏳' : ''}
        </p>
      </div>
    </button>
  )
}

export default HomePage
