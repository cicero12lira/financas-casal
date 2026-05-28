import { useEffect, useRef, useCallback } from 'react'
import { getLancamentos, setLancamentos, setUltimaSync, getUsuario, getConfig } from '../services/storage'
import { adicionarLancamento } from '../services/sheets'
import { sincronizarPessoalPendentes, reconciliarPessoal } from '../services/pessoal'

function useSync() {
  const sincronizando = useRef(false)

  const processarFila = useCallback(async () => {
    if (sincronizando.current || !navigator.onLine) return
    sincronizando.current = true

    // Fila do casal
    const pendentes = getLancamentos().filter(l => !l.sincronizado)
    for (const lancamento of pendentes) {
      try {
        await adicionarLancamento(lancamento)
        const todos = getLancamentos().map(l =>
          l.id === lancamento.id ? { ...l, sincronizado: true } : l
        )
        setLancamentos(todos)
      } catch {
        // mantém pendente e tenta no próximo ciclo
      }
    }

    // Controle pessoal do usuário logado: reconcilia despesas do casal e envia pendentes
    const usuario = getUsuario()
    if (usuario) {
      const config = getConfig()
      const nome = usuario === 'b'
        ? (config.nome_pessoa_b || 'Pessoa B')
        : (config.nome_pessoa_a || 'Pessoa A')
      try {
        await reconciliarPessoal({ usuario, nome })
        await sincronizarPessoalPendentes(usuario)
      } catch {
        // tenta no próximo ciclo
      }
    }

    setUltimaSync(new Date().toISOString())
    sincronizando.current = false
  }, [])

  useEffect(() => {
    processarFila()
    window.addEventListener('online', processarFila)
    return () => window.removeEventListener('online', processarFila)
  }, [processarFila])
}

export default useSync
