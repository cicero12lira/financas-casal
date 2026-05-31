import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useConfig from '../../hooks/useConfig'
import useLancamentos from '../../hooks/useLancamentos'
import useCategorias from '../../hooks/useCategorias'
import useTiposConta from '../../hooks/useTiposConta'
import useAuth from '../../hooks/useAuth'
import useUsuario from '../../hooks/useUsuario'
import Toast from '../../components/ui/Toast'
import EmojiPicker from '../../components/ui/EmojiPicker'
import { formatarMesAno } from '../../utils/formatters'
import { getAuth, getUsuario } from '../../services/storage'

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
      <SecaoTiposConta onSalvo={msg => showToast(msg)} onErro={msg => showToast(msg, 'erro')} />
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
  const usuario = getUsuario()
  const chavePessoal = usuario === 'b' ? 'orcamento_pessoal_b' : 'orcamento_pessoal_a'
  const [casal, setCasal] = useState(config.orcamento_casal ?? config.orcamento_mensal ?? '')
  const [pessoal, setPessoal] = useState(config[chavePessoal] ?? '')

  async function salvar() {
    const num = (v) => parseFloat(String(v).replace(',', '.')) || 0
    await atualizar({ orcamento_casal: num(casal), [chavePessoal]: num(pessoal) })
    onSalvo()
  }

  return (
    <Secao titulo="Orçamento mensal">
      <Campo label="Orçamento do casal (R$)">
        <input type="text" inputMode="decimal" value={casal}
          onChange={e => setCasal(e.target.value)} placeholder="Ex: 5000" className={inputCls} />
      </Campo>
      <Campo label="Meu orçamento pessoal (R$)">
        <input type="text" inputMode="decimal" value={pessoal}
          onChange={e => setPessoal(e.target.value)} placeholder="Ex: 1500" className={inputCls} />
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
  const { categorias, adicionar, editar, remover, mover } = useCategorias()
  const [editandoId, setEditandoId] = useState(null)
  const [novoLabel, setNovoLabel] = useState('')
  const [novoIcon, setNovoIcon] = useState('🙂')

  async function salvarNova() {
    if (!novoLabel.trim()) return onErro('Dê um nome à categoria.')
    await adicionar({ label: novoLabel, icon: novoIcon })
    setNovoLabel('')
    setNovoIcon('🙂')
    onSalvo('Categoria adicionada!')
  }

  async function salvarEdicao(id, label, icon) {
    if (!label.trim()) return onErro('O nome não pode ficar vazio.')
    await editar(id, { label, icon })
    setEditandoId(null)
    onSalvo('Categoria atualizada!')
  }

  return (
    <Secao titulo="Categorias">
      <div className="space-y-2">
        {categorias.map((cat, i) => (
          editandoId === cat.id ? (
            <EditorItem
              key={cat.id}
              inicial={cat}
              onSalvar={(label, icon) => salvarEdicao(cat.id, label, icon)}
              onCancelar={() => setEditandoId(null)}
            />
          ) : (
            <ItemEditavel key={cat.id} item={cat}
              podeSubir={i > 0} podeDescer={i < categorias.length - 1}
              onSubir={() => mover(cat.id, 'cima')} onDescer={() => mover(cat.id, 'baixo')}
              onEditar={() => setEditandoId(cat.id)}
              onExcluir={async () => { await remover(cat.id); onSalvo('Categoria removida.') }} />
          )
        ))}
      </div>

      <NovoItem icon={novoIcon} setIcon={setNovoIcon} label={novoLabel} setLabel={setNovoLabel}
        placeholder="Nova categoria" onAdd={salvarNova} />
    </Secao>
  )
}

// --- Tipos de conta ---

function SecaoTiposConta({ onSalvo, onErro }) {
  const { tipos, adicionar, editar, remover } = useTiposConta()
  const [editandoId, setEditandoId] = useState(null)
  const [novoLabel, setNovoLabel] = useState('')
  const [novoIcon, setNovoIcon] = useState('🏦')

  async function salvarNova() {
    if (!novoLabel.trim()) return onErro('Dê um nome ao tipo de conta.')
    await adicionar({ label: novoLabel, icon: novoIcon })
    setNovoLabel('')
    setNovoIcon('🏦')
    onSalvo('Tipo de conta adicionado!')
  }

  async function salvarEdicao(id, label, icon) {
    if (!label.trim()) return onErro('O nome não pode ficar vazio.')
    await editar(id, { label, icon })
    setEditandoId(null)
    onSalvo('Tipo atualizado!')
  }

  return (
    <Secao titulo="Tipos de conta">
      <div className="space-y-2">
        {tipos.map(t => (
          editandoId === t.id ? (
            <EditorItem key={t.id} inicial={t}
              onSalvar={(label, icon) => salvarEdicao(t.id, label, icon)}
              onCancelar={() => setEditandoId(null)} />
          ) : (
            <ItemEditavel key={t.id} item={t}
              onEditar={() => setEditandoId(t.id)}
              onExcluir={async () => { await remover(t.id); onSalvo('Tipo removido.') }} />
          )
        ))}
      </div>
      <NovoItem icon={novoIcon} setIcon={setNovoIcon} label={novoLabel} setLabel={setNovoLabel}
        placeholder="Novo tipo (ex: Investimento)" onAdd={salvarNova} />
    </Secao>
  )
}

function ItemEditavel({ item, podeSubir, podeDescer, onSubir, onDescer, onEditar, onExcluir }) {
  return (
    <div className="flex items-center gap-2 bg-bg-primary border border-border rounded-xl px-3 py-2.5">
      <span className="text-xl w-7 text-center">{item.icon}</span>
      <span className="flex-1 text-sm text-text-primary truncate">{item.label}</span>
      {(onSubir || onDescer) && (
        <>
          <button onClick={onSubir} disabled={!podeSubir}
            className="text-text-secondary disabled:opacity-20 active:opacity-70 px-0.5">↑</button>
          <button onClick={onDescer} disabled={!podeDescer}
            className="text-text-secondary disabled:opacity-20 active:opacity-70 px-0.5">↓</button>
        </>
      )}
      <button onClick={onEditar} className="text-xs text-accent-primary active:opacity-70">Editar</button>
      <button onClick={onExcluir} className="text-xs text-danger active:opacity-70">Excluir</button>
    </div>
  )
}

function EditorItem({ inicial, onSalvar, onCancelar }) {
  const [label, setLabel] = useState(inicial.label)
  const [icon, setIcon] = useState(inicial.icon)
  return (
    <div className="flex gap-2 items-start bg-bg-primary border border-accent-primary/40 rounded-xl p-2">
      <EmojiPicker value={icon} onChange={setIcon} />
      <input value={label} onChange={e => setLabel(e.target.value)} maxLength={30}
        className="flex-1 bg-bg-card border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary outline-none" />
      <button onClick={() => onSalvar(label, icon)} className="text-xs text-accent-secondary px-1 py-3">Salvar</button>
      <button onClick={onCancelar} className="text-xs text-text-secondary px-1 py-3">Cancelar</button>
    </div>
  )
}

function NovoItem({ icon, setIcon, label, setLabel, placeholder, onAdd }) {
  return (
    <div className="flex gap-2 items-start pt-1">
      <EmojiPicker value={icon} onChange={setIcon} />
      <input value={label} onChange={e => setLabel(e.target.value)} placeholder={placeholder} maxLength={30}
        className="flex-1 bg-bg-primary border border-border rounded-xl px-3 py-2.5 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:border-accent-primary transition-colors" />
      <button onClick={onAdd} className={`${btnPrimCls} py-2.5`}>Add</button>
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
