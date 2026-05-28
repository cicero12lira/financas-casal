import { useState, useEffect } from 'react'
import { getInstalacaoBanner, setInstalacaoBanner } from '../services/storage'

function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [mostrar, setMostrar] = useState(false)

  useEffect(() => {
    if (getInstalacaoBanner()) return

    function handler(e) {
      e.preventDefault()
      setDeferredPrompt(e)
      setMostrar(true)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  async function instalar() {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    await deferredPrompt.userChoice
    setDeferredPrompt(null)
    setMostrar(false)
    setInstalacaoBanner(true)
  }

  function dispensar() {
    setMostrar(false)
    setInstalacaoBanner(true)
  }

  return { mostrar, instalar, dispensar }
}

export default usePWAInstall
