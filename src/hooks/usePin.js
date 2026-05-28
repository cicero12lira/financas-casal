import { useState, useEffect } from 'react'
import { getPinHash, setPinHash } from '../services/storage'
import { hashPin } from '../utils/crypto'

const MAX_TENTATIVAS = 3
const BLOQUEIO_MS = 30_000

function usePin() {
  const pinExiste = !!getPinHash()
  const [modo, setModo] = useState(pinExiste ? 'validar' : 'criar')
  const [digitos, setDigitos] = useState('')
  const [pinTemp, setPinTemp] = useState('')
  const [tentativas, setTentativas] = useState(0)
  const [bloqueadoAte, setBloqueadoAte] = useState(null) // timestamp ms
  const [erro, setErro] = useState(null)
  const [autenticado, setAutenticado] = useState(false)
  const [segundosRestantes, setSegundosRestantes] = useState(0)

  useEffect(() => {
    if (!bloqueadoAte) return
    const id = setInterval(() => {
      const restante = Math.ceil((bloqueadoAte - Date.now()) / 1000)
      if (restante <= 0) {
        setBloqueadoAte(null)
        setErro(null)
        setSegundosRestantes(0)
      } else {
        setSegundosRestantes(restante)
      }
    }, 200)
    return () => clearInterval(id)
  }, [bloqueadoAte])

  async function processarPin(pin) {
    if (modo === 'criar') {
      setPinTemp(pin)
      setModo('confirmar')
      setDigitos('')
      return
    }

    if (modo === 'confirmar') {
      if (pin === pinTemp) {
        const hash = await hashPin(pin)
        setPinHash(hash)
        sessionStorage.setItem('fc_session', 'true')
        setAutenticado(true)
      } else {
        navigator.vibrate?.([100, 50, 100])
        setErro('PINs não coincidem. Tente novamente.')
        setPinTemp('')
        setModo('criar')
        setDigitos('')
      }
      return
    }

    // modo === 'validar'
    const hash = await hashPin(pin)
    if (hash === getPinHash()) {
      sessionStorage.setItem('fc_session', 'true')
      setTentativas(0)
      setAutenticado(true)
      return
    }

    navigator.vibrate?.([100, 50, 100])
    const novas = tentativas + 1
    if (novas >= MAX_TENTATIVAS) {
      setBloqueadoAte(Date.now() + BLOQUEIO_MS)
      setTentativas(0)
      setErro('Muitas tentativas incorretas.')
    } else {
      setTentativas(novas)
      setErro(`PIN incorreto. ${MAX_TENTATIVAS - novas} tentativa(s) restante(s).`)
    }
    setDigitos('')
  }

  function adicionarDigito(d) {
    if (bloqueadoAte && Date.now() < bloqueadoAte) return
    if (digitos.length >= 4) return
    setErro(null)
    const novos = digitos + d
    setDigitos(novos)
    if (novos.length === 4) processarPin(novos)
  }

  function removerDigito() {
    setDigitos(d => d.slice(0, -1))
  }

  const bloqueado = !!(bloqueadoAte && Date.now() < bloqueadoAte)

  return { modo, digitos, erro, bloqueado, segundosRestantes, autenticado, adicionarDigito, removerDigito }
}

export default usePin
