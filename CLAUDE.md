# CLAUDE.md — FinançasCasal

Guia de desenvolvimento para o Claude Code. Leia este arquivo antes de qualquer tarefa.

---

## Visão Geral do Projeto

PWA de controle financeiro para casais. React + Vite + Tailwind. Dados no Google Sheets. Sem backend próprio. Hospedagem no GitHub Pages.

Consulte `SPEC.md` para fluxos detalhados, estrutura de dados e requisitos de produto.

---

## Estrutura de Pastas

```
financas-casal/
├── public/
│   ├── icons/              # Ícones PWA (192x192, 512x512)
│   └── manifest.json       # Manifest PWA
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── ui/             # Primitivos: Button, Input, Card, Toast, Modal
│   │   └── layout/         # BottomNav, Header, FAB
│   ├── pages/              # Uma pasta por tela
│   │   ├── Pin/
│   │   ├── Home/
│   │   ├── NovoLancamento/
│   │   ├── Historico/
│   │   ├── Dashboard/
│   │   └── Configuracoes/
│   ├── hooks/              # Custom hooks
│   │   ├── usePin.js
│   │   ├── useLancamentos.js
│   │   ├── useSync.js
│   │   └── useConfig.js
│   ├── services/
│   │   ├── sheets.js       # Toda comunicação com Google Sheets API
│   │   └── storage.js      # Abstração do localStorage
│   ├── utils/
│   │   ├── crypto.js       # Hash SHA-256 do PIN
│   │   ├── formatters.js   # Moeda, data, etc.
│   │   └── uuid.js         # Geração de IDs únicos
│   ├── constants/
│   │   └── categories.js   # Categorias padrão com ícones
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── SPEC.md
├── CLAUDE.md
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Convenções de Código

### Geral
- Português para nomes de variáveis de domínio (`lancamento`, `categoria`, `quemPagou`)
- Inglês para nomes de componentes React, hooks e utilitários (`useLancamentos`, `formatCurrency`)
- Sem comentários óbvios; comentar apenas lógica não trivial
- `async/await` sempre, nunca `.then()` encadeado

### Componentes React
- Functional components com hooks, sem class components
- Um componente por arquivo
- Props desestruturadas na assinatura da função
- Exportação default no final do arquivo

```jsx
// ✅ Correto
function CardSaldo({ valor, variacao }) {
  return (...)
}

export default CardSaldo;
```

### Hooks customizados
- Prefixo `use` obrigatório
- Retornam objeto nomeado, não array (exceto quando faz sentido semântico)

```js
// ✅ Correto
function useLancamentos() {
  return { lancamentos, adicionar, remover, sincronizar, carregando, erro }
}
```

### Estilização (Tailwind)
- Mobile-first obrigatório
- Sem CSS customizado exceto em `index.css` para variáveis globais e animações
- Classes longas: extrair para variável `const classes = "..."` acima do return
- Cores do tema definidas em `tailwind.config.js`, não hardcoded

### Tema Visual
- Background principal: `#0a0d1a` (dark, consistente com outros apps do usuário)
- Accent primário: `#6c63ff` (roxo)
- Accent secundário: `#00d4aa` (verde-água para valores positivos)
- Danger: `#ff4757` (vermelho para gastos/erros)
- Texto principal: `#e8eaf6`
- Texto secundário: `#8892b0`
- Cards: `#111827` com border `#1e2a45`

---

## localStorage — Estrutura e Chaves

```js
// Autenticação
'fc_pin_hash'           // string: SHA-256 do PIN

// Dados locais
'fc_lancamentos'        // JSON: array de lançamentos (incluindo não sincronizados)
'fc_config'             // JSON: configurações do casal

// Google Sheets
'fc_sheets_id'          // string: ID da planilha
'fc_sheets_token'       // JSON: credenciais da Service Account

// Estado
'fc_ultima_sync'        // string: ISO timestamp da última sincronização
'fc_instalacao_banner'  // boolean: se já mostrou banner de instalação
```

Toda leitura/escrita de localStorage passa pelo serviço `src/services/storage.js`. Nunca acessar `localStorage` diretamente nos componentes.

---

## Google Sheets API

Toda comunicação com a API fica em `src/services/sheets.js`.

### Funções exportadas

```js
// Busca todos os lançamentos de um mês
buscarLancamentos(mes, ano) → Promise<Lancamento[]>

// Adiciona um lançamento
adicionarLancamento(lancamento) → Promise<void>

// Atualiza um lançamento existente (por ID)
atualizarLancamento(id, dados) → Promise<void>

// Remove um lançamento (por ID)
removerLancamento(id) → Promise<void>

// Busca configurações
buscarConfig() → Promise<Config>

// Salva configurações
salvarConfig(config) → Promise<void>

// Testa a conexão com a planilha
testarConexao() → Promise<{ ok: boolean, erro?: string }>
```

### Formato de Requisição

Usar Google Sheets API v4 com autenticação via Service Account JWT.
Range padrão para lançamentos: `lancamentos!A:I`
Range para config: `config!A:B`

### Tratamento de Erros

Todo método de `sheets.js` deve:
1. Tentar a operação
2. Em caso de erro de rede: salvar/manter no localStorage e marcar como pendente
3. Lançar erro tipado para o hook tratar

```js
class SheetsError extends Error {
  constructor(message, tipo) {
    super(message)
    this.tipo = tipo // 'auth' | 'rede' | 'permissao' | 'desconhecido'
  }
}
```

---

## Fluxo de Sincronização

```
Lançamento novo
    │
    ├─→ Salva no localStorage (sincronizado: false)
    │
    ├─→ Tenta enviar para Sheets
    │       │
    │       ├─ Sucesso → atualiza flag (sincronizado: true)
    │       │
    │       └─ Falha → mantém pendente, agenda retry
    │
    └─→ useSync.js monitora online/offline e processa fila de pendentes
```

---

## Roteamento

```jsx
// src/App.jsx
<Routes>
  <Route path="/pin" element={<PinPage />} />
  <Route element={<RotaProtegida />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/novo" element={<NovoLancamentoPage />} />
    <Route path="/historico" element={<HistoricoPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/configuracoes" element={<ConfiguracoesPage />} />
  </Route>
</Routes>
```

`RotaProtegida` verifica se há PIN salvo. Se não, redireciona para `/pin`.

---

## PWA

Configuração via `vite-plugin-pwa`:

```js
// vite.config.js
VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    name: 'FinançasCasal',
    short_name: 'Finanças',
    display: 'standalone',
    background_color: '#0a0d1a',
    theme_color: '#6c63ff',
    // ícones em /public/icons/
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
  }
})
```

---

## Formatação e Utilitários

```js
// src/utils/formatters.js

// Moeda brasileira
formatarMoeda(valor) → "R$ 1.234,56"

// Data por extenso
formatarData(isoString) → "28 de maio"

// Data curta
formatarDataCurta(isoString) → "28/05"

// Mês e ano
formatarMesAno(mes, ano) → "Maio 2026"
```

---

## Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Deploy no GitHub Pages
npm run deploy
```

Para deploy no GitHub Pages, usar o pacote `gh-pages`:
```bash
npm run build && npx gh-pages -d dist
```

---

## Ordem de Implementação Sugerida

1. Setup do projeto (Vite + React + Tailwind + PWA plugin)
2. `src/services/storage.js` e `src/utils/crypto.js`
3. Tela de PIN (criação + validação + bloqueio)
4. Roteamento com `RotaProtegida`
5. Layout base: Header + BottomNav + FAB
6. `src/services/sheets.js` (funções de leitura)
7. Home com dados reais do Sheets
8. Tela de Novo Lançamento (formulário completo)
9. `src/services/sheets.js` (funções de escrita)
10. Sincronização offline (`useSync.js`)
11. Histórico com filtros
12. Dashboard com gráficos (Recharts)
13. Configurações completas
14. Ajustes de PWA e testes de instalação

---

## Restrições Importantes

- **Nunca** commitar credenciais da Service Account no repositório
- **Nunca** acessar `localStorage` diretamente fora de `storage.js`
- **Nunca** fazer chamadas à Sheets API fora de `sheets.js`
- O app deve funcionar offline para visualização; só sincroniza quando há conexão
- Todo texto da UI em português brasileiro
- Otimizado para mobile (375px–430px); desktop é secundário
