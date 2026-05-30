import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useConfig from '../../hooks/useConfig'
import useLancamentos from '../../hooks/useLancamentos'
import useCategorias from '../../hooks/useCategorias'
import useAuth from '../../hooks/useAuth'
import useUsuario from '../../hooks/useUsuario'
import Toast from '../../components/ui/Toast'
import { formatarMesAno } from '../../utils/formatters'
import { getAuth } from '../../services/storage'

function ConfiguracoesPage() {
  const now = new Date()
  const { config, atualizar } = useConfig()
  const { nome } = useUsuario()
  const { lancamentos } = useLancamentos(now.getMonth() + 1, now.getFullYear())
  const [toast, setToast] = useState(null)

  function showToast(mensagem, tipo = 'sucesso') { setToast({ mensagem, tipo }) }

  return (
    <div className="px-4 pt-4 pb-8 space-y-6">
      {toast && <Toast mensagem={toast.mensagem} tipo={toast.tipo} onClose={() => setToast(null)} />}

      <div className="bg-accent-primary/10 border border-accent-primary/30 rounded-2xl px-4 py-3">
        <p className="text-xs text-text-secondary">Conectado como</p>
        <p className="text-text-primary font-semibold">{nome}</p>
        {getAuth()?.email && <p className="text-text-secondary text-xs mt-0.5">{getAuth().email}</p>}
      </div>

      <SecaoPerfil config={config} atualizar={atualizar} onSalvo={() => showToast('Perfil salvo!')} />
      <SecaoOrcamento config={config} atualizar={atualizar} onSalvo={() => showToast('Orçamento salvo!')} />
      <SecaoConta config={config} atualizar={atualizar} onSalvo={msg => showToast(msg)} />
      <SecaoCategorias onSalvo={msg => showToast(msg)} onErro={msg => showToast(msg, 'erro')} />
      <SecaoDados lancamentos={lancamentos} mes={now.getMonth() + 1} ano={now.getFullYear()} onSalvo={msg => showToast(msg)} />
    </div>
  )
}

// --- Perfil do casal ---

function SecaoPerfil({ config, atualizar, onSalvo }) {
  const [nomeA, setNomeA] = useState(config.nome_pessoa_a ?? '')
  const [nomeB, setNomeB] = useState(config.nome_pessoa_b ?? '')

  async function salvar() {
    await atualizar({ nome_pessoa_a: nomeA.trim(), nome_pessoa_b: nomeB.trim() })
    onSalvo()
  }

  return (
    <Secao titulo="Perfil do casal">
      <Campo label="Pessoa A">
        <input value={nomeA} onChange={e => setNomeA(e.target.value)} placeholder="Nome da Pessoa A" className={inputCls} />
      </Campo>
      <Campo label="Pessoa B">
        <input value={nomeB} onChange={e => setNomeB(e.target.value)} placeholder="Nome da Pessoa B" className={inputCls} />
      </Campo>
      <BotaoSalvar onClick={salvar} />
    </Secao>
  )
}

// --- Orçamento ---

function SecaoOrcamento({ config, atualizar, onSalvo }) {
  const [orcamento, setOrcamento] = useState(config.orcamento_mensal ?? '')

  async function salvar() {
    const val = parseFloat(String(orcamento).replace(',', '.')) || 0
    await atualizar({ orcamento_mensal: val })
    onSalvo()
  }

  return (
    <Secao titulo="Orçamento">
      <Campo label="Orçamento mensal (R$)">
        <input type="text" inputMode="decimal" value={orcamento}
          onChange={e => setOrcamento(e.target.value)} placeholder="Ex: 5000" className={inputCls} />
      </Campo>
      <BotaoSalvar onClick={salvar} />
    </Secao>
  )
}

// --- Conta (e-mails + logout) ---

function SecaoConta({ config, atualizar, onSalvo }) {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [emailA, setEmailA] = useState(config.email_pessoa_a ?? '')
  const [emailB, setEmailB] = useState(config.email_pessoa_b ?? '')

  async function salvarEmails() {
    await atualizar({ email_pessoa_a: emailA.trim(), email_pessoa_b: emailB.trim() })
    onSalvo('E-mails salvos!')
  }

  async function sair() {
    await logout()
    navigate('/login', { replace: true })
  }

  return (
    <Secao titulo="Conta">
      <p className="text-xs text-text-secondary -mt-1">
        O login usa sua conta Google. Cada e-mail é mapeado para uma pessoa do casal.
      </p>
      <Campo label="E-mail da Pessoa A">
        <input type="email" value={emailA} onChange={e => setEmailA(e.target.value)}
          placeholder="pessoa.a@gmail.com" className={inputCls} />
      </Campo>
      <Campo label="E-mail da Pessoa B">
        <input type="email" value={emailB} onChange={e => setEmailB(e.target.value)}
          placeholder="pessoa.b@gmail.com" className={inputCls} />
      </Campo>
      <BotaoSalvar label="Salvar e-mails" onClick={salvarEmails} />

      <div className="pt-3 border-t border-border">
        <button onClick={sair} className="text-sm text-danger active:opacity-70 transition-opacity">
          Sair da conta →
        </button>
      </div>
    </Secao>
  )
}

// --- Categorias ---

function SecaoCategorias({ onSalvo, onErro }) {
  const { categorias, adicionar, editar, remover } = useCategorias()
  const [editandoId, setEditandoId] = useState(null)
  const [novoLabel, setNovoLabel] = useState('')
  const [novoIcon, setNovoIcon] = useState('')

  async function salvarNova() {
    if (!novoLabel.trim()) return onErro('Dê um nome à categoria.')
    await adicionar({ label: novoLabel, icon: novoIcon })
    setNovoLabel('')
    setNovoIcon('')
    onSalvo('Categoria adicionada!')
  }

  async function salvarEdicao(id, label, icon) {
    if (!label.trim()) return onErro('O nome não pode ficar vazio.')
    await editar(id, { label, icon })
    setEditandoId(null)
    onSalvo('Categoria atualizada!')
  }

  async function excluir(id) {
    await remover(id)
    onSalvo('Categoria removida.')
  }

  return (
    <Secao titulo="Categorias">
      <div className="space-y-2">
        {categorias.map(cat => (
          editandoId === cat.id ? (
            <EditorCategoria
              key={cat.id}
              inicial={cat}
              onSalvar={(label, icon) => salvarEdicao(cat.id, label, icon)}
              onCancelar={() => setEditandoId(null)}
            />
          ) : (
            <div key={cat.id} className="flex items-center gap-3 bg-bg-primary border border-border rounded-xl px-3 py-2.5">
              <span className="text-xl w-7 text-center">{cat.icon}</span>
              <span className="flex-1 text-sm text-text-primary">{cat.label}</span>
              <button onClick={() => setEditandoId(cat.id)}
                className="text-xs text-accent-primary active:opacity-70 transition-opacity">Editar</button>
              <button onClick={() => excluir(cat.id)}
                className="text-xs text-danger active:opacity-70 transition-opacity">Excluir</button>
            </div>
          )
        ))}
      </div>

      <div className="flex gap-2 pt-1">
        <input
          value={novoIcon}
          onChange={e => setNovoIcon(e.target.value.slice(0, 2))}
          placeholder="🎮"
          className="w-14 text-center bg-bg-primary border border-border rounded-xl px-2 py-2.5 text-lg outline-none focus:border-accent-primary transition-colors"
        />
        <input
          value={novoLabel}
          onChange={e => setNovoLabel(e.target.value)}
          placeholder="Nova categoria"
          maxLength={30}
          className="flex-1 bg-bg-primary border border-border rounded-xl px-3 py-2.5 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:border-accent-primary transition-colors"
        />
        <button onClick={salvarNova} className={btnPrimCls}>Add</button>
      </div>
    </Secao>
  )
}

function EditorCategoria({ inicial, onSalvar, onCancelar }) {
  const [label, setLabel] = useState(inicial.label)
  const [icon, setIcon] = useState(inicial.icon)
  return (
    <div className="flex gap-2 bg-bg-primary border border-accent-primary/40 rounded-xl p-2">
      <input
        value={icon}
        onChange={e => setIcon(e.target.value.slice(0, 2))}
        className="w-14 text-center bg-bg-card border border-border rounded-lg px-2 py-2 text-lg outline-none"
      />
      <input
        value={label}
        onChange={e => setLabel(e.target.value)}
        maxLength={30}
        className="flex-1 bg-bg-card border border-border rounded-lg px-3 py-2 text-sm text-text-primary outline-none"
      />
      <button onClick={() => onSalvar(label, icon)} className="text-xs text-accent-secondary px-1">Salvar</button>
      <button onClick={onCancelar} className="text-xs text-text-secondary px-1">Cancelar</button>
    </div>
  )
}

// --- Dados ---

function SecaoDados({ lancamentos, mes, ano, onSalvo }) {
  function exportarCSV() {
    const header = 'id,data,valor,tipo,categoria,quem_pagou,descricao,criado_em'
    const linhas = lancamentos.map(l =>
      [l.id, l.data, l.valor, l.tipo, l.categoria, l.quem_pagou,
        `"${(l.descricao ?? '').replace(/"/g, '""')}"`, l.criado_em].join(',')
    )
    const csv = [header, ...linhas].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `financas-${ano}-${String(mes).padStart(2, '0')}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    onSalvo(`${formatarMesAno(mes, ano)} exportado.`)
  }

  return (
    <Secao titulo="Dados">
      <p className="text-xs text-text-secondary -mt-1">
        Os dados sincronizam automaticamente entre os aparelhos (e funcionam offline).
      </p>
      <button onClick={exportarCSV} className={`${btnSecCls} w-full text-sm`}>
        📥 Exportar CSV do mês
      </button>
    </Secao>
  )
}

// --- Primitivos ---

const inputCls = 'w-full bg-bg-primary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:border-accent-primary transition-colors'
const btnPrimCls = 'px-4 py-2 rounded-xl bg-accent-primary text-white text-sm font-medium disabled:opacity-40 active:scale-95 transition-all'
const btnSecCls = 'px-4 py-2 rounded-xl bg-bg-card border border-border text-text-secondary text-sm active:bg-border transition-colors'

function Secao({ titulo, children }) {
  return (
    <section className="bg-bg-card rounded-2xl border border-border p-4 space-y-3">
      <h2 className="text-xs font-semibold text-text-secondary uppercase tracking-wide">{titulo}</h2>
      {children}
    </section>
  )
}

function Campo({ label, children }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs text-text-secondary">{label}</label>
      {children}
    </div>
  )
}

function BotaoSalvar({ label = 'Salvar', onClick }) {
  return (
    <button onClick={onClick} className={btnPrimCls}>
      {label}
    </button>
  )
}

export default ConfiguracoesPage
