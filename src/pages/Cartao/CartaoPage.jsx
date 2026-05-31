import { useState } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts'
import useCartoes from '../../hooks/useCartoes'
import useLancamentos from '../../hooks/useLancamentos'
import usePessoal from '../../hooks/usePessoal'
import useCategorias from '../../hooks/useCategorias'
import Toast from '../../components/ui/Toast'
import { formatarMoeda, formatarCompetencia, formatarDataCurta } from '../../utils/formatters'
import { usoCartao, faturasCartao } from '../../utils/lancamentos'
import { iconeCategoria } from '../../constants/categories'

function CartaoPage() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const escopo = searchParams.get('escopo') === 'casal' ? 'casal' : 'pessoal'
  const navigate = useNavigate()
  const [toast, setToast] = useState(null)

  const { cartoes } = useCartoes(escopo)
  const now = new Date()
  const casalLanc = useLancamentos(now.getMonth() + 1, now.getFullYear())
  const pessoalLanc = usePessoal(now.getMonth() + 1, now.getFullYear())
  const hook = escopo === 'pessoal' ? pessoalLanc : casalLanc
  const { categorias } = useCategorias()

  const cartao = cartoes.find(c => c.id === id)
  const lancCartao = (hook.todos || []).filter(l => l.tipo === 'cartao' && l.cartao_id === id)
  const uso = cartao ? usoCartao(cartao, hook.todos || []) : { usado: 0, limite: 0, disponivel: 0 }
  const faturas = cartao ? faturasCartao(cartao, hook.todos || []) : []

  // Gasto por competência (últimas faturas, ordem cronológica para o gráfico).
  const porMes = [...faturas].reverse().slice(-6).map(f => ({
    mes: formatarCompetencia(f.competencia).split(' ')[0].slice(0, 3),
    total: f.total,
  }))
  const dadosDonut = [
    { nome: 'Usado', valor: uso.usado },
    { nome: 'Disponível', valor: Math.max(0, uso.disponivel) },
  ]

  function pagarFatura(fatura) {
    if (!cartao.conta_pagamento_id) {
      setToast({ mensagem: 'Defina a conta de pagamento do cartão (na Carteira).', tipo: 'erro' })
      return
    }
    fatura.itens.forEach(l => hook.atualizar(l.id, { pago: true, conta_id: cartao.conta_pagamento_id }))
    setToast({ mensagem: `Fatura de ${formatarCompetencia(fatura.competencia)} paga!`, tipo: 'sucesso' })
  }

  if (!cartao) {
    return (
      <div className="px-4 pt-4 pb-6">
        <Voltar onClick={() => navigate(-1)} />
        <p className="text-text-secondary text-sm text-center py-12">Cartão não encontrado.</p>
        {toast && <Toast mensagem={toast.mensagem} tipo={toast.tipo} onClose={() => setToast(null)} />}
      </div>
    )
  }

  const pct = uso.limite > 0 ? Math.min(100, (uso.usado / uso.limite) * 100) : 0

  return (
    <div className="px-4 pt-4 pb-6 space-y-6">
      {toast && <Toast mensagem={toast.mensagem} tipo={toast.tipo} onClose={() => setToast(null)} />}
      <Voltar onClick={() => navigate(-1)} />

      {/* Cabeçalho */}
      <div className="bg-bg-card rounded-2xl border border-border p-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">💳</span>
          <div>
            <p className="text-text-primary font-semibold">{cartao.nome}</p>
            <p className="text-text-secondary text-xs">
              {cartao.bandeira}{cartao.dia_vencimento ? ` · vence dia ${cartao.dia_vencimento}` : ''}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <Stat rotulo="Limite" valor={uso.limite} />
          <Stat rotulo="Usado" valor={uso.usado} cor="text-danger" />
          <Stat rotulo="Disponível" valor={uso.disponivel} cor="text-accent-secondary" />
        </div>
        {uso.limite > 0 && (
          <div className="h-2 rounded-full bg-border overflow-hidden mt-3">
            <div className={`h-full ${pct < 70 ? 'bg-accent-secondary' : pct < 90 ? 'bg-yellow-500' : 'bg-danger'}`}
              style={{ width: `${pct}%` }} />
          </div>
        )}
      </div>

      {/* Gráficos */}
      {uso.limite > 0 && (
        <div className="bg-bg-card rounded-2xl border border-border p-4">
          <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">Uso do limite</p>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={dadosDonut} dataKey="valor" nameKey="nome" innerRadius={45} outerRadius={70} paddingAngle={2}>
                  <Cell fill="#ff4757" />
                  <Cell fill="#1e2a45" />
                </Pie>
                <Tooltip formatter={v => formatarMoeda(v)} contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {porMes.length > 0 && (
        <div className="bg-bg-card rounded-2xl border border-border p-4">
          <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">Gasto por fatura</p>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={porMes}>
                <XAxis dataKey="mes" tick={{ fill: '#8892b0', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#8892b0', fontSize: 11 }} axisLine={false} tickLine={false}
                  tickFormatter={v => `${(v / 1000).toFixed(0)}k`} />
                <Tooltip formatter={v => formatarMoeda(v)} contentStyle={tooltipStyle} cursor={{ fill: '#1e2a4555' }} />
                <Bar dataKey="total" fill="#6c63ff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Faturas */}
      <section>
        <h2 className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-3">Faturas</h2>
        {faturas.length === 0 ? (
          <p className="text-text-secondary text-xs text-center py-4">Nenhuma compra neste cartão.</p>
        ) : (
          <div className="space-y-3">
            {faturas.map(f => (
              <Fatura key={f.competencia} fatura={f} categorias={categorias} onPagar={() => pagarFatura(f)} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

function Fatura({ fatura, categorias, onPagar }) {
  const [aberta, setAberta] = useState(false)
  return (
    <div className="bg-bg-card rounded-xl border border-border overflow-hidden">
      <button onClick={() => setAberta(v => !v)} className="w-full flex items-center justify-between px-4 py-3 active:opacity-70">
        <div className="text-left">
          <p className="text-text-primary text-sm font-medium">{formatarCompetencia(fatura.competencia)}</p>
          <p className="text-text-secondary text-xs">{fatura.itens.length} compra(s)</p>
        </div>
        <div className="text-right">
          <p className="text-text-primary text-sm font-semibold">{formatarMoeda(fatura.total)}</p>
          <span className={`text-[11px] ${fatura.paga ? 'text-accent-secondary' : 'text-yellow-500'}`}>
            {fatura.paga ? 'Paga' : 'Em aberto'}
          </span>
        </div>
      </button>
      {aberta && (
        <div className="border-t border-border px-4 py-2 space-y-2">
          {fatura.itens.map(l => (
            <div key={l.id} className="flex items-center gap-2 text-xs">
              <span>{iconeCategoria(l.categoria, categorias)}</span>
              <span className="flex-1 truncate text-text-secondary">
                {l.descricao || l.categoria || 'Compra'}
                {l.parcela_total > 1 ? ` (${l.parcela_num}/${l.parcela_total})` : ''}
                {' · '}{formatarDataCurta(l.data + 'T00:00:00')}
              </span>
              <span className="text-text-primary">{formatarMoeda(l.valor)}</span>
            </div>
          ))}
          {!fatura.paga && (
            <button onClick={onPagar}
              className="w-full mt-2 py-2 rounded-xl bg-accent-primary text-white text-sm font-medium active:scale-95 transition-all">
              Pagar fatura
            </button>
          )}
        </div>
      )}
    </div>
  )
}

function Stat({ rotulo, valor, cor = 'text-text-primary' }) {
  return (
    <div>
      <p className="text-[11px] text-text-secondary">{rotulo}</p>
      <p className={`text-sm font-semibold ${cor}`}>{formatarMoeda(valor)}</p>
    </div>
  )
}

function Voltar({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center gap-1 text-text-secondary text-sm active:text-text-primary transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
      Voltar
    </button>
  )
}

const tooltipStyle = { background: '#111827', border: '1px solid #1e2a45', borderRadius: 12, color: '#e8eaf6' }

export default CartaoPage
