import { useState, useRef, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useConfig from '../../hooks/useConfig'
import useLancamentos from '../../hooks/useLancamentos'
import usePessoal from '../../hooks/usePessoal'
import useCategorias from '../../hooks/useCategorias'
import useContas from '../../hooks/useContas'
import useCartoes from '../../hooks/useCartoes'
import Toast from '../../components/ui/Toast'
import { gerarUUID } from '../../utils/uuid'
import { TIPOS_LANCAMENTO, ESCOPOS, FREQUENCIAS } from '../../constants/financas'

function NovoLancamentoPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [escopo, setEscopo] = useState(searchParams.get('escopo') === 'pessoal' ? 'pessoal' : 'casal')
  const ehPessoal = escopo === 'pessoal'

  const { config } = useConfig()
  const { categorias } = useCategorias()
  const { contas } = useContas(escopo)
  const { cartoes } = useCartoes(escopo)
  const now = new Date()
  const lancCasal = useLancamentos(now.getMonth() + 1, now.getFullYear())
  const lancPessoal = usePessoal(now.getMonth() + 1, now.getFullYear())

  const [rawValor, setRawValor] = useState('')
  const [tipo, setTipo] = useState('gasto')
  const [categoria, setCategoria] = useState(null)
  const [quemPagou, setQuemPagou] = useState('')
  const [contaId, setContaId] = useState('')
  const [contaDestinoId, setContaDestinoId] = useState('')
  const [cartaoId, setCartaoId] = useState('')
  const [recorrente, setRecorrente] = useState(false)
  const [frequencia, setFrequencia] = useState('mensal')
  const [vencimento, setVencimento] = useState('')
  const [efetivada, setEfetivada] = useState(true)
  const [descricao, setDescricao] = useState('')
  const [data, setData] = useState(now.toISOString().split('T')[0])
  const [toast, setToast] = useState(null)
  const [salvando, setSalvando] = useState(false)
  const inputRef = useRef(null)

  const nomeA = config.nome_pessoa_a || 'Pessoa A'
  const nomeB = config.nome_pessoa_b || 'Pessoa B'

  useEffect(() => { inputRef.current?.focus() }, [])

  function handleValorInput(e) {
    const v = e.target.value
    if (/^\d*([.,]\d{0,2})?$/.test(v)) setRawValor(v)
  }

  const valorNum = parseFloat(rawValor.replace(',', '.')) || 0
  const ehTransferencia = tipo === 'transferencia'
  const ehCartao = tipo === 'cartao'
  const usaCategoria = !ehTransferencia
  const mostraQuemPagou = !ehPessoal && !ehTransferencia

  const podeSalvar =
    valorNum > 0 &&
    (!usaCategoria || categoria) &&
    (!ehCartao || cartaoId) &&
    (!ehTransferencia || (contaId && contaDestinoId && contaId !== contaDestinoId)) &&
    (!mostraQuemPagou || quemPagou)

  async function salvar() {
    if (!podeSalvar || salvando) return
    setSalvando(true)

    const comum = {
      id:               gerarUUID(),
      data,
      valor:            valorNum,
      tipo,
      categoria:        usaCategoria ? categoria : '',
      descricao:        descricao.trim(),
      criado_em:        new Date().toISOString(),
      conta_id:         ehCartao ? '' : contaId,
      conta_destino_id: ehTransferencia ? contaDestinoId : '',
      cartao_id:        ehCartao ? cartaoId : '',
      recorrente,
      frequencia:       recorrente ? frequencia : '',
      vencimento,
      efetivada,
    }

    if (ehPessoal) {
      lancPessoal.adicionar({ ...comum, origem: 'manual', ref_casal_id: '' })
    } else {
      lancCasal.adicionar({ ...comum, quem_pagou: quemPagou })
    }

    setToast({ mensagem: 'Lançamento salvo!', tipo: 'sucesso' })
    setSalvando(false)
    setTimeout(() => navigate('/'), 1000)
  }

  return (
    <div className="min-h-full bg-bg-primary">
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <button onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-text-secondary text-sm active:text-text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Voltar
        </button>
      </div>

      <div className="px-4 pb-8 space-y-6">
        {/* Escopo */}
        <Section titulo="Escopo">
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
        </Section>

        {/* Valor */}
        <div className="text-center pt-1">
          <p className="text-text-secondary text-xs mb-2">Valor</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-text-secondary text-2xl font-light">R$</span>
            <input ref={inputRef} type="text" inputMode="decimal" value={rawValor}
              onChange={handleValorInput} placeholder="0,00"
              className="text-4xl font-bold text-text-primary bg-transparent outline-none w-40 text-center placeholder:text-border" />
          </div>
        </div>

        {/* Tipo */}
        <Section titulo="Tipo">
          <div className="grid grid-cols-2 gap-2">
            {TIPOS_LANCAMENTO.map(t => (
              <button key={t.id} onClick={() => setTipo(t.id)}
                className={`py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                  tipo === t.id
                    ? 'bg-accent-primary/20 border-accent-primary text-accent-primary'
                    : 'bg-bg-card border-border text-text-secondary'
                }`}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>
        </Section>

        {/* Cartão (despesa de cartão) */}
        {ehCartao && (
          <Section titulo="Cartão">
            {cartoes.length === 0 ? (
              <AvisoVazio texto="Nenhum cartão cadastrado." />
            ) : (
              <select value={cartaoId} onChange={e => setCartaoId(e.target.value)} className={selectCls}>
                <option value="">Selecione o cartão</option>
                {cartoes.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
              </select>
            )}
          </Section>
        )}

        {/* Contas */}
        {ehTransferencia ? (
          <Section titulo="Transferência entre contas">
            <div className="space-y-2">
              <select value={contaId} onChange={e => setContaId(e.target.value)} className={selectCls}>
                <option value="">De qual conta</option>
                {contas.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
              </select>
              <select value={contaDestinoId} onChange={e => setContaDestinoId(e.target.value)} className={selectCls}>
                <option value="">Para qual conta</option>
                {contas.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
              </select>
            </div>
            {contas.length < 2 && <AvisoVazio texto="Cadastre ao menos duas contas." />}
          </Section>
        ) : !ehCartao && (
          <Section titulo="Conta">
            {contas.length === 0 ? (
              <AvisoVazio texto="Nenhuma conta cadastrada (opcional)." />
            ) : (
              <select value={contaId} onChange={e => setContaId(e.target.value)} className={selectCls}>
                <option value="">Sem conta</option>
                {contas.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
              </select>
            )}
          </Section>
        )}

        {/* Categoria */}
        {usaCategoria && (
          <Section titulo="Categoria">
            <div className="grid grid-cols-4 gap-2">
              {categorias.map(cat => (
                <button key={cat.id} onClick={() => setCategoria(cat.id)}
                  className={`flex flex-col items-center gap-1 py-3 rounded-xl border text-xs transition-colors ${
                    categoria === cat.id
                      ? 'bg-accent-primary/20 border-accent-primary text-accent-primary'
                      : 'bg-bg-card border-border text-text-secondary'
                  }`}>
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="leading-tight text-center">{cat.label}</span>
                </button>
              ))}
            </div>
          </Section>
        )}

        {/* Quem pagou */}
        {mostraQuemPagou && (
          <Section titulo="Quem pagou">
            <div className="flex gap-2">
              {[nomeA, nomeB].map(nome => (
                <button key={nome} onClick={() => setQuemPagou(nome)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                    quemPagou === nome
                      ? 'bg-accent-primary/20 border-accent-primary text-accent-primary'
                      : 'bg-bg-card border-border text-text-secondary'
                  }`}>
                  {nome}
                </button>
              ))}
            </div>
          </Section>
        )}

        {/* Recorrência / vencimento / efetivada */}
        <Section titulo="Programação">
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-bg-card border border-border rounded-xl px-4 py-3">
              <span className="text-sm text-text-primary">Recorrente</span>
              <Toggle ativo={recorrente} onToggle={() => setRecorrente(v => !v)} />
            </div>
            {recorrente && (
              <select value={frequencia} onChange={e => setFrequencia(e.target.value)} className={selectCls}>
                {FREQUENCIAS.map(f => <option key={f.id} value={f.id}>{f.label}</option>)}
              </select>
            )}
            <div className="flex items-center gap-3 bg-bg-card border border-border rounded-xl px-4 py-3">
              <span className="text-sm text-text-secondary flex-shrink-0">Vencimento</span>
              <input type="date" value={vencimento} onChange={e => setVencimento(e.target.value)}
                className="flex-1 bg-transparent text-sm text-text-primary outline-none text-right" />
            </div>
            <div className="flex items-center justify-between bg-bg-card border border-border rounded-xl px-4 py-3">
              <span className="text-sm text-text-primary">Já efetivada</span>
              <Toggle ativo={efetivada} onToggle={() => setEfetivada(v => !v)} />
            </div>
          </div>
        </Section>

        {/* Detalhes */}
        <Section titulo="Detalhes (opcionais)">
          <div className="space-y-3">
            <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)}
              placeholder="Ex: Almoço no shopping" maxLength={120} className={selectCls} />
            <div className="flex items-center gap-3 bg-bg-card border border-border rounded-xl px-4 py-3">
              <span className="text-sm text-text-secondary flex-shrink-0">Data</span>
              <input type="date" value={data} onChange={e => setData(e.target.value)}
                className="flex-1 bg-transparent text-sm text-text-primary outline-none text-right" />
            </div>
          </div>
        </Section>

        <button onClick={salvar} disabled={!podeSalvar || salvando}
          className="w-full py-3.5 rounded-2xl bg-accent-primary text-white text-base font-semibold disabled:opacity-40 active:scale-95 transition-all">
          {salvando ? 'Salvando...' : 'Salvar'}
        </button>
      </div>

      {toast && <Toast mensagem={toast.mensagem} tipo={toast.tipo} onClose={() => setToast(null)} />}
    </div>
  )
}

const selectCls = 'w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:border-accent-primary transition-colors'

function Section({ titulo, children }) {
  return (
    <div>
      <p className="text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">{titulo}</p>
      {children}
    </div>
  )
}

function AvisoVazio({ texto }) {
  return <p className="text-text-secondary text-xs py-1">{texto}</p>
}

function Toggle({ ativo, onToggle }) {
  return (
    <button onClick={onToggle}
      className={`w-11 h-6 rounded-full transition-colors relative ${ativo ? 'bg-accent-primary' : 'bg-border'}`}>
      <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${ativo ? 'left-5' : 'left-0.5'}`} />
    </button>
  )
}

export default NovoLancamentoPage
