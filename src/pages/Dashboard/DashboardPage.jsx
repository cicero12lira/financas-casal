import { useMemo, useState } from 'react'
import {
  PieChart, Pie, Cell,
  BarChart, Bar,
  LineChart, Line,
  XAxis, YAxis, Tooltip, Legend, ReferenceLine,
  ResponsiveContainer,
} from 'recharts'
import useLancamentos from '../../hooks/useLancamentos'
import usePessoal from '../../hooks/usePessoal'
import useCategorias from '../../hooks/useCategorias'
import useConfig, { orcamentoDoEscopo } from '../../hooks/useConfig'
import { getUsuario } from '../../services/storage'
import { formatarMoeda, formatarMesAno } from '../../utils/formatters'
import { iconeCategoria } from '../../constants/categories'
import { ESCOPOS_FILTRO, ehDespesa } from '../../constants/financas'
import { combinarLancamentos, somaDespesas, somaReceitas } from '../../utils/lancamentos'

const CORES = ['#6c63ff', '#00d4aa', '#ff4757', '#ffa502', '#2ed573', '#1e90ff', '#ff6b81', '#a29bfe']

function doMes(l, mes, ano) {
  const [y, m] = (l.data ?? '').split('-').map(Number)
  return y === ano && m === mes
}

function DashboardPage() {
  const now = new Date()
  const mes = now.getMonth() + 1
  const ano = now.getFullYear()

  const [escopo, setEscopo] = useState('pessoal')

  const casal = useLancamentos(mes, ano)
  const pessoal = usePessoal(mes, ano)
  const { categorias } = useCategorias()
  const { config } = useConfig()

  const lancamentos = combinarLancamentos(casal.lancamentos, pessoal.lancamentos, escopo)
  // Para pizza/tabela/maior gasto: cartão conta quando pago (Orçado×Realizado consistente).
  const despesas = lancamentos.filter(l =>
    ehDespesa(l.tipo) && l.efetivada !== false && !(l.tipo === 'cartao' && l.pago === false)
  )
  const totalDespesas = despesas.reduce((s, l) => s + l.valor, 0)
  const orcamento = orcamentoDoEscopo(config, escopo, getUsuario())

  const porPessoa = useMemo(() => {
    const m = new Map()
    despesas.forEach(l => {
      const k = l.quem_pagou || (l._escopo === 'pessoal' ? 'Pessoal' : 'Casal')
      m.set(k, (m.get(k) || 0) + l.valor)
    })
    return [...m.entries()].map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value)
  }, [despesas])

  const porCategoria = useMemo(() =>
    categorias
      .map(cat => ({
        id: cat.id, name: cat.label, icon: cat.icon,
        value: despesas.filter(l => l.categoria === cat.id).reduce((s, l) => s + l.valor, 0),
      }))
      .filter(c => c.value > 0)
      .sort((a, b) => b.value - a.value),
  [despesas, categorias])

  const maiorGasto = [...despesas].sort((a, b) => b.valor - a.valor)[0]

  const historico = useMemo(() => {
    const result = []
    for (let i = 5; i >= 0; i--) {
      const d = new Date(ano, mes - 1 - i, 1)
      const m = d.getMonth() + 1
      const a = d.getFullYear()
      const lista = combinarLancamentos(
        casal.todos.filter(l => doMes(l, m, a)),
        pessoal.todos.filter(l => doMes(l, m, a)),
        escopo,
      )
      result.push({
        label: formatarMesAno(m, a).slice(0, 3),
        // Últimos 6 meses: cartão só conta quando fatura paga.
        Despesas: somaDespesas(lista, { somentePagosCartao: true }),
        Receitas: somaReceitas(lista),
      })
    }
    return result
  }, [mes, ano, escopo, casal.todos, pessoal.todos])

  // Previsão: lançamentos agendados (efetivada=false) + despesas de cartão não pagas.
  // Mostra os próximos 6 meses. Não usa somentePagosCartao — queremos ver o que vai sair.
  const previsao = useMemo(() => {
    const _filtro = l => l.efetivada === false || (l.tipo === 'cartao' && l.pago === false)
    const todosFuturos = combinarLancamentos(
      (casal.todos || []).filter(_filtro),
      (pessoal.todos || []).filter(_filtro),
      escopo,
    )
    const result = []
    for (let i = 0; i <= 5; i++) {
      const d = new Date(ano, mes - 1 + i, 1)
      const m = d.getMonth() + 1
      const a = d.getFullYear()
      const lista = todosFuturos.filter(l => doMes(l, m, a))
      result.push({
        label: formatarMesAno(m, a).slice(0, 3),
        Receitas: somaReceitas(lista, { soEfetivadas: false }),
        Despesas: somaDespesas(lista, { soEfetivadas: false }),
        Saldo: somaReceitas(lista, { soEfetivadas: false }) - somaDespesas(lista, { soEfetivadas: false }),
      })
    }
    return result
  }, [mes, ano, escopo, casal.todos, pessoal.todos])

  const temPrevisao = previsao.some(p => p.Receitas > 0 || p.Despesas > 0)

  return (
    <div className="px-4 pt-4 pb-6 space-y-6">
      {/* Filtro de escopo */}
      <div className="flex gap-2">
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

      {lancamentos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-4xl mb-3">📊</p>
          <p className="text-text-secondary text-sm">Sem dados para exibir este mês.</p>
        </div>
      ) : (
        <>
          {/* Gráfico de pizza */}
          {porCategoria.length > 0 && (
            <section>
              <h2 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-4">Por categoria</h2>
              <div className="flex items-center gap-4">
                <div style={{ width: 150, height: 150, flexShrink: 0 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={porCategoria} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value" paddingAngle={2}>
                        {porCategoria.map((_, i) => <Cell key={i} fill={CORES[i % CORES.length]} />)}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex-1 space-y-2 min-w-0">
                  {porCategoria.slice(0, 5).map((cat, i) => (
                    <div key={cat.id} className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: CORES[i % CORES.length] }} />
                      <span className="text-xs text-text-secondary truncate flex-1">{cat.name}</span>
                      <span className="text-xs text-text-primary font-medium">
                        {totalDespesas > 0 ? ((cat.value / totalDespesas) * 100).toFixed(0) : 0}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Maior gasto */}
          {maiorGasto && (
            <section>
              <h2 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-2">Maior gasto</h2>
              <div className="bg-bg-card rounded-2xl border border-border p-4 flex items-center gap-3">
                <span className="text-3xl">{iconeCategoria(maiorGasto.categoria, categorias)}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-text-primary font-medium text-sm truncate">{maiorGasto.descricao || maiorGasto.categoria}</p>
                  <p className="text-text-secondary text-xs">{maiorGasto.quem_pagou || (maiorGasto._escopo === 'pessoal' ? 'Pessoal' : 'Casal')}</p>
                </div>
                <p className="text-danger font-bold text-lg flex-shrink-0">{formatarMoeda(maiorGasto.valor)}</p>
              </div>
            </section>
          )}

          {/* Orçado × realizado */}
          {orcamento > 0 && (
            <section>
              <h2 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-2">Orçado × realizado</h2>
              <div className="bg-bg-card rounded-2xl border border-border p-4">
                {(() => {
                  const p = Math.min(100, (totalDespesas / orcamento) * 100)
                  const restante = orcamento - totalDespesas
                  return (
                    <>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-text-secondary">{formatarMoeda(totalDespesas)}</span>
                        <span className="text-text-secondary">de {formatarMoeda(orcamento)}</span>
                      </div>
                      <div className="h-2.5 bg-border rounded-full overflow-hidden">
                        <div className={`h-full rounded-full transition-all ${p >= 90 ? 'bg-danger' : p >= 70 ? 'bg-yellow-400' : 'bg-accent-secondary'}`}
                          style={{ width: `${p}%` }} />
                      </div>
                      <p className={`text-xs mt-2 text-right ${restante >= 0 ? 'text-accent-secondary' : 'text-danger'}`}>
                        {restante >= 0 ? `${formatarMoeda(restante)} disponível` : `${formatarMoeda(-restante)} acima`}
                      </p>
                    </>
                  )
                })()}
              </div>
            </section>
          )}

          {/* Divisão por pessoa */}
          {porPessoa.length > 1 && (
            <section>
              <h2 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-4">Por pessoa</h2>
              <div className="flex items-center gap-4">
                <div style={{ width: 150, height: 150, flexShrink: 0 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={porPessoa} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value" paddingAngle={2}>
                        {porPessoa.map((_, i) => <Cell key={i} fill={CORES[i % CORES.length]} />)}
                      </Pie>
                      <Tooltip formatter={v => formatarMoeda(v)}
                        contentStyle={{ background: '#111827', border: '1px solid #1e2a45', borderRadius: 12, fontSize: 12 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex-1 space-y-2 min-w-0">
                  {porPessoa.map((p, i) => (
                    <div key={p.name} className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: CORES[i % CORES.length] }} />
                      <span className="text-xs text-text-secondary truncate flex-1">{p.name}</span>
                      <span className="text-xs text-text-primary font-medium">
                        {totalDespesas > 0 ? ((p.value / totalDespesas) * 100).toFixed(0) : 0}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Evolução 6 meses */}
          <section>
            <h2 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-4">Últimos 6 meses</h2>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={historico} margin={{ top: 0, right: 4, left: -20, bottom: 0 }} barCategoryGap="30%">
                <XAxis dataKey="label" tick={{ fill: '#8892b0', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#8892b0', fontSize: 10 }} axisLine={false} tickLine={false}
                  tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v} />
                <Tooltip formatter={v => formatarMoeda(v)}
                  contentStyle={{ background: '#111827', border: '1px solid #1e2a45', borderRadius: 12, fontSize: 12 }}
                  labelStyle={{ color: '#8892b0' }} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="Receitas" fill="#00d4aa" radius={[4, 4, 0, 0]} maxBarSize={20} />
                <Bar dataKey="Despesas" fill="#ff4757" radius={[4, 4, 0, 0]} maxBarSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </section>

          {/* Tabela por categoria */}
          {porCategoria.length > 0 && (
            <section>
              <h2 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-3">Resumo</h2>
              <div className="bg-bg-card rounded-2xl border border-border overflow-hidden">
                {porCategoria.map((cat, i) => (
                  <div key={cat.id} className={`flex items-center gap-3 px-4 py-3 ${i < porCategoria.length - 1 ? 'border-b border-border' : ''}`}>
                    <span className="text-lg">{cat.icon}</span>
                    <span className="flex-1 text-sm text-text-primary">{cat.name}</span>
                    <span className="text-xs text-text-secondary w-10 text-right">
                      {totalDespesas > 0 ? ((cat.value / totalDespesas) * 100).toFixed(0) : 0}%
                    </span>
                    <span className="text-sm font-medium text-text-primary w-24 text-right">{formatarMoeda(cat.value)}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Previsão futura */}
          {temPrevisao && (
            <section>
              <h2 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-1">Previsão (próx. 6 meses)</h2>
              <p className="text-[11px] text-text-secondary mb-4">Baseada nos lançamentos agendados/pendentes.</p>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={previsao} margin={{ top: 0, right: 4, left: -20, bottom: 0 }}>
                  <XAxis dataKey="label" tick={{ fill: '#8892b0', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#8892b0', fontSize: 10 }} axisLine={false} tickLine={false}
                    tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v} />
                  <Tooltip formatter={v => formatarMoeda(v)}
                    contentStyle={{ background: '#111827', border: '1px solid #1e2a45', borderRadius: 12, fontSize: 12 }}
                    labelStyle={{ color: '#8892b0' }} />
                  <ReferenceLine y={0} stroke="#1e2a45" />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Line type="monotone" dataKey="Receitas" stroke="#00d4aa" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="Despesas" stroke="#ff4757" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="Saldo" stroke="#6c63ff" strokeWidth={2} strokeDasharray="4 2" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </section>
          )}
        </>
      )}
    </div>
  )
}

export default DashboardPage
