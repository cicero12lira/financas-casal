# Bloco nginx para o gestao_nginx (roteia o subdomínio do FinançasCasal)

Este é o **único** ajuste necessário no nginx de entrada compartilhado da VPS
(`/opt/gestao/nginx.conf`). Ele faz `financas-casal.pipeauto.com.br` apontar para o
container do FinançasCasal (`172.17.0.1:8090`), **sem afetar** o JRA nem o igrejaemsalvador.

> Como o `server_name` é **exato**, ele tem precedência sobre o bloco wildcard
> `*.pipeauto.com.br` (que continua indo para o JRA). DNS e SSL **não mudam** — o
> certificado wildcard `*.pipeauto.com.br` já cobre este subdomínio.

## Bloco a adicionar (antes dos blocos `*.pipeauto.com.br`)

```nginx
# financas-casal.pipeauto.com.br HTTPS → container FinançasCasal (reaproveita cert wildcard)
server {
    listen 443 ssl;
    server_name financas-casal.pipeauto.com.br;

    ssl_certificate     /etc/letsencrypt/live/pipeauto.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/pipeauto.com.br/privkey.pem;

    location / {
        proxy_pass http://172.17.0.1:8090;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

O redirecionamento HTTP→HTTPS já é feito pelo bloco `listen 80; server_name pipeauto.com.br *.pipeauto.com.br;` existente (usa `$host`), então **não** é preciso um bloco `listen 80` específico.

## Procedimento seguro de aplicação

```bash
# 1. Backup do nginx.conf atual
cp /opt/gestao/nginx.conf /opt/gestao/nginx.conf.bak.$(date +%F-%H%M)

# 2. Editar /opt/gestao/nginx.conf e colar o bloco acima
nano /opt/gestao/nginx.conf

# 3. VALIDAR a sintaxe DENTRO do container (não recarregue se falhar!)
docker exec gestao_nginx nginx -t

# 4. Recarregar o nginx — use nginx -s reload (determinístico).
#    ATENÇÃO: `docker compose up -d --no-deps nginx` NÃO recarrega quando só o
#    arquivo montado mudou (mostra "Running" e mantém a config antiga em memória).
docker exec gestao_nginx nginx -s reload

# 5. Se algo der errado: restaurar o backup e recarregar
# cp /opt/gestao/nginx.conf.bak.<data> /opt/gestao/nginx.conf
# docker exec gestao_nginx nginx -t && docker exec gestao_nginx nginx -s reload
```

## Verificação

```bash
curl -skI https://financas-casal.pipeauto.com.br/        # 200/302 do app
curl -sk  https://financas-casal.pipeauto.com.br/api/health   # {"ok":true}

# Sites existentes continuam vivos:
curl -skI https://jra.pipeauto.com.br
curl -skI https://igrejaemsalvador.cloud
```
