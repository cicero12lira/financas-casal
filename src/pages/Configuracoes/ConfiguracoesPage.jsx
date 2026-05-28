import { useState } from 'react'
import useConfig from '../../hooks/useConfig'
import useLancamentos from '../../hooks/useLancamentos'
import useCategorias from '../../hooks/useCategorias'
import Toast from '../../components/ui/Toast'
import { formatarMesAno } from '../../utils/formatters'
import { getSheetsId, setSheetsId, getSheetsToken, setSheetsToken, removeSheetsToken, getPinHash, setPinHash, getUsuario, getPessoalCreds, setPessoalCreds, removePessoalCreds, getLancamentos, setLancamentos as saveLancamentos } from '../../services/storage'
import { testarConexao, testarConexaoPessoal, adicionarLancamento } from '../../services/sheets'
import { hashPin } from '../../utils/crypto'
import useUsuario from '../../hooks/useUsuario'

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
      </div>

      <SecaoPerfil config={config} atualizar={atualizar} onSalvo={() => showToast('Perfil salvo!')} />
      <SecaoOrcamento config={config} atualizar={atualizar} onSalvo={() => showToast('Orçamento salvo!')} />
      <SecaoSeguranca onSalvo={() => showToast('PIN alterado com sucesso!')} onErro={msg => showToast(msg, 'erro')} />
      <SecaoPlanilhaPessoal onSalvo={msg => showToast(msg)} onErro={msg => showToast(msg, 'erro')} />
      <SecaoCategorias onSalvo={msg => showToast(msg)} onErro={msg => showToast(msg, 'erro')} />
      <SecaoSheets onSalvo={msg => showToast(msg)} onErro={msg => showToast(msg, 'erro')} />
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
        <input value={nomeA} onChange={e => setNomeA(e.target.value)} placeholder="Nome da Pessoa A"
          className={inputCls} />
      </Campo>
      <Campo label="Pessoa B">
        <input value={nomeB} onChange={e => setNomeB(e.target.value)} placeholder="Nome da Pessoa B"
          className={inputCls} />
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
          onChange={e => setOrcamento(e.target.value)} placeholder="Ex: 5000"
          className={inputCls} />
      </Campo>
      <BotaoSalvar onClick={salvar} />
    </Secao>
  )
}

// --- Segurança / Alterar PIN ---

function SecaoSeguranca({ onSalvo, onErro }) {
  const [etapa, setEtapa] = useState('atual') // 'atual' | 'novo' | 'confirmar'
  const [pinAtual, setPinAtual] = useState('')
  const [pinNovo, setPinNovo] = useState('')
  const [pinConfirmar, setPinConfirmar] = useState('')
  const [carregando, setCarregando] = useState(false)
  const [expandido, setExpandido] = useState(false)

  function reset() {
    setEtapa('atual'); setPinAtual(''); setPinNovo(''); setPinConfirmar('')
    setExpandido(false)
  }

  const usuario = getUsuario() || 'a'

  async function validarAtual() {
    if (pinAtual.length !== 4) return onErro('Digite 4 dígitos.')
    setCarregando(true)
    const hash = await hashPin(pinAtual)
    setCarregando(false)
    if (hash !== getPinHash(usuario)) return onErro('PIN atual incorreto.')
    setEtapa('novo')
  }

  async function salvar() {
    if (pinNovo.length !== 4) return onErro('Novo PIN deve ter 4 dígitos.')
    if (pinNovo !== pinConfirmar) return onErro('PINs não coincidem.')
    setCarregando(true)
    const hash = await hashPin(pinNovo)
    setPinHash(usuario, hash)
    setCarregando(false)
    reset()
    onSalvo()
  }

  // PIN da outra pessoa
  const outro = usuario === 'a' ? 'b' : 'a'
  const outroConfigurado = !!getPinHash(outro)
  const [expOutro, setExpOutro] = useState(false)
  const [pinO1, setPinO1] = useState('')
  const [pinO2, setPinO2] = useState('')

  async function salvarOutro() {
    if (pinO1.length !== 4) return onErro('O PIN deve ter 4 dígitos.')
    if (pinO1 !== pinO2) return onErro('PINs não coincidem.')
    if (await hashPin(pinO1) === getPinHash(usuario)) return onErro('Deve ser diferente do seu PIN.')
    setPinHash(outro, await hashPin(pinO1))
    setExpOutro(false); setPinO1(''); setPinO2('')
    onSalvo('PIN da outra pessoa salvo!')
  }

  return (
    <Secao titulo="Segurança">
      {!expandido ? (
        <button onClick={() => setExpandido(true)}
          className="text-sm text-accent-primary active:opacity-70 transition-opacity">
          Alterar PIN →
        </button>
      ) : (
        <div className="space-y-3">
          {etapa === 'atual' && (
            <>
              <Campo label="PIN atual">
                <input type="password" inputMode="numeric" maxLength={4} value={pinAtual}
                  onChange={e => setPinAtual(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  placeholder="••••" className={inputCls} />
              </Campo>
              <div className="flex gap-2">
                <button onClick={reset} className={btnSecCls}>Cancelar</button>
                <button onClick={validarAtual} disabled={carregando} className={btnPrimCls}>
                  {carregando ? 'Verificando...' : 'Próximo'}
                </button>
              </div>
            </>
          )}
          {etapa === 'novo' && (
            <>
              <Campo label="Novo PIN">
                <input type="password" inputMode="numeric" maxLength={4} value={pinNovo}
                  onChange={e => setPinNovo(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  placeholder="••••" className={inputCls} />
              </Campo>
              <Campo label="Confirmar novo PIN">
                <input type="password" inputMode="numeric" maxLength={4} value={pinConfirmar}
                  onChange={e => setPinConfirmar(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  placeholder="••••" className={inputCls} />
              </Campo>
              <div className="flex gap-2">
                <button onClick={reset} className={btnSecCls}>Cancelar</button>
                <button onClick={salvar} disabled={carregando} className={btnPrimCls}>
                  {carregando ? 'Salvando...' : 'Salvar PIN'}
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* PIN da outra pessoa */}
      <div className="pt-3 border-t border-border">
        {!expOutro ? (
          <button onClick={() => setExpOutro(true)}
            className="text-sm text-accent-primary active:opacity-70 transition-opacity">
            {outroConfigurado ? 'Alterar PIN da outra pessoa →' : 'Definir PIN da outra pessoa →'}
          </button>
        ) : (
          <div className="space-y-3">
            <Campo label="PIN da outra pessoa">
              <input type="password" inputMode="numeric" maxLength={4} value={pinO1}
                onChange={e => setPinO1(e.target.value.replace(/\D/g, '').slice(0, 4))}
                placeholder="••••" className={inputCls} />
            </Campo>
            <Campo label="Confirmar PIN">
              <input type="password" inputMode="numeric" maxLength={4} value={pinO2}
                onChange={e => setPinO2(e.target.value.replace(/\D/g, '').slice(0, 4))}
                placeholder="••••" className={inputCls} />
            </Campo>
            <div className="flex gap-2">
              <button onClick={() => { setExpOutro(false); setPinO1(''); setPinO2('') }} className={btnSecCls}>Cancelar</button>
              <button onClick={salvarOutro} className={btnPrimCls}>Salvar</button>
            </div>
          </div>
        )}
      </div>
    </Secao>
  )
}

// --- Planilha pessoal (separação real, por pessoa) ---

function SecaoPlanilhaPessoal({ onSalvo, onErro }) {
  const usuario = getUsuario() || 'a'
  const creds = getPessoalCreds(usuario)
  const [sheetsId, setLocalId] = useState(creds?.sheetsId ?? '')
  const [credText, setCredText] = useState('')
  const [status, setStatus] = useState(null)
  const [statusMsg, setStatusMsg] = useState('')
  const [testando, setTestando] = useState(false)
  const temToken = !!creds?.token

  function salvarId() {
    const atual = getPessoalCreds(usuario) || {}
    setPessoalCreds(usuario, { ...atual, sheetsId: sheetsId.trim() })
    onSalvo('ID da planilha pessoal salvo!')
  }

  function salvarCred() {
    try {
      const json = JSON.parse(credText)
      if (!json.client_email || !json.private_key) throw new Error()
      const atual = getPessoalCreds(usuario) || {}
      setPessoalCreds(usuario, { ...atual, token: json })
      setCredText('')
      onSalvo('Credenciais pessoais salvas!')
    } catch {
      onErro('JSON inválido. Cole o conteúdo completo da Service Account.')
    }
  }

  function removerCred() {
    const atual = getPessoalCreds(usuario) || {}
    const { token, ...resto } = atual
    setPessoalCreds(usuario, resto)
    setStatus(null)
    onSalvo('Credenciais pessoais removidas.')
  }

  async function testar() {
    setTestando(true)
    const { ok, erro } = await testarConexaoPessoal(usuario)
    setStatus(ok ? 'ok' : 'erro')
    setStatusMsg(ok ? 'Conexão estabelecida!' : (erro ?? 'Erro desconhecido.'))
    setTestando(false)
  }

  return (
    <Secao titulo="Planilha pessoal">
      <p className="text-xs text-text-secondary -mt-1">
        Seus dados pessoais ficam numa planilha sua, separada do seu parceiro(a).
      </p>
      <Campo label="ID da sua planilha pessoal">
        <input value={sheetsId} onChange={e => setLocalId(e.target.value)}
          placeholder="Cole o ID aqui" className={inputCls} />
      </Campo>
      <BotaoSalvar label="Salvar ID" onClick={salvarId} />

      <div className="mt-4">
        <p className="text-xs text-text-secondary mb-2">
          Credenciais: {' '}
          {temToken ? <span className="text-accent-secondary">✓ Configuradas</span> : <span className="text-danger">✕ Não configuradas</span>}
        </p>
        {!temToken ? (
          <>
            <textarea value={credText} onChange={e => setCredText(e.target.value)}
              placeholder="Cole o JSON da Service Account pessoal..." rows={4}
              className={`${inputCls} font-mono text-xs resize-none`} />
            <BotaoSalvar label="Salvar credenciais" onClick={salvarCred} />
          </>
        ) : (
          <button onClick={removerCred} className="text-xs text-danger active:opacity-70 transition-opacity">
            Remover credenciais
          </button>
        )}
      </div>

      {creds?.sheetsId && temToken && (
        <div className="mt-3 flex items-center gap-3">
          <button onClick={testar} disabled={testando} className={`${btnPrimCls} flex-1`}>
            {testando ? 'Testando...' : 'Testar conexão'}
          </button>
          {status && (
            <span className={`text-xs ${status === 'ok' ? 'text-accent-secondary' : 'text-danger'}`}>
              {status === 'ok' ? '✓' : '✕'} {statusMsg}
            </span>
          )}
        </div>
      )}
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

      {/* Adicionar nova */}
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

// --- Google Sheets ---

function SecaoSheets({ onSalvo, onErro }) {
  const [sheetsId, setSheetsIdLocal] = useState(() => getSheetsId() ?? '')
  const [credenciais, setCredenciais] = useState('')
  const [status, setStatus] = useState(null) // null | 'ok' | 'erro'
  const [statusMsg, setStatusMsg] = useState('')
  const [testando, setTestando] = useState(false)
  const temToken = !!getSheetsToken()

  function salvarId() {
    setSheetsId(sheetsId.trim())
    onSalvo('ID da planilha salvo!')
  }

  function salvarCredenciais() {
    try {
      const json = JSON.parse(credenciais)
      if (!json.client_email || !json.private_key) throw new Error()
      setSheetsToken(json)
      setCredenciais('')
      onSalvo('Credenciais salvas!')
    } catch {
      onErro('JSON inválido. Cole o conteúdo completo do arquivo da Service Account.')
    }
  }

  function removerCredenciais() {
    removeSheetsToken()
    setStatus(null)
    onSalvo('Credenciais removidas.')
  }

  async function testar() {
    setTestando(true)
    const { ok, erro } = await testarConexao()
    setStatus(ok ? 'ok' : 'erro')
    setStatusMsg(ok ? 'Conexão estabelecida com sucesso!' : (erro ?? 'Erro desconhecido.'))
    setTestando(false)
  }

  return (
    <Secao titulo="Google Sheets">
      <Campo label="ID da planilha">
        <input value={sheetsId} onChange={e => setSheetsIdLocal(e.target.value)}
          placeholder="Cole o ID da planilha aqui"
          className={inputCls} />
      </Campo>
      <BotaoSalvar label="Salvar ID" onClick={salvarId} />

      <div className="mt-4">
        <p className="text-xs text-text-secondary mb-2">
          Credenciais da Service Account: {' '}
          {temToken ? <span className="text-accent-secondary">✓ Configuradas</span> : <span className="text-danger">✕ Não configuradas</span>}
        </p>
        {!temToken ? (
          <>
            <textarea
              value={credenciais}
              onChange={e => setCredenciais(e.target.value)}
              placeholder='Cole o JSON da Service Account aqui...'
              rows={4}
              className={`${inputCls} font-mono text-xs resize-none`}
            />
            <BotaoSalvar label="Salvar credenciais" onClick={salvarCredenciais} />
          </>
        ) : (
          <button onClick={removerCredenciais}
            className="text-xs text-danger active:opacity-70 transition-opacity">
            Remover credenciais
          </button>
        )}
      </div>

      {getSheetsId() && temToken && (
        <div className="mt-3 flex items-center gap-3">
          <button onClick={testar} disabled={testando}
            className={`${btnPrimCls} flex-1`}>
            {testando ? 'Testando...' : 'Testar conexão'}
          </button>
          {status && (
            <span className={`text-xs ${status === 'ok' ? 'text-accent-secondary' : 'text-danger'}`}>
              {status === 'ok' ? '✓' : '✕'} {statusMsg}
            </span>
          )}
        </div>
      )}
    </Secao>
  )
}

// --- Dados ---

function SecaoDados({ lancamentos, mes, ano, onSalvo }) {
  const [sincronizando, setSincronizando] = useState(false)

  async function sincronizarAgora() {
    setSincronizando(true)
    const pendentes = getLancamentos().filter(l => !l.sincronizado)
    let ok = 0
    for (const l of pendentes) {
      try {
        await adicionarLancamento(l)
        const todos = getLancamentos().map(x => x.id === l.id ? { ...x, sincronizado: true } : x)
        saveLancamentos(todos)
        ok++
      } catch {}
    }
    setSincronizando(false)
    onSalvo(ok > 0 ? `${ok} lançamento(s) sincronizado(s)!` : 'Nada para sincronizar.')
  }

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
      <div className="flex gap-2">
        <button onClick={exportarCSV} className={`${btnSecCls} flex-1 text-sm`}>
          📥 Exportar CSV
        </button>
        <button onClick={sincronizarAgora} disabled={sincronizando} className={`${btnPrimCls} flex-1 text-sm`}>
          {sincronizando ? 'Sincronizando...' : '🔄 Sincronizar'}
        </button>
      </div>
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
