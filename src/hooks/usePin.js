import { useState, useEffect } from 'react'
import { getPinHash, setPinHash, setUsuario, temAlgumPin } from '../services/storage'
import { hashPin } from '../utils/crypto'

const MAX_TENTATIVAS = 3
const BLOQUEIO_MS = 30_000

function usePin() {
  // Setup: se ainda não há nenhum PIN, cria os dois (A e B). Caso contrário, valida.
  const [modo, setModo] = useState(temAlgumPin() ? 'validar' : 'criar_a')
  const [digitos, setDigitos] = useState('')
  const [pinTemp, setPinTemp] = useState('')
  const [tentativas, setTentativas] = useState(0)
  const [bloqueadoAte, setBloqueadoAte] = useState(null)
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

  function autenticar(pessoa) {
    setUsuario(pessoa)
    sessionStorage.setItem('fc_session', 'true')
    setAutenticado(true)
  }

  async function processarPin(pin) {
    // Fluxo de criação: A (digita → confirma) → B (digita → confirma)
    if (modo === 'criar_a') {
      setPinTemp(pin); setModo('confirmar_a'); setDigitos(''); return
    }
    if (modo === 'confirmar_a') {
      if (pin === pinTemp) {
        await setPinHash('a', await hashPin(pin))
        setPinTemp(''); setModo('criar_b'); setDigitos('')
      } else {
        navigator.vibrate?.([100, 50, 100])
        setErro('PINs não coincidem. Tente novamente.')
        setPinTemp(''); setModo('criar_a'); setDigitos('')
      }
      return
    }
    if (modo === 'criar_b') {
      const hashA = getPinHash('a')
      if (await hashPin(pin) === hashA) {
        navigator.vibrate?.([100, 50, 100])
        setErro('O PIN da segunda pessoa deve ser diferente.')
        setDigitos(''); return
      }
      setPinTemp(pin); setModo('confirmar_b'); setDigitos(''); return
    }
    if (modo === 'confirmar_b') {
      if (pin === pinTemp) {
        await setPinHash('b', await hashPin(pin))
        autenticar('a') // quem está configurando entra como Pessoa A
      } else {
        navigator.vibrate?.([100, 50, 100])
        setErro('PINs não coincidem. Tente novamente.')
        setPinTemp(''); setModo('criar_b'); setDigitos('')
      }
      return
    }

    // modo === 'validar' — o PIN digitado identifica a pessoa
    const hash = await hashPin(pin)
    if (hash === getPinHash('a')) return autenticar('a')
    if (hash === getPinHash('b')) return autenticar('b')

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
