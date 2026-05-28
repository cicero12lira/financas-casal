import { useMemo } from 'react'
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer,
} from 'recharts'
import useLancamentos from '../../hooks/useLancamentos'
import { getLancamentos } from '../../services/storage'
import { formatarMoeda, formatarMesAno } from '../../utils/formatters'
import { CATEGORIAS, iconeCategoria } from '../../constants/categories'

const CORES = ['#6c63ff', '#00d4aa', '#ff4757', '#ffa502', '#2ed573', '#1e90ff', '#ff6b81', '#a29bfe']

function dadosMesLocal(mes, ano) {
  return getLancamentos().filter(l => {
    const [y, m] = (l.data ?? '').split('-').map(Number)
    return y === ano && m === mes
  })
}

function DashboardPage() {
  const now = new Date()
  const mes = now.getMonth() + 1
  const ano = now.getFullYear()

  const { lancamentos } = useLancamentos(mes, ano)

  const gastosMes  = lancamentos.filter(l => l.tipo === 'gasto')
  const totalGastos = gastosMes.reduce((s, l) => s + l.valor, 0)

  const porCategoria = useMemo(() =>
    CATEGORIAS
      .map(cat => ({
        id: cat.id, name: cat.label, icon: cat.icon,
        value: gastosMes.filter(l => l.categoria === cat.id).reduce((s, l) => s + l.valor, 0),
      }))
      .filter(c => c.value > 0)
      .sort((a, b) => b.value - a.value),
  [gastosMes])

  const pessoas = [...new Set(gastosMes.map(l => l.quem_pagou).filter(Boolean))]
  const porPessoa = pessoas.map(p => ({
    nome: p,
    total: gastosMes.filter(l => l.quem_pagou === p).reduce((s, l) => s + l.valor, 0),
  }))

  const maiorGasto = [...gastosMes].sort((a, b) => b.valor - a.valor)[0]

  const historico = useMemo(() => {
    const result = []
    for (let i = 5; i >= 0; i--) {
      const d = new Date(ano, mes - 1 - i, 1)
      const m = d.getMonth() + 1
      const a = d.getFullYear()
      const doMes = dadosMesLocal(m, a)
      result.push({
        label: formatarMesAno(m, a).slice(0, 3),
        gastos:   doMes.filter(l => l.tipo === 'gasto').reduce((s, l) => s + l.valor, 0),
        receitas: doMes.filter(l => l.tipo === 'receita').reduce((s, l) => s + l.valor, 0),
      })
    }
    return result
  }, [mes, ano])

  if (lancamentos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-4xl mb-3">📊</p>
        <p className="text-text-secondary text-sm">Sem dados para exibir este mês.</p>
      </div>
    )
  }

  return (
    <div className="px-4 pt-4 pb-6 space-y-6">
      {/* Gráfico de pizza */}
      {porCategoria.length > 0 && (
        <section>
          <h2 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-4">Por categoria</h2>
          <div className="flex items-center gap-4">
            <div style={{ width: 150, height: 150, flexShrink: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={porCategoria} cx="50%" cy="50%"
                    innerRadius={40} outerRadius={65} dataKey="value" paddingAngle={2}>
                    {porCategoria.map((_, i) => (
                      <Cell key={i} fill={CORES[i % CORES.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-2 min-w-0">
              {porCategoria.slice(0, 5).map((cat, i) => (
                <div key={cat.id} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: CORES[i % CORES.length] }} />
                  <span className="text-xs text-text-secondary truncate flex-1">{cat.name}</span>
                  <span className="text-xs text-text-primary font-medium">
                    {totalGastos > 0 ? ((cat.value / totalGastos) * 100).toFixed(0) : 0}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gastos por pessoa */}
      {porPessoa.length > 0 && (
        <section>
          <h2 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-3">Por pessoa</h2>
          <div className="space-y-3">
            {porPessoa.map((p, i) => (
              <div key={p.nome}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-text-primary">{p.nome}</span>
                  <span className="text-text-secondary">{formatarMoeda(p.total)}</span>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: totalGastos > 0 ? `${(p.total / totalGastos) * 100}%` : '0%',
                      backgroundColor: CORES[i % CORES.length],
                    }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Maior gasto */}
      {maiorGasto && (
        <section>
          <h2 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-2">Maior gasto</h2>
          <div className="bg-bg-card rounded-2xl border border-border p-4 flex items-center gap-3">
            <span className="text-3xl">{iconeCategoria(maiorGasto.categoria)}</span>
            <div className="flex-1 min-w-0">
              <p className="text-text-primary font-medium text-sm truncate">
                {maiorGasto.descricao || maiorGasto.categoria}
              </p>
              <p className="text-text-secondary text-xs">{maiorGasto.quem_pagou}</p>
            </div>
            <p className="text-danger font-bold text-lg flex-shrink-0">{formatarMoeda(maiorGasto.valor)}</p>
          </div>
        </section>
      )}

      {/* Evolução 6 meses */}
      <section>
        <h2 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-4">Últimos 6 meses</h2>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={historico} margin={{ top: 0, right: 4, left: -20, bottom: 0 }} barCategoryGap="30%">
            <XAxis dataKey="label" tick={{ fill: '#8892b0', fontSize: 10 }}
              axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#8892b0', fontSize: 10 }}
              axisLine={false} tickLine={false}
              tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v} />
            <Tooltip
              formatter={(v, name) => [formatarMoeda(v), name === 'gastos' ? 'Gastos' : 'Receitas']}
              contentStyle={{ background: '#111827', border: '1px solid #1e2a45', borderRadius: 12, fontSize: 12 }}
              labelStyle={{ color: '#8892b0' }}
              cursor={{ fill: 'rgba(255,255,255,0.04)' }}
            />
            <Bar dataKey="gastos"   fill="#ff4757" radius={[4, 4, 0, 0]} maxBarSize={20} />
            <Bar dataKey="receitas" fill="#00d4aa" radius={[4, 4, 0, 0]} maxBarSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Tabela por categoria */}
      {porCategoria.length > 0 && (
        <section>
          <h2 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-3">Resumo</h2>
          <div className="bg-bg-card rounded-2xl border border-border overflow-hidden">
            {porCategoria.map((cat, i) => (
              <div key={cat.id}
                className={`flex items-center gap-3 px-4 py-3 ${i < porCategoria.length - 1 ? 'border-b border-border' : ''}`}>
                <span className="text-lg">{cat.icon}</span>
                <span className="flex-1 text-sm text-text-primary">{cat.name}</span>
                <span className="text-xs text-text-secondary w-10 text-right">
                  {totalGastos > 0 ? ((cat.value / totalGastos) * 100).toFixed(0) : 0}%
                </span>
                <span className="text-sm font-medium text-text-primary w-24 text-right">
                  {formatarMoeda(cat.value)}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default DashboardPage
