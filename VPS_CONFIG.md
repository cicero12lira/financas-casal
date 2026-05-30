# VPS_CONFIG.md — Configuração completa da VPS pipeauto.com.br

**IP:** `187.127.8.131`
**Provedor:** (Hostinger)
**OS:** Ubuntu (Debian-based)

---

## Domínios hospedados

| Domínio | Sistema | Diretório na VPS |
|---------|---------|-----------------|
| `pipeauto.com.br` + `*.pipeauto.com.br` | JRA Transportes (multi-tenant SaaS) | `~/transportadora` |
| `igrejaemsalvador.cloud` | Sistema de gestão de eventos | `/opt/gestao` |
| `financas-casal.pipeauto.com.br` | FinançasCasal (PWA controle financeiro) | `~/financas` |

---

## Arquitetura de rede

O container `gestao_nginx` (do projeto `/opt/gestao`) é o **único ponto de entrada** na VPS — escuta nas portas 80 e 443 e faz reverse proxy para os dois sistemas:

```
Internet (80 / 443)
    └── gestao_nginx (container Docker)
          ├── igrejaemsalvador.cloud          →  http://app:8000  (rede interna do projeto gestao)
          ├── financas-casal.pipeauto.com.br  →  http://172.17.0.1:8090  (→ financas_frontend)  ◄ server_name exato (precede o wildcard)
          └── pipeauto.com.br
              *.pipeauto.com.br               →  http://172.17.0.1:8080  (Docker host gateway → jra_frontend_prod)
```

> O `server_name financas-casal.pipeauto.com.br` (exato) tem precedência sobre o wildcard `*.pipeauto.com.br`,
> então o subdomínio do FinançasCasal **não** cai no JRA. DNS (wildcard `*`) e SSL (cert wildcard) já cobrem — sem mudança.

O `172.17.0.1` é o IP do gateway da bridge padrão do Docker — permite que `gestao_nginx` alcance `jra_frontend_prod` mesmo estando em redes Docker diferentes.

> **Regra importante:** Nunca instalar nginx diretamente no host — conflito com docker-proxy nas portas 80/443.

---

## Projeto JRA Transportes (`~/transportadora`)

### Containers

| Container | Imagem | Função | Porta |
|-----------|--------|--------|-------|
| `jra_postgres_prod` | postgres:16-alpine | PostgreSQL — todos os bancos | apenas interno |
| `jra_backend_prod` | build local | FastAPI (uvicorn) | apenas interno |
| `jra_frontend_prod` | build local | nginx + React build estático | `0.0.0.0:8080→80` |
| `jra_backup_prod` | postgres:16-alpine | Backup diário pg_dump | - |

### Bancos de dados PostgreSQL

Todos no mesmo container `jra_postgres_prod`, bancos separados:

| Banco | Conteúdo |
|-------|----------|
| `db_master` | tabelas `tenants` e `super_admins` (multi-tenant) |
| `db_jra_transportes` | dados da transportadora JRA (viagens, usuários, etc.) |
| `db_<slug>` | criado automaticamente para cada novo tenant |

### Subdomínios multi-tenant

| URL | Função |
|-----|--------|
| `https://pipeauto.com.br` | Painel super-admin (login: `admin@pipeauto.com.br`) |
| `https://jra.pipeauto.com.br` | Sistema JRA Transportes |
| `https://<slug>.pipeauto.com.br` | Sistema de qualquer novo tenant cadastrado |
| `https://<slug>.pipeauto.com.br/register` | Criação do primeiro usuário admin (só se banco vazio) |

### Arquivo de ambiente

`~/transportadora/.env.prod` — variáveis principais:

```env
DB_USER=jra_user
DB_PASSWORD=...
DB_NAME=db_jra_transportes
DATABASE_URL=postgresql+psycopg://jra_user:<senha_encoded>@jra_postgres_prod:5432/db_jra_transportes
SECRET_KEY=...
MASTER_DB_NAME=db_master
DOMAIN_SUFFIX=pipeauto.com.br
SUPER_ADMIN_EMAIL=admin@pipeauto.com.br
SUPER_ADMIN_SENHA=...
APP_PORT=8080
```

> A senha na `DATABASE_URL` deve ter `@` encodado como `%40`.  
> O `MASTER_DATABASE_URL` **não** deve ser definido — `database.py` constrói via `quote_plus(DB_PASSWORD)`.

---

## Projeto Gestao Eventos (`/opt/gestao`)

### Containers

| Container | Função | Porta |
|-----------|--------|-------|
| `gestao_nginx` | nginx reverse proxy (entrada de todo tráfego) | `80:80`, `443:443` |
| `gestao_certbot` | Renovação automática SSL igrejaemsalvador.cloud | - |
| `gestao_cadastro` | FastAPI app | apenas interno |
| `gestao_mysql` | MySQL | apenas interno |

### Arquivo de configuração nginx

`/opt/gestao/nginx.conf` — contém 4 blocos server:

```nginx
# igrejaemsalvador.cloud HTTP → HTTPS
server { listen 80; server_name igrejaemsalvador.cloud www.igrejaemsalvador.cloud; ... }

# igrejaemsalvador.cloud HTTPS
server { listen 443 ssl; server_name igrejaemsalvador.cloud www.igrejaemsalvador.cloud;
    ssl_certificate /etc/letsencrypt/live/igrejaemsalvador.cloud/fullchain.pem; ... }

# pipeauto.com.br HTTP → HTTPS
server { listen 80; server_name pipeauto.com.br *.pipeauto.com.br; ... }

# pipeauto.com.br HTTPS (wildcard)
server { listen 443 ssl; server_name pipeauto.com.br *.pipeauto.com.br;
    ssl_certificate /etc/letsencrypt/live/pipeauto.com.br/fullchain.pem;
    proxy_pass http://172.17.0.1:8080; ... }
```

### Volumes do gestao_nginx (`/opt/gestao/docker-compose.prod.yml`)

```yaml
volumes:
  - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
  - certbot-www:/var/www/certbot
  - certbot-certs:/etc/letsencrypt                          # certs igrejaemsalvador (Docker volume)
  - /etc/letsencrypt/live/pipeauto.com.br:/etc/letsencrypt/live/pipeauto.com.br:ro     # cert pipeauto (host)
  - /etc/letsencrypt/archive/pipeauto.com.br:/etc/letsencrypt/archive/pipeauto.com.br:ro
```

---

## Projeto FinançasCasal (`~/financas`)

PWA de controle financeiro para casais. Stack **isolada** (não compartilha nada com JRA/gestao além do `gestao_nginx` de entrada). Frontend React estático + backend FastAPI + Postgres dedicado.

### Containers

| Container | Imagem | Função | Porta |
|-----------|--------|--------|-------|
| `financas_postgres` | postgres:16-alpine | Banco `db_financas` | apenas interno |
| `financas_backend` | build local (FastAPI/uvicorn) | API em `/api` (JWT) | apenas interno |
| `financas_frontend` | build local (nginx) | SPA React + proxy `/api` → backend | `0.0.0.0:8090→80` |

Rede própria `financas_net`; volume `financas_pgdata`. O `gestao_nginx` alcança o frontend via `172.17.0.1:8090`.

### Banco de dados

Um único banco `db_financas` (container `financas_postgres`). Tabelas: `usuarios` (os 2 do casal, papel `a`/`b`), `config` (singleton), `lancamentos`, `contas`, `cartoes` (escopo `casal`/`pessoal`).

### Arquivo de ambiente

`~/financas/.env.prod` (modelo em `.env.prod.example`):

```env
DB_USER=financas_user
DB_PASSWORD=...
DB_NAME=db_financas
DATABASE_URL=postgresql+psycopg://financas_user:<senha>@financas_postgres:5432/db_financas
SECRET_KEY=...            # openssl rand -hex 32
APP_PORT=8090
USUARIO_A_EMAIL/SENHA/NOME=...
USUARIO_B_EMAIL/SENHA/NOME=...
```

### Deploy / atualização

```bash
cd ~/financas
git pull
docker compose -f docker-compose.prod.yml up -d --build
docker exec financas_backend python scripts/seed.py     # cria/atualiza os 2 usuários (idempotente)
```

O bloco do `gestao_nginx` (subdomínio) está em `nginx-gestao-snippet.md` — aplicar com backup + `docker exec gestao_nginx nginx -t` antes do reload.

### Comandos úteis

```bash
docker logs financas_backend -f
docker exec -it financas_postgres psql -U financas_user -d db_financas
docker compose -f docker-compose.prod.yml down          # derruba só a stack financas
```

---

## Certificados SSL

| Domínio | Tipo | Local | Renovação |
|---------|------|-------|-----------|
| `igrejaemsalvador.cloud` | Certbot automático (HTTP-01) | Docker volume `certbot-certs` | Automática (a cada 12h verifica) |
| `pipeauto.com.br` + `*.pipeauto.com.br` | Certbot **manual** (DNS-01) | `/etc/letsencrypt/live/pipeauto.com.br/` no host | **Manual — vence 29/07/2026** |

### Renovação manual do cert pipeauto.com.br (antes de 29/07/2026)

```bash
# 1. No painel DNS do pipeauto.com.br: remover qualquer TXT _acme-challenge existente

# 2. Na VPS:
sudo certbot certonly \
  --manual \
  --preferred-challenges dns \
  -d pipeauto.com.br \
  -d "*.pipeauto.com.br"

# 3. Certbot exibe um valor TXT. Adicionar no DNS:
#    Tipo: TXT | Nome: _acme-challenge | TTL: 300 | Valor: <o que o certbot mostrar>
# 4. Aguardar aparecer no dig: https://toolbox.googleapps.com/apps/dig/#TXT/_acme-challenge.pipeauto.com.br
# 5. Pressionar Enter no certbot

# 6. Recarregar nginx:
cd /opt/gestao
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --no-deps nginx
```

> **Atenção DNS:** Usar TTL 300 (não 14400) para o TXT de validação — evita que valor antigo fique em cache por horas nos servidores da Let's Encrypt.

---

## DNS — pipeauto.com.br

| Tipo | Nome | Conteúdo | TTL |
|------|------|----------|-----|
| A | `@` | 187.127.8.131 | 60 |
| A | `*` | 187.127.8.131 | 300 |
| CNAME | `www` | pipeauto.com.br | 300 |

## DNS — igrejaemsalvador.cloud

| Tipo | Nome | Conteúdo | TTL |
|------|------|----------|-----|
| A | `@` | 187.127.8.131 | 300 |
| A | `www` | 187.127.8.131 | 300 |
| A | `admin` | 187.127.8.131 | 300 |

---

## Comandos frequentes na VPS

```bash
# ── JRA Transportes ───────────────────────────────────────────
cd ~/transportadora

# Atualizar sistema (pull + rebuild + restart)
bash scripts/deploy_vps.sh update

# Registrar tenant JRA e super-admin no master DB (idempotente)
docker exec jra_backend_prod python scripts/migrate_jra_tenant.py

# Resetar senha do super-admin
docker exec jra_backend_prod python3 -c "
import os, sys; sys.path.insert(0, '/app')
from database import MasterSessionLocal
from models import SuperAdmin
from passlib.context import CryptContext
pwd = CryptContext(schemes=['bcrypt'], deprecated='auto')
db = MasterSessionLocal()
admin = db.query(SuperAdmin).filter(SuperAdmin.email == os.getenv('SUPER_ADMIN_EMAIL')).first()
admin.senha_hash = pwd.hash(os.getenv('SUPER_ADMIN_SENHA'))
db.commit(); print('Senha atualizada'); db.close()
"

# Logs em tempo real
docker logs jra_backend_prod -f
docker logs jra_frontend_prod -f

# Acessar banco master
docker exec -it jra_postgres_prod psql -U jra_user -d db_master

# ── Gestao Eventos ────────────────────────────────────────────
cd /opt/gestao

# Reiniciar nginx (após editar nginx.conf)
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --no-deps nginx

# Rebuild completo
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

# Ver todos os containers da VPS
docker ps --format "table {{.Names}}\t{{.Ports}}\t{{.Status}}"
```

---

## Firewall (UFW)

```bash
sudo ufw status        # verificar regras ativas
# Portas abertas: 22 (SSH), 80 (HTTP), 443 (HTTPS)
```

---

## Fluxo para adicionar novo tenant

1. Acessar `https://pipeauto.com.br` → login super-admin
2. Menu Transportadoras → Nova → preencher slug, nome, cor
3. Sistema cria `db_<slug>` automaticamente e roda migrations
4. Enviar para o cliente: `https://<slug>.pipeauto.com.br/register`
5. Cliente preenche nome, email e senha → primeiro admin criado
6. A partir daí, admin cria usuários em Configurações → Usuários
