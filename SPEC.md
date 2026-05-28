# FinançasCasal — Especificação do Produto

## Visão Geral

PWA (Progressive Web App) de controle financeiro para casais. Acesso restrito ao casal via PIN salvo no dispositivo, sem necessidade de login recorrente. Dados armazenados no Google Sheets via API. Instalável na tela inicial do celular como app nativo.

**Problema central:** Registrar gastos em comum de forma rápida, sem fricção, acessível pelos dois parceiros a qualquer momento.

---

## Stack Técnica

- **Frontend:** React + Vite
- **Estilização:** Tailwind CSS
- **Roteamento:** React Router v6
- **Gráficos:** Recharts
- **Backend/DB:** Google Sheets via Google Sheets API v4
- **Autenticação:** PIN local salvo em localStorage
- **Hospedagem:** GitHub Pages (gratuito)
- **PWA:** vite-plugin-pwa (Workbox)

---

## Autenticação

### Primeiro acesso
1. App detecta ausência de PIN no localStorage
2. Exibe tela de criação de PIN (4 dígitos)
3. Solicita confirmação do PIN
4. Salva PIN como hash (SHA-256) no localStorage
5. Redireciona para Home

### Acessos subsequentes
1. App detecta PIN existente no localStorage
2. Exibe tela de PIN direto, sem formulário de login
3. Usuário digita 4 dígitos (teclado numérico virtual)
4. Após 3 tentativas erradas: bloqueia por 30 segundos com contador visível
5. PIN correto: redireciona para Home

### Segurança
- PIN armazenado como hash SHA-256, nunca em texto puro
- Sessão ativa enquanto o app estiver aberto (sem expiração por tempo)
- Não há recuperação de PIN (reset via Configurações exige PIN atual)

---

## Telas e Fluxos

### 1. Tela de PIN (`/pin`)

**Elementos:**
- Logo/nome do app centralizado
- Indicador de 4 pontos (preenchidos conforme digitação)
- Teclado numérico virtual 3x4 (0-9 + apagar)
- Mensagem de erro em caso de PIN incorreto
- Contador de bloqueio quando aplicável

**Comportamento:**
- Após 4 dígitos, valida automaticamente (sem botão confirmar)
- Vibração háptica em erro (se disponível no dispositivo)

---

### 2. Home (`/`)

**Elementos:**
- Header: nome do mês atual + ícone de configurações (canto superior direito)
- Card de saldo: "Saldo do mês" = receitas − gastos, com cor verde/vermelho
- Card de total gasto: valor absoluto dos gastos do mês
- Barra de progresso: gasto atual vs orçamento mensal definido nas configurações
- Lista dos últimos 5 lançamentos (preview rápido)
- Botão FAB central **"+"** para novo lançamento
- Navegação inferior: Home | Histórico | Dashboard | Configurações

**Comportamento:**
- Dados carregados do Google Sheets na abertura
- Pull-to-refresh para atualizar manualmente
- Lançamentos offline aparecem com ícone de pendente (⏳)

---

### 3. Lançamento Rápido (`/novo`)

**Fluxo em etapas (step-by-step dentro da mesma tela):**

**Etapa 1 — Valor**
- Campo de valor em destaque (fonte grande)
- Teclado numérico do sistema abre automaticamente
- Formato: R$ 0,00 com máscara em tempo real

**Etapa 2 — Tipo**
- Toggle: Gasto | Receita
- Padrão: Gasto

**Etapa 3 — Categoria** (grid de ícones)
- 🍔 Alimentação
- 🚗 Transporte
- 🏠 Casa
- 💊 Saúde
- 🎬 Lazer
- 🛍️ Compras
- 💼 Trabalho
- ➕ Outro

**Etapa 4 — Quem pagou**
- Botão alternável: [Nome Pessoa A] | [Nome Pessoa B]
- Nomes configuráveis nas Configurações

**Etapa 5 — Detalhes (opcionais)**
- Descrição: campo de texto curto (placeholder: "Ex: Almoço no shopping")
- Data: padrão hoje, seletor de data disponível

**Etapa 6 — Confirmação**
- Botão "Salvar" em destaque
- Ao salvar: toast de sucesso + retorno à Home
- Em caso de offline: salva localmente e exibe aviso de sync pendente

---

### 4. Histórico (`/historico`)

**Elementos:**
- Seletor de mês (◀ Maio 2026 ▶)
- Filtros: Todos | Gastos | Receitas + filtro por categoria + filtro por pessoa
- Lista ordenada por data (mais recente primeiro)
- Cada item: ícone da categoria | descrição | valor | quem pagou | data
- Totalizador fixo no topo: total do período filtrado

**Interação por item:**
- Toque longo ou swipe esquerdo: opções Editar / Excluir
- Editar abre o mesmo formulário de lançamento preenchido

---

### 5. Dashboard (`/dashboard`)

**Seção 1 — Mês atual**
- Gráfico de pizza: distribuição por categoria
- Comparativo lado a lado: gastos Pessoa A vs Pessoa B (barras horizontais)
- Maior gasto do mês (destaque)

**Seção 2 — Evolução**
- Gráfico de barras: últimos 6 meses (gastos vs receitas)

**Seção 3 — Categorias**
- Tabela: categoria | total gasto | % do total

---

### 6. Configurações (`/configuracoes`)

**Seções:**

**Perfil do Casal**
- Nome da Pessoa A (campo de texto)
- Nome da Pessoa B (campo de texto)

**Segurança**
- Alterar PIN (exige PIN atual)

**Orçamento**
- Orçamento mensal (valor em R$)

**Categorias**
- Lista de categorias existentes
- Botão para adicionar categoria personalizada
- Swipe para remover categoria (não remove as padrões)

**Google Sheets**
- ID da planilha (campo de texto)
- Status da conexão (✅ Conectado / ❌ Erro)
- Botão "Testar conexão"
- Link para tutorial de configuração

**Dados**
- Botão "Exportar CSV" (baixa os dados do mês atual)
- Botão "Sincronizar agora"

---

## Estrutura de Dados — Google Sheets

### Aba: `lancamentos`

| Coluna | Tipo | Descrição |
|---|---|---|
| id | string (UUID) | Identificador único |
| data | string (YYYY-MM-DD) | Data do lançamento |
| valor | number | Valor em reais (ex: 45.90) |
| tipo | string | `gasto` ou `receita` |
| categoria | string | Nome da categoria |
| quem_pagou | string | Nome da pessoa |
| descricao | string | Descrição opcional |
| criado_em | string (ISO 8601) | Timestamp de criação |
| sincronizado | boolean | Flag de sync local→sheets |

### Aba: `config`

| Chave | Valor |
|---|---|
| nome_pessoa_a | João |
| nome_pessoa_b | Maria |
| orcamento_mensal | 5000 |
| categorias_customizadas | JSON array |

---

## Comportamento Offline

1. Lançamentos são salvos imediatamente no localStorage com flag `sincronizado: false`
2. Service Worker detecta retorno de conexão
3. Sincronização automática: envia itens pendentes para o Sheets
4. Após sync bem-sucedido: atualiza flag para `true`
5. Ícone 🔄 no header indica itens pendentes de sync
6. Histórico e Dashboard exibem dados locais enquanto offline

---

## PWA — Requisitos

- `manifest.json` com nome, ícones (192x192 e 512x512), `display: standalone`, `theme_color`
- Service Worker via Workbox (cache de assets estáticos)
- Banner de instalação ("Adicionar à tela inicial") na primeira visita
- Ícone personalizado (tema financeiro/casal)
- Splash screen no carregamento

---

## Google Sheets API — Configuração

O usuário precisa:
1. Criar uma planilha no Google Sheets com as abas `lancamentos` e `config`
2. Habilitar a Google Sheets API no Google Cloud Console
3. Criar uma Service Account e baixar o JSON de credenciais
4. Compartilhar a planilha com o e-mail da Service Account
5. Inserir o ID da planilha nas Configurações do app

A autenticação com a API usa o token da Service Account armazenado localmente (localStorage), nunca exposto em repositório público.

---

## Requisitos Não-Funcionais

- Lançamento completo em menos de 10 segundos
- App instalável em iOS (Safari) e Android (Chrome)
- Funciona offline para lançamentos e visualização de dados locais
- Responsivo: otimizado para telas de 375px a 430px (mobile-first)
- Sem dependência de servidor próprio (apenas GitHub Pages + Google Sheets API)
