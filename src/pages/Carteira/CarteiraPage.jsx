import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useContas from '../../hooks/useContas'
import useCartoes from '../../hooks/useCartoes'
import Toast from '../../components/ui/Toast'
import { gerarUUID } from '../../utils/uuid'
import { formatarMoeda } from '../../utils/formatters'
import { TIPOS_CONTA, BANDEIRAS, ESCOPOS, labelTipoConta, iconeTipoConta } from '../../constants/financas'

const inputCls = 'w-full bg-bg-primary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:border-accent-primary transition-colors'
const btnPrimCls = 'px-4 py-2 rounded-xl bg-accent-primary text-white text-sm font-medium disabled:opacity-40 active:scale-95 transition-all'
const btnSecCls = 'px-4 py-2 rounded-xl bg-bg-card border border-border text-text-secondary text-sm active:bg-border transition-colors'

function CarteiraPage() {
  const navigate = useNavigate()
  const [escopo, setEscopo] = useState('casal')
  const [toast, setToast] = useState(null)

  const contas = useContas(escopo)
  const cartoes = useCartoes(escopo)
  const temCreds = contas.temCreds

  function showToast(mensagem, tipo = 'sucesso') { setToast({ mensagem, tipo }) }

  return (
    <div className="px-4 pt-4 pb-6 space-y-6">
      {toast && <Toast mensagem={toast.mensagem} tipo={toast.tipo} onClose={() => setToast(null)} />}

      {/* Toggle de escopo */}
      <div className="flex gap-2">
        {ESCOPOS.map(e => (
          <button key={e.id} onClick={() => setEscopo(e.id)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
              escopo === e.id
                ? 'bg-accent-primary/20 border-accent-primary text-accent-primary'
                : 'bg-bg-card border-border text-text-secondary'
            }`}>
            {e.label}
          </button>
        ))}
      </div>

      {!temCreds ? (
        <div className="text-center py-16">
          <p className="text-4xl mb-3">🔒</p>
          <p className="text-text-secondary text-xs mb-5 px-6">
            {escopo === 'casal'
              ? 'Configure o Firebase e o código do casal nas Configurações para usar contas e cartões.'
              : 'Entre com sua conta para usar contas e cartões pessoais.'}
          </p>
          <button onClick={() => navigate('/configuracoes')} className={btnPrimCls}>
            Ir para Configurações
          </button>
        </div>
      ) : (
        <>
          <SecaoContas escopo={escopo} hook={contas} onMsg={showToast} />
          <SecaoCartoes escopo={escopo} hook={cartoes} contas={contas.contas} onMsg={showToast} />
        </>
      )}
    </div>
  )
}

// --- Contas ---

function SecaoContas({ hook, onMsg }) {
  const { contas, adicionar, atualizar, remover } = hook
  const [editando, setEditando] = useState(null) // id | 'novo' | null

  function salvar(dados, id) {
    if (!dados.nome.trim()) return onMsg('Dê um nome à conta.', 'erro')
    if (id) {
      atualizar(id, dados)
      onMsg('Conta atualizada!')
    } else {
      adicionar({ id: gerarUUID(), ...dados, criado_em: new Date().toISOString() })
      onMsg('Conta adicionada!')
    }
    setEditando(null)
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Contas</h2>
        {editando !== 'novo' && (
          <button onClick={() => setEditando('novo')} className="text-sm text-accent-primary active:opacity-70">+ Nova</button>
        )}
      </div>

      {editando === 'novo' && (
        <ContaForm onSalvar={d => salvar(d)} onCancelar={() => setEditando(null)} />
      )}

      <div className="space-y-2">
        {contas.map(c => (
          editando === c.id ? (
            <ContaForm key={c.id} inicial={c} onSalvar={d => salvar(d, c.id)} onCancelar={() => setEditando(null)} />
          ) : (
            <div key={c.id} className="flex items-center gap-3 bg-bg-card rounded-xl border border-border px-4 py-3">
              <span className="text-xl w-8 text-center">{iconeTipoConta(c.tipo)}</span>
              <div className="flex-1 min-w-0">
                <p className="text-text-primary text-sm font-medium truncate">{c.nome}</p>
                <p className="text-text-secondary text-xs">{labelTipoConta(c.tipo)} · {formatarMoeda(c.saldo_inicial)}</p>
              </div>
              {!c.sincronizado && <span className="text-xs text-text-secondary">⏳</span>}
              <button onClick={() => setEditando(c.id)} className="text-xs text-accent-primary active:opacity-70">Editar</button>
              <button onClick={() => { remover(c.id); onMsg('Conta removida.') }} className="text-xs text-danger active:opacity-70">Excluir</button>
            </div>
          )
        ))}
        {contas.length === 0 && editando !== 'novo' && (
          <p className="text-text-secondary text-xs text-center py-4">Nenhuma conta cadastrada.</p>
        )}
      </div>
    </section>
  )
}

function ContaForm({ inicial, onSalvar, onCancelar }) {
  const [nome, setNome] = useState(inicial?.nome ?? '')
  const [tipo, setTipo] = useState(inicial?.tipo ?? 'corrente')
  const [saldo, setSaldo] = useState(inicial ? String(inicial.saldo_inicial) : '')

  return (
    <div className="bg-bg-card border border-accent-primary/40 rounded-xl p-3 space-y-3 mb-2">
      <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome da conta" maxLength={40} className={inputCls} />
      <select value={tipo} onChange={e => setTipo(e.target.value)} className={inputCls}>
        {TIPOS_CONTA.map(t => <option key={t.id} value={t.id}>{t.icon} {t.label}</option>)}
      </select>
      <input type="text" inputMode="decimal" value={saldo} onChange={e => setSaldo(e.target.value)} placeholder="Saldo inicial (R$)" className={inputCls} />
      <div className="flex gap-2">
        <button onClick={onCancelar} className={btnSecCls}>Cancelar</button>
        <button onClick={() => onSalvar({ nome, tipo, saldo_inicial: parseFloat(String(saldo).replace(',', '.')) || 0 })} className={btnPrimCls}>Salvar</button>
      </div>
    </div>
  )
}

// --- Cartões ---

function SecaoCartoes({ hook, contas, onMsg }) {
  const { cartoes, adicionar, atualizar, remover } = hook
  const [editando, setEditando] = useState(null)

  function salvar(dados, id) {
    if (!dados.nome.trim()) return onMsg('Dê um nome ao cartão.', 'erro')
    if (id) {
      atualizar(id, dados)
      onMsg('Cartão atualizado!')
    } else {
      adicionar({ id: gerarUUID(), ...dados, criado_em: new Date().toISOString() })
      onMsg('Cartão adicionado!')
    }
    setEditando(null)
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Cartões de crédito</h2>
        {editando !== 'novo' && (
          <button onClick={() => setEditando('novo')} className="text-sm text-accent-primary active:opacity-70">+ Novo</button>
        )}
      </div>

      {editando === 'novo' && (
        <CartaoForm contas={contas} onSalvar={d => salvar(d)} onCancelar={() => setEditando(null)} />
      )}

      <div className="space-y-2">
        {cartoes.map(c => (
          editando === c.id ? (
            <CartaoForm key={c.id} inicial={c} contas={contas} onSalvar={d => salvar(d, c.id)} onCancelar={() => setEditando(null)} />
          ) : (
            <div key={c.id} className="flex items-center gap-3 bg-bg-card rounded-xl border border-border px-4 py-3">
              <span className="text-xl w-8 text-center">💳</span>
              <div className="flex-1 min-w-0">
                <p className="text-text-primary text-sm font-medium truncate">{c.nome}</p>
                <p className="text-text-secondary text-xs">
                  {c.bandeira ? `${c.bandeira} · ` : ''}Limite {formatarMoeda(c.limite)}
                  {c.dia_vencimento ? ` · vence dia ${c.dia_vencimento}` : ''}
                </p>
              </div>
              {!c.sincronizado && <span className="text-xs text-text-secondary">⏳</span>}
              <button onClick={() => setEditando(c.id)} className="text-xs text-accent-primary active:opacity-70">Editar</button>
              <button onClick={() => { remover(c.id); onMsg('Cartão removido.') }} className="text-xs text-danger active:opacity-70">Excluir</button>
            </div>
          )
        ))}
        {cartoes.length === 0 && editando !== 'novo' && (
          <p className="text-text-secondary text-xs text-center py-4">Nenhum cartão cadastrado.</p>
        )}
      </div>
    </section>
  )
}

function CartaoForm({ inicial, contas, onSalvar, onCancelar }) {
  const [nome, setNome] = useState(inicial?.nome ?? '')
  const [bandeira, setBandeira] = useState(inicial?.bandeira ?? BANDEIRAS[0])
  const [limite, setLimite] = useState(inicial ? String(inicial.limite) : '')
  const [fechamento, setFechamento] = useState(inicial?.dia_fechamento ? String(inicial.dia_fechamento) : '')
  const [vencimento, setVencimento] = useState(inicial?.dia_vencimento ? String(inicial.dia_vencimento) : '')
  const [contaId, setContaId] = useState(inicial?.conta_pagamento_id ?? '')

  const dia = (v) => Math.min(Math.max(parseInt(v, 10) || 0, 0), 31)

  return (
    <div className="bg-bg-card border border-accent-primary/40 rounded-xl p-3 space-y-3 mb-2">
      <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome do cartão" maxLength={40} className={inputCls} />
      <select value={bandeira} onChange={e => setBandeira(e.target.value)} className={inputCls}>
        {BANDEIRAS.map(b => <option key={b} value={b}>{b}</option>)}
      </select>
      <input type="text" inputMode="decimal" value={limite} onChange={e => setLimite(e.target.value)} placeholder="Limite (R$)" className={inputCls} />
      <div className="flex gap-2">
        <input type="number" min="1" max="31" value={fechamento} onChange={e => setFechamento(e.target.value)} placeholder="Dia fechamento" className={inputCls} />
        <input type="number" min="1" max="31" value={vencimento} onChange={e => setVencimento(e.target.value)} placeholder="Dia vencimento" className={inputCls} />
      </div>
      <select value={contaId} onChange={e => setContaId(e.target.value)} className={inputCls}>
        <option value="">Conta de pagamento (opcional)</option>
        {contas.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
      </select>
      <div className="flex gap-2">
        <button onClick={onCancelar} className={btnSecCls}>Cancelar</button>
        <button onClick={() => onSalvar({
          nome, bandeira,
          limite: parseFloat(String(limite).replace(',', '.')) || 0,
          dia_fechamento: dia(fechamento),
          dia_vencimento: dia(vencimento),
          conta_pagamento_id: contaId,
        })} className={btnPrimCls}>Salvar</button>
      </div>
    </div>
  )
}

export default CarteiraPage
