import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'

const svg = readFileSync('public/icons/icon.svg', 'utf8')

function gerarPNG(tamanho, saida) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: tamanho },
    font: { loadSystemFonts: true },
  })
  const png = resvg.render()
  writeFileSync(saida, png.asPng())
  console.log(`✓ ${saida} (${tamanho}x${tamanho})`)
}

mkdirSync('public/icons', { recursive: true })
gerarPNG(192, 'public/icons/icon-192x192.png')
gerarPNG(512, 'public/icons/icon-512x512.png')
console.log('Ícones gerados com sucesso!')
