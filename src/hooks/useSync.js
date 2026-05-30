import { useEffect, useRef, useCallback } from 'react'
import { estaLogado, setUltimaSync } from '../services/storage'
import { reconciliarPessoal } from '../services/pessoal'

// Dispara a reconciliação do controle pessoal (espelho das despesas do casal
// pagas pelo usuário) ao abrir o app e ao voltar online. O backend faz o trabalho.
function useSync() {
  const rodando = useRef(false)

  const reconciliar = useCallback(async () => {
    if (rodando.current || !navigator.onLine || !estaLogado()) return
    rodando.current = true
    try {
      await reconciliarPessoal()
      setUltimaSync(new Date().toISOString())
    } catch {
      // tenta no próximo ciclo
    } finally {
      rodando.current = false
    }
  }, [])

  useEffect(() => {
    reconciliar()
    window.addEventListener('online', reconciliar)
    return () => window.removeEventListener('online', reconciliar)
  }, [reconciliar])
}

export default useSync
