import { useState, useRef, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useConfig from '../../hooks/useConfig'
import useLancamentos from '../../hooks/useLancamentos'
import usePessoal from '../../hooks/usePessoal'
import useCategorias from '../../hooks/useCategorias'
import Toast from '../../components/ui/Toast'
import { gerarUUID } from '../../utils/uuid'
import { adicionarLancamento, adicionarPessoal } from '../../services/sheets'
import { getUsuario } from '../../services/storage'

function NovoLancamentoPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const escopo = searchParams.get('escopo') === 'pessoal' ? 'pessoal' : 'casal'
  const ehPessoal = escopo === 'pessoal'

  const { config } = useConfig()
  const { categorias } = useCategorias()
  const now = new Date()
  const lancCasal = useLancamentos(now.getMonth() + 1, now.getFullYear())
  const lancPessoal = usePessoal(now.getMonth() + 1, now.getFullYear())

  const [rawValor, setRawValor] = useState('')
  const [tipo, setTipo] = useState('gasto')
  const [categoria, setCategoria] = useState(null)
  const [quemPagou, setQuemPagou] = useState('')
  const [descricao, setDescricao] = useState('')
  const [data, setData] = useState(now.toISOString().split('T')[0])
  const [toast, setToast] = useState(null)
  const [salvando, setSalvando] = useState(false)
  const inputRef = useRef(null)

  const nomeA = config.nome_pessoa_a || 'Pessoa A'
  const nomeB = config.nome_pessoa_b || 'Pessoa B'

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleValorInput(e) {
    const v = e.target.value
    if (/^\d*([.,]\d{0,2})?$/.test(v)) setRawValor(v)
  }

  const valorNum = parseFloat(rawValor.replace(',', '.')) || 0
  const podeSalvar = valorNum > 0 && categoria && (ehPessoal || quemPagou)

  async function salvar() {
    if (!podeSalvar || salvando) return
    setSalvando(true)

    if (ehPessoal) {
      const usuario = getUsuario() || 'a'
      const lancamento = {
        id:           gerarUUID(),
        data,
        valor:        valorNum,
        tipo,
        categoria,
        descricao:    descricao.trim(),
        criado_em:    new Date().toISOString(),
        origem:       'manual',
        ref_casal_id: '',
        sincronizado: false,
      }
      lancPessoal.adicionarLocal(lancamento)
      if (navigator.onLine) {
        adicionarPessoal(usuario, lancamento)
          .then(() => lancPessoal.atualizarLocal(lancamento.id, { sincronizado: true }))
          .catch(() => {})
      }
      setToast({ mensagem: 'Lançamento pessoal salvo!', tipo: 'sucesso' })
      setSalvando(false)
      setTimeout(() => navigate('/pessoal'), 1200)
      return
    }

    const lancamento = {
      id:          gerarUUID(),
      data,
      valor:       valorNum,
      tipo,
      categoria,
      quem_pagou:  quemPagou,
      descricao:   descricao.trim(),
      criado_em:   new Date().toISOString(),
      sincronizado: false,
    }
    lancCasal.adicionarLocal(lancamento)
    if (navigator.onLine) {
      adicionarLancamento(lancamento)
        .then(() => lancCasal.atualizarLocal(lancamento.id, { sincronizado: true }))
        .catch(() => {})
    }
    setToast({ mensagem: 'Lançamento salvo!', tipo: 'sucesso' })
    setSalvando(false)
    setTimeout(() => navigate('/'), 1200)
  }

  return (
    <div className="min-h-full bg-bg-primary">
      {/* Topo */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-text-secondary text-sm active:text-text-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Voltar
        </button>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
          ehPessoal ? 'bg-accent-secondary/20 text-accent-secondary' : 'bg-accent-primary/20 text-accent-primary'
        }`}>
          {ehPessoal ? 'Pessoal' : 'Casal'}
        </span>
      </div>

      <div className="px-4 pb-8 space-y-6">
        {/* Valor */}
        <div className="text-center pt-4">
          <p className="text-text-secondary text-xs mb-2">Valor</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-text-secondary text-2xl font-light">R$</span>
            <input
              ref={inputRef}
              type="text"
              inputMode="decimal"
              value={rawValor}
              onChange={handleValorInput}
              placeholder="0,00"
              className="text-4xl font-bold text-text-primary bg-transparent outline-none w-40 text-center placeholder:text-border"
            />
          </div>
        </div>

        {/* Tipo */}
        <Section titulo="Tipo">
          <div className="flex gap-2">
            {['gasto', 'receita'].map(t => (
              <button
                key={t}
                onClick={() => setTipo(t)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                  tipo === t
                    ? t === 'gasto'
                      ? 'bg-danger/20 border-danger text-danger'
                      : 'bg-accent-secondary/20 border-accent-secondary text-accent-secondary'
                    : 'bg-bg-card border-border text-text-secondary'
                }`}
              >
                {t === 'gasto' ? '💸 Gasto' : '💰 Receita'}
              </button>
            ))}
          </div>
        </Section>

        {/* Categoria */}
        <Section titulo="Categoria">
          <div className="grid grid-cols-4 gap-2">
            {categorias.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategoria(cat.id)}
                className={`flex flex-col items-center gap-1 py-3 rounded-xl border text-xs transition-colors ${
                  categoria === cat.id
                    ? 'bg-accent-primary/20 border-accent-primary text-accent-primary'
                    : 'bg-bg-card border-border text-text-secondary'
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="leading-tight text-center">{cat.label}</span>
              </button>
            ))}
          </div>
        </Section>

        {/* Quem pagou — apenas no escopo casal */}
        {!ehPessoal && (
          <Section titulo="Quem pagou">
            <div className="flex gap-2">
              {[nomeA, nomeB].map(nome => (
                <button
                  key={nome}
                  onClick={() => setQuemPagou(nome)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                    quemPagou === nome
                      ? 'bg-accent-primary/20 border-accent-primary text-accent-primary'
                      : 'bg-bg-card border-border text-text-secondary'
                  }`}
                >
                  {nome}
                </button>
              ))}
            </div>
          </Section>
        )}

        {/* Detalhes */}
        <Section titulo="Detalhes (opcionais)">
          <div className="space-y-3">
            <input
              type="text"
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              placeholder="Ex: Almoço no shopping"
              maxLength={120}
              className="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:border-accent-primary transition-colors"
            />
            <div className="flex items-center gap-3 bg-bg-card border border-border rounded-xl px-4 py-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="text-text-secondary flex-shrink-0">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <input
                type="date"
                value={data}
                onChange={e => setData(e.target.value)}
                className="flex-1 bg-transparent text-sm text-text-primary outline-none"
              />
            </div>
          </div>
        </Section>

        {/* Salvar */}
        <button
          onClick={salvar}
          disabled={!podeSalvar || salvando}
          className="w-full py-3.5 rounded-2xl bg-accent-primary text-white text-base font-semibold disabled:opacity-40 active:scale-95 transition-all"
        >
          {salvando ? 'Salvando...' : 'Salvar'}
        </button>
      </div>

      {toast && (
        <Toast
          mensagem={toast.mensagem}
          tipo={toast.tipo}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}

function Section({ titulo, children }) {
  return (
    <div>
      <p className="text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">{titulo}</p>
      {children}
    </div>
  )
}

export default NovoLancamentoPage
