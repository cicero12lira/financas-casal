# CLAUDE.md — FinançasCasal

Guia de desenvolvimento para o Claude Code. Leia este arquivo antes de qualquer tarefa.

---

## Visão Geral do Projeto

PWA de controle financeiro para casais. **Frontend** React + Vite + Tailwind. **Backend** FastAPI + **PostgreSQL**, hospedado na VPS própria (`pipeauto.com.br`) em Docker. Login por **e-mail + senha** (JWT). Sincronização entre os dois aparelhos por **polling** (~15s) — sem tempo real e sem modo offline (requer internet).

Consulte `SPEC.md` para fluxos de produto e `VPS_CONFIG.md` para a infraestrutura da VPS.

---

## Estrutura de Pastas

```
financas-casal/
├── backend/                # API FastAPI (Python)
│   ├── main.py             # App FastAPI, CORS, /api/health, init do banco
│   ├── settings.py         # Config via .env.prod (pydantic-settings)
│   ├── database.py         # Engine/Session SQLAlchemy + init_db (create_all)
│   ├── models.py           # Tabelas: usuarios, config, lancamentos, contas, cartoes
│   ├── schemas.py          # Pydantic in/out
│   ├── security.py         # bcrypt + JWT (criar/ler token)
│   ├── deps.py             # get_db, usuario_atual (auth por Bearer)
│   ├── serializers.py      # modelos → dicts no formato do frontend
│   ├── routers/            # auth, config, lancamentos, contas, cartoes, sync
│   ├── scripts/seed.py     # cria os 2 usuários do casal a partir do .env.prod
│   ├── requirements.txt
│   └── Dockerfile          # python:3.12-slim + uvicorn
├── nginx/
│   └── financas.conf       # nginx do container frontend: SPA + proxy /api → backend
├── public/                 # ícones PWA, manifest
├── src/
│   ├── components/         # ui/ (Button, Toast...) + layout/ (BottomNav, FAB, Layout)
│   ├── pages/              # Login, Home, NovoLancamento, Historico, Carteira, Dashboard, Configuracoes
│   ├── hooks/
│   │   ├── useAuth.js              # Login e-mail/senha (JWT)
│   │   ├── useConfig.js            # Config do casal (API + cache local)
│   │   ├── useLancamentos.js       # Lançamentos do casal (polling)
│   │   ├── usePessoal.js           # Lançamentos pessoais (polling)
│   │   ├── useColecaoFirestore.js  # Hook genérico de coleção (polling) — contas/cartões
│   │   ├── useContas.js / useCartoes.js
│   │   ├── useCategorias.js        # Categorias (derivadas da config)
│   │   ├── useSync.js              # Dispara reconciliação do controle pessoal
│   │   └── usePWAInstall.js
│   ├── services/
│   │   ├── api.js          # Cliente HTTP (/api) + JWT + tratamento de 401
│   │   ├── dados.js        # Camada de dados: chama a API; assinar*() = polling
│   │   ├── pessoal.js      # reconciliarPessoal() → POST /api/reconciliar
│   │   └── storage.js      # Abstração do localStorage (sessão + cache de config)
│   ├── utils/              # lancamentos.js, formatters.js, uuid.js
│   ├── constants/          # categories.js, financas.js
│   ├── App.jsx, main.jsx, index.css
├── Dockerfile              # Frontend: build React (node) → nginx servindo dist
├── docker-compose.prod.yml # financas_postgres + financas_backend + financas_frontend
├── .env.prod.example       # modelo das variáveis de produção
├── nginx-gestao-snippet.md # bloco a colar no gestao_nginx da VPS
├── SPEC.md / CLAUDE.md / VPS_CONFIG.md
├── vite.config.js (base '/'), tailwind.config.js, package.json
```

---

## Convenções de Código

- Português para domínio (`lancamento`, `categoria`, `quemPagou`); inglês para componentes/hooks/utils.
- React: functional components, hooks, props desestruturadas, export default no fim.
- Hooks: prefixo `use`, retornam objeto nomeado.
- Tailwind mobile-first; classes longas extraídas para `const ... = "..."`; cores do tema em `tailwind.config.js`.
- `async/await`, nunca `.then()` encadeado.
- Backend: Python idiomático, rotas finas, lógica em funções; nomes de domínio em PT.

### Tema Visual
Background `#0a0d1a` · Accent `#6c63ff` · Secundário `#00d4aa` · Danger `#ff4757` · Texto `#e8eaf6`/`#8892b0` · Cards `#111827`/border `#1e2a45`.

---

## localStorage — Chaves

Os **dados** ficam no Postgres (via API). O `localStorage` guarda só sessão e cache:

```js
'fc_auth'               // JSON: { token, uid, usuario: 'a'|'b', email, nome } — sessão (JWT)
'fc_config'             // JSON: cache local da config do casal (exibição offline)
'fc_ultima_sync'        // string: ISO da última reconciliação
'fc_instalacao_banner'  // boolean
```

**Nunca** acessar `localStorage` direto nos componentes — sempre via `src/services/storage.js`.

---

## Backend (FastAPI + Postgres)

Toda comunicação do frontend passa por `src/services/api.js` (injeta `Authorization: Bearer <token>` e trata 401) e `src/services/dados.js` (chama os endpoints).

### Modelo de dados (Postgres)
- `usuarios(id, email, senha_hash, nome, papel 'a'|'b', criado_em)` — os 2 do casal.
- `config(id=1, dados jsonb-as-text)` — singleton (nomes, e-mails, orçamento, categorias).
- `lancamentos(id, escopo 'casal'|'pessoal', usuario_id, ...campos..., origem, ref_casal_id)`.
- `contas(id, escopo, usuario_id, nome, tipo, saldo_inicial, ...)`.
- `cartoes(id, escopo, usuario_id, nome, bandeira, limite, ...)`.

`id` é gerado no **cliente** (`utils/uuid.js`) e enviado no POST (o backend faz `merge`/upsert).

### Endpoints (`/api`, JWT exceto login e health)
```
POST /api/auth/login            → { token, usuario }
GET  /api/health                → { ok: true }
GET/PUT /api/config
GET/POST /api/lancamentos?escopo=casal|pessoal   ·  PUT/DELETE /api/lancamentos/{id}
GET/POST /api/contas?escopo=     ·  PUT/DELETE /api/contas/{id}
GET/POST /api/cartoes?escopo=    ·  PUT/DELETE /api/cartoes/{id}
POST /api/reconciliar            → espelha despesas do casal no controle pessoal
```

### Princípios
- **Privacidade:** itens `escopo='pessoal'` são filtrados por `usuario_id == JWT.sub`; `escopo='casal'` é compartilhado entre os dois.
- O `sincronizado` retornado é sempre `true` (o que vem do servidor está confirmado).
- Sem migrations formais: `init_db()` faz `create_all` no startup (app pequeno).
- Seed idempotente em `scripts/seed.py` (lê `.env.prod`).

---

## Fluxo de dados / Sincronização

Sem fila offline. O cliente faz **polling**:

```
assinar*(onChange) em dados.js  →  fetch imediato + refetch a cada 15s  →  retorna cleanup()
Escrita (add/update/remove)     →  UI otimista na hora + chamada à API (await)
useSync                         →  POST /api/reconciliar ao abrir e ao voltar online
```

`reconciliarPessoal` (lógica no backend, `routers/sync.py`): para cada despesa do casal (`tipo='gasto'`) paga pelo usuário, garante uma cópia pessoal (`origem='casal'`, `ref_casal_id`) e remove órfãos.

---

## Roteamento

```jsx
// src/App.jsx — RotaProtegida verifica estaLogado() (existe fc_auth.token)
/login → LoginPage (e-mail + senha)
/ (protegidas, dentro de Layout): / , /novo , /historico , /carteira , /dashboard , /configuracoes
```

Telas unificadas (Home/Histórico/Dashboard) com filtro de escopo Tudo/Casal/Pessoal via `combinarLancamentos` (`src/utils/lancamentos.js`). Carteira gerencia contas e cartões por escopo.

---

## Desenvolvimento

```bash
npm install      # deps do frontend
npm run dev      # frontend em dev (proxy /api precisa do backend rodando — ver abaixo)
npm run build    # build de produção (dist/)

# Backend local (opcional):
cd backend && pip install -r requirements.txt && uvicorn main:app --reload --port 8000
```

> Em dev, o Vite serve em `/` mas as chamadas a `/api` precisam de um backend. Para testar
> o fluxo completo, rode a stack Docker (ver `VPS_CONFIG.md` / `docker-compose.prod.yml`)
> ou configure um proxy `/api` no `vite.config.js` apontando para `http://localhost:8000`.

---

## Deploy (VPS pipeauto.com.br)

Resumo (passo a passo completo em `VPS_CONFIG.md`):
1. `git pull` em `~/financas` na VPS.
2. `cp .env.prod.example .env.prod` e preencher (senha do DB, `SECRET_KEY`, e-mails/senhas do casal).
3. `docker compose -f docker-compose.prod.yml up -d --build`.
4. `docker exec financas_backend python scripts/seed.py` (cria os 2 usuários).
5. Adicionar o bloco de `nginx-gestao-snippet.md` ao `gestao_nginx` (com backup + `nginx -t`).
6. Acessar `https://financas-casal.pipeauto.com.br`.

A stack é **isolada** (containers `financas_*` + rede/volume próprios) e publica só a porta `8090`; o `gestao_nginx` faz o proxy do subdomínio. **Não** tocar nos containers do JRA/gestao.

---

## Restrições Importantes

- **Nunca** acessar `localStorage` fora de `storage.js`.
- **Nunca** chamar a API fora de `api.js`/`dados.js`.
- Backend: rotas pessoais sempre filtram por `usuario_id` do JWT (privacidade).
- Operações na VPS: jamais instalar nginx no host; alterar o `gestao_nginx` só com backup + `nginx -t` antes do reload.
- Todo texto da UI em português brasileiro; otimizado para mobile (375–430px).
