import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import usePessoal from '../../hooks/usePessoal'
import useCategorias from '../../hooks/useCategorias'
import useUsuario from '../../hooks/useUsuario'
import { formatarMoeda, formatarData, formatarMesAno } from '../../utils/formatters'
import { iconeCategoria } from '../../constants/categories'
import { removerPessoal } from '../../services/sheets'
import { getUsuario } from '../../services/storage'

function PessoalPage() {
  const now = new Date()
  const [mes, setMes] = useState(now.getMonth() + 1)
  const [ano, setAno] = useState(now.getFullYear())

  const { nome } = useUsuario()
  const { categorias } = useCategorias()
  const { lancamentos, temCreds, removerLocal } = usePessoal(mes, ano)
  const navigate = useNavigate()

  function navMes(delta) {
    let m = mes + delta, a = ano
    if (m > 12) { m = 1; a++ }
    if (m < 1)  { m = 12; a-- }
    setMes(m); setAno(a)
  }

  const receitas = lancamentos.filter(l => l.tipo === 'receita').reduce((s, l) => s + l.valor, 0)
  const despesas = lancamentos.filter(l => l.tipo === 'gasto').reduce((s, l) => s + l.valor, 0)
  const saldo = receitas - despesas

  const ordenados = [...lancamentos].sort((a, b) => (b.data ?? '').localeCompare(a.data ?? ''))

  async function excluir(l) {
    if (l.origem === 'casal') return // vínculo do casal não é editável aqui
    removerLocal(l.id)
    if (navigator.onLine && l.sincronizado) {
      removerPessoal(getUsuario() || 'a', l.id).catch(() => {})
    }
  }

  if (!temCreds) {
    return (
      <div className="px-4 pt-4 pb-6">
        <SeletorMes mes={mes} ano={ano} navMes={navMes} />
        <div className="text-center py-16">
          <p className="text-4xl mb-3">🔒</p>
          <p className="text-text-primary text-sm font-medium mb-1">Controle pessoal de {nome}</p>
          <p className="text-text-secondary text-xs mb-5 px-6">
            Configure sua planilha pessoal para começar. Seus dados ficam separados dos do seu parceiro(a).
          </p>
          <button onClick={() => navigate('/configuracoes')}
            className="px-4 py-2 rounded-xl bg-accent-primary text-white text-sm font-medium active:scale-95 transition-all">
            Configurar planilha pessoal
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 pt-4 pb-6">
      <SeletorMes mes={mes} ano={ano} navMes={navMes} />

      {/* Saldo */}
      <div className="bg-bg-card rounded-2xl border border-border p-4 mb-3">
        <p className="text-xs text-text-secondary mb-1">Saldo pessoal — {nome}</p>
        <p className={`text-2xl font-bold ${saldo >= 0 ? 'text-accent-secondary' : 'text-danger'}`}>
          {formatarMoeda(saldo)}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-bg-card rounded-2xl border border-border p-4">
          <p className="text-xs text-text-secondary mb-1">Receitas</p>
          <p className="text-lg font-bold text-accent-secondary">{formatarMoeda(receitas)}</p>
        </div>
        <div className="bg-bg-card rounded-2xl border border-border p-4">
          <p className="text-xs text-text-secondary mb-1">Despesas</p>
          <p className="text-lg font-bold text-danger">{formatarMoeda(despesas)}</p>
        </div>
      </div>

      {ordenados.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-4xl mb-3">💼</p>
          <p className="text-text-secondary text-sm">Nenhum lançamento pessoal este mês.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {ordenados.map(l => (
            <ItemPessoal key={l.id} lancamento={l} categorias={categorias} onExcluir={() => excluir(l)} />
          ))}
        </div>
      )}
    </div>
  )
}

function SeletorMes({ mes, ano, navMes }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <button onClick={() => navMes(-1)}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-bg-card border border-border text-text-secondary active:bg-border transition-colors">◀</button>
      <span className="text-text-primary font-semibold">{formatarMesAno(mes, ano)}</span>
      <button onClick={() => navMes(1)}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-bg-card border border-border text-text-secondary active:bg-border transition-colors">▶</button>
    </div>
  )
}

function ItemPessoal({ lancamento, categorias, onExcluir }) {
  const { descricao, categoria, valor, tipo, data, origem, sincronizado } = lancamento
  const doCasal = origem === 'casal'
  return (
    <div className="flex items-center gap-3 bg-bg-card rounded-xl border border-border px-4 py-3 animate-fade-in">
      <span className="text-xl w-8 text-center">{iconeCategoria(categoria, categorias)}</span>
      <div className="flex-1 min-w-0">
        <p className="text-text-primary text-sm font-medium truncate">{descricao || categoria}</p>
        <p className="text-text-secondary text-xs">
          {doCasal ? 'Despesa do casal' : 'Pessoal'} · {formatarData(data + 'T00:00:00')}
        </p>
      </div>
      <div className="text-right flex-shrink-0">
        <p className={`text-sm font-semibold ${tipo === 'receita' ? 'text-accent-secondary' : 'text-text-primary'}`}>
          {tipo === 'receita' ? '+' : '−'}{formatarMoeda(valor)}
        </p>
        {!sincronizado && <p className="text-xs text-text-secondary">⏳</p>}
      </div>
      {!doCasal && (
        <button onClick={onExcluir}
          className="text-xs text-danger active:opacity-70 transition-opacity flex-shrink-0">Excluir</button>
      )}
    </div>
  )
}

export default PessoalPage
