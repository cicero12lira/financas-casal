import { useRef } from 'react'
import useLancamentos from '../../hooks/useLancamentos'
import useConfig from '../../hooks/useConfig'
import useCategorias from '../../hooks/useCategorias'
import { formatarMoeda, formatarDataCurta } from '../../utils/formatters'
import { iconeCategoria } from '../../constants/categories'

function HomePage() {
  const now = new Date()
  const mes = now.getMonth() + 1
  const ano = now.getFullYear()

  const { lancamentos, carregando, erro, sincronizar } = useLancamentos(mes, ano)
  const { config } = useConfig()
  const { categorias } = useCategorias()

  const totalGastos   = lancamentos.filter(l => l.tipo === 'gasto').reduce((s, l) => s + l.valor, 0)
  const totalReceitas = lancamentos.filter(l => l.tipo === 'receita').reduce((s, l) => s + l.valor, 0)
  const saldo         = totalReceitas - totalGastos
  const orcamento     = parseFloat(config.orcamento_mensal) || 0
  const pct           = orcamento > 0 ? Math.min((totalGastos / orcamento) * 100, 100) : 0

  const ultimos5 = [...lancamentos]
    .sort((a, b) => (b.criado_em ?? '').localeCompare(a.criado_em ?? ''))
    .slice(0, 5)

  // Pull-to-refresh
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
    <div
      ref={scrollRef}
      className="h-full overflow-y-auto px-4 pt-4 pb-6"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
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
          <p className="text-xl font-bold text-text-primary">{formatarMoeda(totalGastos)}</p>
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
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                pct >= 90 ? 'bg-danger' : pct >= 70 ? 'bg-yellow-400' : 'bg-accent-secondary'
              }`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-xs text-text-secondary mt-1 text-right">{pct.toFixed(0)}% utilizado</p>
        </div>
      )}

      {/* Erro de sync */}
      {erro && (
        <div className="bg-danger/10 border border-danger/30 rounded-xl px-4 py-3 mb-4">
          <p className="text-danger text-xs">{erro}</p>
        </div>
      )}

      {/* Últimos lançamentos */}
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
          {ultimos5.map(l => <ItemLancamento key={l.id} lancamento={l} categorias={categorias} />)}
        </div>
      )}
    </div>
  )
}

function ItemLancamento({ lancamento, categorias }) {
  const { descricao, categoria, valor, tipo, quem_pagou, data, sincronizado } = lancamento
  return (
    <div className="flex items-center gap-3 bg-bg-card rounded-xl border border-border px-4 py-3 animate-fade-in">
      <span className="text-xl w-8 text-center">{iconeCategoria(categoria, categorias)}</span>
      <div className="flex-1 min-w-0">
        <p className="text-text-primary text-sm font-medium truncate">{descricao || categoria}</p>
        <p className="text-text-secondary text-xs">{quem_pagou} · {formatarDataCurta(data + 'T00:00:00')}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <p className={`text-sm font-semibold ${tipo === 'receita' ? 'text-accent-secondary' : 'text-text-primary'}`}>
          {tipo === 'receita' ? '+' : '−'}{formatarMoeda(valor)}
        </p>
        {!sincronizado && <p className="text-xs text-text-secondary">⏳</p>}
      </div>
    </div>
  )
}

export default HomePage
