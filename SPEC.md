# FinançasCasal — Especificação do Produto

## Visão Geral

PWA (Progressive Web App) de controle financeiro para casais. Acesso por **e-mail + senha**. Dados em um **backend próprio** (FastAPI + PostgreSQL) hospedado na VPS `pipeauto.com.br`. Sincronização entre os dois aparelhos por **polling** periódico (requer internet — sem modo offline). Instalável na tela inicial do celular como app nativo.

**Problema central:** Registrar gastos em comum de forma rápida, acessível pelos dois parceiros, com os dados refletindo no aparelho do outro em poucos segundos.

---

## Stack Técnica

- **Frontend:** React + Vite, Tailwind CSS, React Router v6, Recharts
- **Backend:** FastAPI (Python) + SQLAlchemy
- **Banco:** PostgreSQL (container dedicado)
- **Autenticação:** e-mail + senha → JWT (bcrypt)
- **Infra:** Docker na VPS `pipeauto.com.br`, atrás do nginx de entrada compartilhado (`gestao_nginx`)
- **PWA:** vite-plugin-pwa (Workbox)

---

## Autenticação

- Cada pessoa do casal tem **e-mail + senha** próprios (criados via seed a partir do `.env.prod`).
- `POST /api/auth/login` valida (bcrypt) e devolve um **JWT** + dados do usuário (`{id, nome, papel 'a'|'b', email}`).
- O token é guardado em `fc_auth` (localStorage) e enviado em todo request (`Authorization: Bearer`).
- Sessão longa (JWT de ~30 dias). Sair em Configurações → Conta apaga o token local.
- **Privacidade:** o controle pessoal (`escopo='pessoal'`) é filtrado por `usuario_id` do token — um parceiro não acessa os lançamentos pessoais do outro. Os lançamentos do casal (`escopo='casal'`) são compartilhados.

---

## Telas e Fluxos

### 1. Login (`/login`)
Formulário **e-mail + senha** → botão "Entrar". Erros: credenciais inválidas, falha de rede. Se já logado (`fc_auth.token`), vai direto para a Home.

### 2. Home (`/`)
Filtro de escopo (Tudo/Casal/Pessoal), card de saldo do mês, card de total gasto, barra de orçamento, últimos 5 lançamentos, FAB "+", navegação inferior (Home/Histórico/Carteira/Dashboard/Configurações). Dados via polling; pull-to-refresh força refetch.

### 3. Novo Lançamento (`/novo`)
Escopo (Casal/Pessoal) · Valor · Tipo (Despesa/Receita/Transferência/Despesa de cartão) · Cartão/Conta · Categoria · Quem pagou (só casal) · Programação (recorrente, vencimento, efetivada) · Detalhes (descrição, data) · Salvar → POST na API.

### 4. Histórico (`/historico`)
Seletor de mês, filtros (escopo/tipo/categoria/pessoa), lista por data, totalizador. Swipe à esquerda: Excluir. Cópias pessoais de despesa do casal (`origem='casal'`) não se excluem isoladamente.

### 5. Carteira (`/carteira`)
Contas (corrente/poupança/dinheiro/carteira) e Cartões (bandeira, limite, fechamento/vencimento), por escopo Casal/Pessoal.

### 6. Dashboard (`/dashboard`)
Pizza por categoria, maior gasto, barras dos últimos 6 meses (despesas vs receitas), tabela resumo. Respeita o filtro de escopo.

### 7. Configurações (`/configuracoes`)
Conectado como (nome + e-mail) · Perfil do casal (nomes) · Orçamento · Conta (e-mails + Sair) · Categorias · Dados (exportar CSV do mês).

---

## Estrutura de Dados — PostgreSQL

```
usuarios(id, email UNIQUE, senha_hash, nome, papel 'a'|'b', criado_em)
config(id=1, dados)                      -- JSON: nomes, e-mails, orcamento, categorias
lancamentos(id, escopo, usuario_id, data, valor, tipo, categoria, quem_pagou,
            descricao, criado_em, conta_id, conta_destino_id, cartao_id,
            recorrente, frequencia, vencimento, efetivada, origem, ref_casal_id)
contas(id, escopo, usuario_id, nome, tipo, saldo_inicial, criado_em)
cartoes(id, escopo, usuario_id, nome, bandeira, limite, dia_fechamento,
        dia_vencimento, conta_pagamento_id, criado_em)
```

- `escopo` = `'casal'` (usuario_id NULL, compartilhado) ou `'pessoal'` (usuario_id do dono).
- `id` é UUID gerado no cliente e enviado no POST (upsert via `merge`).
- `tipo` ∈ `gasto` (Despesa) | `receita` | `transferencia` | `cartao`.
- Não há automação de recorrência: os campos são persistidos/exibidos, sem gerar ocorrências futuras.

---

## Comportamento Offline / Sincronização

- **Não há modo offline** nesta versão: lançar e visualizar exigem internet.
- Sincronização entre aparelhos por **polling** (~15s): o app refaz o GET das coleções periodicamente, refletindo o que o parceiro lançou.
- Escritas são **otimistas** na UI e confirmadas no servidor (`await`).
- O Service Worker do PWA ainda cacheia os assets estáticos (o app abre offline, mas sem dados novos).
- `useSync` chama `POST /api/reconciliar` ao abrir o app e ao voltar online, mantendo o espelho das despesas do casal no controle pessoal.

---

## PWA — Requisitos
`manifest.json` (nome, ícones 192/512, `display: standalone`, `theme_color`), Service Worker (Workbox), banner de instalação, ícone próprio. `base: '/'` (servido na raiz do subdomínio).

---

## Implantação

Hospedado em `https://financas-casal.pipeauto.com.br` (VPS, Docker). Stack isolada: `financas_postgres` + `financas_backend` (FastAPI) + `financas_frontend` (nginx servindo o build e fazendo proxy de `/api`). O nginx de entrada da VPS (`gestao_nginx`) roteia o subdomínio. Passo a passo em `VPS_CONFIG.md` e `nginx-gestao-snippet.md`.

---

## Requisitos Não-Funcionais
- Lançamento completo em menos de 10s.
- Instalável em iOS (Safari) e Android (Chrome).
- Sincronização entre os dois aparelhos em segundos (polling).
- Responsivo, mobile-first (375–430px).
- Backend e banco self-hosted na VPS própria.
