import { useEffect, useRef, useCallback } from 'react'
import { getLancamentos, setLancamentos, setUltimaSync } from '../services/storage'
import { adicionarLancamento } from '../services/sheets'

function useSync() {
  const sincronizando = useRef(false)

  const processarFila = useCallback(async () => {
    if (sincronizando.current || !navigator.onLine) return
    sincronizando.current = true

    const pendentes = getLancamentos().filter(l => !l.sincronizado)
    if (pendentes.length === 0) {
      sincronizando.current = false
      return
    }

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

    setUltimaSync(new Date().toISOString())
    sincronizando.current = false
  }, [])

  useEffect(() => {
    // Tenta ao montar (pode já estar online)
    processarFila()

    window.addEventListener('online', processarFila)
    return () => window.removeEventListener('online', processarFila)
  }, [processarFila])
}

export default useSync
