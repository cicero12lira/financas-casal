import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useLancamentos from '../../hooks/useLancamentos'
import usePessoal from '../../hooks/usePessoal'
import useCategorias from '../../hooks/useCategorias'
import { formatarMoeda, formatarData, formatarMesAno } from '../../utils/formatters'
import { iconeCategoria } from '../../constants/categories'
import { ESCOPOS_FILTRO, TIPOS_LANCAMENTO, iconeTipoLancamento, ehDespesa } from '../../constants/financas'
import { combinarLancamentos } from '../../utils/lancamentos'

const FILTROS_TIPO = ['todos', ...TIPOS_LANCAMENTO.map(t => t.id)]

function HistoricoPage() {
  const now = new Date()
  const [mes, setMes] = useState(now.getMonth() + 1)
  const [ano, setAno] = useState(now.getFullYear())
  const [escopo, setEscopo] = useState('tudo')
  const [filtroTipo, setFiltroTipo] = useState('todos')
  const [filtroCategoria, setFiltroCategoria] = useState('todas')
  const [filtroPessoa, setFiltroPessoa] = useState('todas')

  const casal = useLancamentos(mes, ano)
  const pessoal = usePessoal(mes, ano)
  const { categorias } = useCategorias()
  const navigate = useNavigate()

  function navMes(delta) {
    let novoMes = mes + delta
    let novoAno = ano
    if (novoMes > 12) { novoMes = 1; novoAno++ }
    if (novoMes < 1)  { novoMes = 12; novoAno-- }
    setMes(novoMes)
    setAno(novoAno)
  }

  const todos = combinarLancamentos(casal.lancamentos, pessoal.lancamentos, escopo)
  const pessoas = [...new Set(todos.map(l => l.quem_pagou).filter(Boolean))]

  const filtrados = todos
    .filter(l => filtroTipo === 'todos' || l.tipo === filtroTipo)
    .filter(l => filtroCategoria === 'todas' || l.categoria === filtroCategoria)
    .filter(l => filtroPessoa === 'todas' || l.quem_pagou === filtroPessoa)
    .sort((a, b) => (b.data ?? '').localeCompare(a.data ?? ''))

  const total = filtrados.reduce((s, l) => {
    if (l.tipo === 'transferencia') return s
    return s + (ehDespesa(l.tipo) ? -l.valor : l.valor)
  }, 0)

  function excluir(l) {
    if (l._escopo === 'pessoal') {
      if (l.origem === 'casal') return // vínculo do casal: some ao excluir a despesa do casal
      pessoal.remover(l.id)
    } else {
      casal.remover(l.id)
    }
  }

  return (
    <div className="px-4 pt-4 pb-6">
      {/* Seletor de mês */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navMes(-1)}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-bg-card border border-border text-text-secondary active:bg-border transition-colors">◀</button>
        <span className="text-text-primary font-semibold">{formatarMesAno(mes, ano)}</span>
        <button onClick={() => navMes(1)}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-bg-card border border-border text-text-secondary active:bg-border transition-colors">▶</button>
      </div>

      {/* Filtro de escopo */}
      <div className="flex gap-2 mb-3">
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

      {/* Total do período */}
      <div className="bg-bg-card rounded-2xl border border-border px-4 py-3 mb-4 flex justify-between items-center">
        <span className="text-text-secondary text-sm">Total filtrado</span>
        <span className={`font-bold text-lg ${total >= 0 ? 'text-accent-secondary' : 'text-danger'}`}>
          {formatarMoeda(Math.abs(total))}
        </span>
      </div>

      {/* Filtros */}
      <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
        {FILTROS_TIPO.map(f => (
          <button key={f} onClick={() => setFiltroTipo(f)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors flex-shrink-0 ${
              filtroTipo === f
                ? 'bg-accent-primary/20 border-accent-primary text-accent-primary'
                : 'bg-bg-card border-border text-text-secondary'
            }`}>
            {f === 'todos' ? 'Todos' : TIPOS_LANCAMENTO.find(t => t.id === f).label}
          </button>
        ))}
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        <select value={filtroCategoria} onChange={e => setFiltroCategoria(e.target.value)}
          className="text-xs bg-bg-card border border-border text-text-secondary rounded-full px-3 py-1 outline-none flex-shrink-0">
          <option value="todas">Categoria</option>
          {categorias.map(c => <option key={c.id} value={c.id}>{c.icon} {c.label}</option>)}
        </select>
        {pessoas.length > 0 && (
          <select value={filtroPessoa} onChange={e => setFiltroPessoa(e.target.value)}
            className="text-xs bg-bg-card border border-border text-text-secondary rounded-full px-3 py-1 outline-none flex-shrink-0">
            <option value="todas">Pessoa</option>
            {pessoas.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        )}
      </div>

      {/* Lista */}
      {filtrados.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-4xl mb-3">📋</p>
          <p className="text-text-secondary text-sm">Nenhum lançamento encontrado.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtrados.map(l => (
            <ItemSwipavel key={l.id} lancamento={l} categorias={categorias}
              podeExcluir={!(l._escopo === 'pessoal' && l.origem === 'casal')}
              onExcluir={() => excluir(l)} />
          ))}
        </div>
      )}
    </div>
  )
}

function ItemSwipavel({ lancamento, categorias, podeExcluir, onExcluir }) {
  const [offsetX, setOffsetX] = useState(0)
  const [mostrarAcoes, setMostrarAcoes] = useState(false)
  const startX = useRef(0)
  const LIMIAR = 72

  function onTouchStart(e) { startX.current = e.touches[0].clientX }
  function onTouchMove(e) {
    const delta = e.touches[0].clientX - startX.current
    if (delta < 0) setOffsetX(Math.max(delta, -LIMIAR))
  }
  function onTouchEnd() {
    if (podeExcluir && offsetX < -LIMIAR / 2) { setOffsetX(-LIMIAR); setMostrarAcoes(true) }
    else { setOffsetX(0); setMostrarAcoes(false) }
  }
  function fechar() { setOffsetX(0); setMostrarAcoes(false) }

  const { descricao, categoria, valor, tipo, quem_pagou, data, sincronizado, efetivada, _escopo } = lancamento
  const ehReceita = tipo === 'receita'
  const ehTransf = tipo === 'transferencia'
  const icone = ehReceita || ehTransf || tipo === 'cartao'
    ? iconeTipoLancamento(tipo)
    : iconeCategoria(categoria, categorias)
  const legenda = [quem_pagou || (_escopo === 'pessoal' ? 'Pessoal' : 'Casal'), formatarData(data + 'T00:00:00')]
    .filter(Boolean).join(' · ')

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="absolute right-0 top-0 bottom-0 flex">
        <button onClick={() => { fechar(); onExcluir() }}
          className="flex items-center justify-center w-16 bg-danger text-white text-xs font-medium">
          Excluir
        </button>
      </div>

      <div className="flex items-center gap-3 bg-bg-card border border-border px-4 py-3 relative z-10 transition-transform"
        style={{ transform: `translateX(${offsetX}px)` }}
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
        onClick={mostrarAcoes ? fechar : undefined}>
        <span className="text-xl w-8 text-center">{icone}</span>
        <div className="flex-1 min-w-0">
          <p className="text-text-primary text-sm font-medium truncate">{descricao || categoria || 'Transferência'}</p>
          <p className="text-text-secondary text-xs">{legenda}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className={`text-sm font-semibold ${ehReceita ? 'text-accent-secondary' : ehTransf ? 'text-text-secondary' : 'text-text-primary'}`}>
            {ehTransf ? '' : ehReceita ? '+' : '−'}{formatarMoeda(valor)}
          </p>
          <p className="text-xs text-text-secondary">
            {efetivada === false ? '📅' : ''}{!sincronizado ? '⏳' : ''}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HistoricoPage
