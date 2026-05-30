# FinançasCasal — Guia de Configuração Completo

Este guia cobre tudo que você precisa para colocar o app funcionando do zero:
criação das planilhas, configuração da API do Google e primeiro acesso.

---

## Índice

1. [Visão geral do que vamos criar](#1-visão-geral-do-que-vamos-criar)
2. [Planilha do casal](#2-planilha-do-casal)
3. [Google Cloud — ativar a API e criar a Service Account](#3-google-cloud--ativar-a-api-e-criar-a-service-account)
4. [Compartilhar a planilha com a Service Account](#4-compartilhar-a-planilha-com-a-service-account)
5. [Configurar o app — parte do casal](#5-configurar-o-app--parte-do-casal)
6. [Planilha pessoal (uma por pessoa)](#6-planilha-pessoal-uma-por-pessoa)
7. [Primeiro acesso ao app — login com Google](#7-primeiro-acesso-ao-app--login-com-google)
8. [Configurações finais no app](#8-configurações-finais-no-app)
9. [Resumo rápido](#9-resumo-rápido)
10. [Problemas comuns](#10-problemas-comuns)

---

## 1. Visão geral do que vamos criar

O app usa o **Google Sheets como banco de dados**. Não há servidor próprio.

Você vai precisar criar:

| O quê | Para quê | Quem cria |
|---|---|---|
| Planilha do casal | Guardar os lançamentos e configurações compartilhadas | Um dos dois |
| Planilha pessoal da Pessoa A | Controle financeiro privado de A | Pessoa A |
| Planilha pessoal da Pessoa B | Controle financeiro privado de B | Pessoa B |

Cada planilha precisa de uma **Service Account** — uma conta de serviço do Google que permite ao app ler e escrever na planilha sem precisar de senha.

---

## 2. Planilha do casal

### 2.1 Criar a planilha

1. Acesse [sheets.google.com](https://sheets.google.com)
2. Clique em **"+"** (Planilha em branco)
3. Clique no nome "Sem título" no canto superior esquerdo e renomeie para: **`financas-casal`**

### 2.2 Criar a aba `lancamentos`

1. Na parte inferior da planilha, clique com o botão direito na aba **"Página1"**
2. Clique em **"Renomear"** e digite: `lancamentos`
3. Clique na linha **1** da planilha e adicione os cabeçalhos abaixo, **um em cada coluna** (colunas A até P):

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| id | data | valor | tipo | categoria | quem_pagou | descricao | criado_em | sincronizado | conta_id | conta_destino_id | cartao_id | recorrente | frequencia | vencimento | efetivada |

> **Dica:** Selecione a linha 1, clique em **Formatar → Texto em negrito** para destacar os cabeçalhos.
>
> **Já tem a planilha antiga (9 colunas)?** Basta acrescentar os cabeçalhos novos de **J até P** na linha 1. As linhas antigas continuam funcionando — as colunas novas ficam vazias.

### 2.3 Criar a aba `config`

1. Clique no **"+"** no canto inferior esquerdo para adicionar uma nova aba
2. Renomeie para: `config`
3. Adicione os cabeçalhos na linha 1:

| A | B |
|---|---|
| chave | valor |

4. Adicione os dados iniciais nas linhas seguintes:

| A (chave) | B (valor) |
|---|---|
| nome_pessoa_a | João *(coloque o nome real)* |
| nome_pessoa_b | Maria *(coloque o nome real)* |
| orcamento_mensal | 5000 *(coloque o valor desejado)* |
| email_pessoa_a | joao@gmail.com *(e-mail Google da Pessoa A)* |
| email_pessoa_b | maria@gmail.com *(e-mail Google da Pessoa B)* |

> Os e-mails também podem ser preenchidos depois, direto no app em **Configurações → Conta Google**.

### 2.4 Criar as abas `contas` e `cartoes`

O app permite cadastrar contas bancárias e cartões de crédito. Crie duas abas novas:

**Aba `contas`** — cabeçalhos na linha 1 (colunas A até F):

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| id | nome | tipo | saldo_inicial | criado_em | sincronizado |

**Aba `cartoes`** — cabeçalhos na linha 1 (colunas A até I):

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| id | nome | bandeira | limite | dia_fechamento | dia_vencimento | conta_pagamento_id | criado_em | sincronizado |

### 2.5 Copiar o ID da planilha

Olhe para o endereço na barra do navegador. O ID é o trecho entre `/d/` e `/edit`:

```
https://docs.google.com/spreadsheets/d/  1lZcv4q21vZ3g7MdD8vQ5KXKhcF7OKjQdQUXkklUYLT0  /edit
                                          ↑ esse é o ID — anote ele
```

---

## 3. Google Cloud — ativar a API e criar a Service Account

> Esta etapa é feita **uma vez** para a planilha do casal e **uma vez para cada pessoa** (planilha pessoal).
> Você pode usar o mesmo projeto do Google Cloud para todas.

### 3.1 Criar um projeto no Google Cloud

1. Acesse [console.cloud.google.com](https://console.cloud.google.com)
2. No topo da página, clique em **"Selecionar projeto"** → **"Novo projeto"**
3. Nome do projeto: `financas-casal`
4. Clique em **"Criar"** e aguarde alguns segundos

### 3.2 Ativar a API do Google Sheets

1. No menu lateral esquerdo, clique em **"APIs e serviços"** → **"Biblioteca"**
2. Na caixa de busca, digite: `Google Sheets API`
3. Clique no resultado **"Google Sheets API"**
4. Clique no botão azul **"Ativar"**

> Aguarde até aparecer a mensagem de que a API está ativa.

### 3.3 Criar a Service Account (conta de serviço)

1. No menu lateral, clique em **"APIs e serviços"** → **"Credenciais"**
2. Clique em **"+ Criar credenciais"** → **"Conta de serviço"**
3. Preencha o formulário:
   - **Nome da conta de serviço:** `financas-casal` *(ou `pessoal-joao` para a planilha pessoal)*
   - **ID da conta de serviço:** preenchido automaticamente — não precisa mudar
   - **Descrição:** opcional
4. Clique em **"Criar e continuar"**
5. Na tela de permissões, **não precisa selecionar nada** — clique em **"Continuar"**
6. Na última tela, clique em **"Concluir"**

### 3.4 Baixar a chave JSON

1. Na lista de contas de serviço, clique no e-mail da conta que você criou (ex: `financas-casal@financas-casal.iam.gserviceaccount.com`)
2. Clique na aba **"Chaves"**
3. Clique em **"Adicionar chave"** → **"Criar nova chave"**
4. Selecione o formato **JSON**
5. Clique em **"Criar"** — um arquivo `.json` será baixado automaticamente

> **IMPORTANTE:** Guarde esse arquivo em local seguro. Ele dá acesso de escrita à sua planilha.
> Nunca envie esse arquivo para ninguém nem compartilhe publicamente.

### 3.5 Anotar o e-mail da Service Account

Dentro do arquivo JSON baixado, localize o campo `client_email`. Ele tem esse formato:

```
financas-casal@nome-do-projeto.iam.gserviceaccount.com
```

Anote esse e-mail — você vai precisar dele no próximo passo.

### 3.6 Criar o ID do cliente OAuth (login com Google)

O login no app é feito com a conta Google (não há mais PIN). Para isso, crie um **ID de cliente OAuth** — basta uma vez, e o mesmo ID serve para os dois celulares.

1. No menu lateral, vá em **"APIs e serviços"** → **"Tela de permissão OAuth"**
   - Tipo de usuário: **Externo** → **Criar**
   - Preencha nome do app (`FinançasCasal`), e-mail de suporte e e-mail do desenvolvedor → salve
   - Em **"Usuários de teste"**, adicione os e-mails Google das duas pessoas (Pessoa A e Pessoa B)
2. Vá em **"APIs e serviços"** → **"Credenciais"** → **"+ Criar credenciais"** → **"ID do cliente OAuth"**
3. Tipo de aplicativo: **Aplicativo da Web**
4. Em **"Origens JavaScript autorizadas"**, adicione:
   - `https://cicero12lira.github.io`
   - `http://localhost:5173` *(para testar localmente)*
5. Clique em **"Criar"** e copie o **ID do cliente** (termina em `.apps.googleusercontent.com`)

> Anote esse ID — ele será preenchido no app em **Configurações → Conta Google**.

---

## 4. Compartilhar a planilha com a Service Account

Este passo é **essencial** para o app conseguir escrever na planilha.

1. Abra a planilha do casal no Google Sheets
2. Clique no botão verde **"Compartilhar"** no canto superior direito
3. No campo "Adicionar pessoas e grupos", cole o **e-mail da Service Account**
4. Na lista de permissões ao lado, selecione **"Editor"** ← *muito importante ser Editor, não Visualizador*
5. **Desmarque** a opção "Notificar pessoas" (a Service Account não recebe e-mail)
6. Clique em **"Compartilhar"**

> ⚠️ Se você compartilhar como **Visualizador** em vez de **Editor**, o app conseguirá ler os dados mas **não conseguirá salvar** os lançamentos. Sempre use **Editor**.

---

## 5. Configurar o app — parte do casal

1. Abra o app em `https://cicero12lira.github.io/financas-casal/`
2. Entre com sua conta Google (veja a [Seção 7](#7-primeiro-acesso-ao-app--login-com-google))
3. Toque no ícone de engrenagem ⚙️ no canto superior direito (ou no BottomNav em "Config")
4. Role até a seção **"GOOGLE SHEETS"**

**Preencher o ID da planilha:**
- Cole o ID copiado no [Passo 2.4](#24-copiar-o-id-da-planilha) no campo "ID da planilha do casal"
- Toque em **"Salvar ID"**

**Preencher as credenciais:**
- Abra o arquivo `.json` que você baixou em um editor de texto (Bloco de Notas, VS Code, etc.)
- Selecione **todo o conteúdo** do arquivo (`Ctrl+A`) e copie (`Ctrl+C`)
- Cole no campo de credenciais do app
- Toque em **"Salvar credenciais"**

**Testar a conexão:**
- Toque em **"Testar conexão"**
- Deve aparecer ✓ verde: **"Conexão estabelecida!"**
- Se aparecer erro, verifique se o e-mail da Service Account tem permissão **Editor** na planilha

---

## 6. Planilha pessoal (uma por pessoa)

O controle pessoal é **opcional**. Ele permite que cada pessoa acompanhe suas próprias finanças separadamente, e as despesas do casal são descontadas automaticamente de quem pagou.

> Cada pessoa faz os passos abaixo **no próprio celular**, com **sua própria planilha**.
> Os dados pessoais ficam completamente separados.

### 6.1 Criar a planilha pessoal

1. Acesse [sheets.google.com](https://sheets.google.com)
2. Crie uma nova planilha em branco
3. Renomeie para: `financas-pessoal-joao` *(use seu próprio nome)*

### 6.2 Criar a aba `pessoal`

1. Renomeie a aba "Página1" para: `pessoal`
2. Adicione os cabeçalhos na linha 1, **um em cada coluna** (colunas A até Q):

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| id | data | valor | tipo | categoria | descricao | criado_em | origem | ref_casal_id | sincronizado | conta_id | conta_destino_id | cartao_id | recorrente | frequencia | vencimento | efetivada |

> Diferente da planilha do casal, aqui não tem `quem_pagou` (é sempre você) e há duas colunas extras: `origem` (se veio do casal ou foi lançado manualmente) e `ref_casal_id` (referência ao lançamento do casal).
>
> **Já tem a planilha antiga (10 colunas)?** Acrescente os cabeçalhos de **K até Q** na linha 1.

3. Crie também as abas **`contas`** e **`cartoes`** com os mesmos cabeçalhos descritos no [Passo 2.4](#24-criar-as-abas-contas-e-cartoes) (cada pessoa tem suas próprias contas e cartões na sua planilha).

### 6.3 Criar uma Service Account para a planilha pessoal

Repita o [Passo 3.3 e 3.4](#33-criar-a-service-account-conta-de-serviço) para criar **outra** Service Account. Pode ser no mesmo projeto do Google Cloud.

Sugestão de nome: `pessoal-joao` ou `pessoal-maria`.

> Você também pode criar uma única Service Account e usar para tudo, mas ter uma por planilha é mais seguro — se você revogar o acesso de uma, não afeta as outras.

### 6.4 Compartilhar a planilha pessoal

Repita o [Passo 4](#4-compartilhar-a-planilha-com-a-service-account) para a **planilha pessoal**, usando o e-mail da nova Service Account.

Lembre-se: permissão **Editor**.

### 6.5 Configurar no app

1. Entre no app com sua conta Google
2. Vá em **Configurações**
3. Role até a seção **"PLANILHA PESSOAL"**
4. Cole o ID da sua planilha pessoal e salve
5. Cole o JSON da Service Account pessoal e salve
6. Toque em **"Testar conexão"** — deve aparecer ✓ verde

---

## 7. Primeiro acesso ao app — login com Google

O login é feito com a conta Google. **Não há mais PIN.** Cada e-mail é mapeado para a Pessoa A ou B.

### 7.1 Pré-requisitos

Antes do primeiro login você precisa ter:
- O **ID do cliente OAuth** criado no [Passo 3.6](#36-criar-o-id-do-cliente-oauth-login-com-google)
- Os **e-mails** das duas pessoas cadastrados (na aba `config` da planilha ou em Configurações → Conta Google)

### 7.2 Configurar o login (uma vez por dispositivo)

Na primeira vez, a tela de login mostra o botão do Google, mas só funciona depois de informar o ID do cliente. Se aparecer o aviso de configuração:

1. Toque em **"Ir para Configurações"**
2. Na seção **"Conta Google"**, cole o **ID do cliente OAuth** e salve
3. Preencha os **e-mails** da Pessoa A e da Pessoa B e salve
4. Volte para a tela de login

> Esse passo só é necessário porque o ID e os e-mails ficam salvos no dispositivo. Depois de configurado, o login é direto.

### 7.3 Entrar

1. Na tela de login, toque em **"Continuar com o Google"**
2. Escolha a conta Google cadastrada
3. O app identifica automaticamente se você é a Pessoa A ou B pelo e-mail e abre a Home

> O login fica salvo no aparelho (continua logado mesmo offline). Para trocar de conta, use **Configurações → Conta Google → Sair**.

### 7.4 Nos outros dispositivos

Em cada celular, repita o [Passo 7.2](#72-configurar-o-login-uma-vez-por-dispositivo): informe o mesmo ID do cliente e os e-mails, depois entre com a conta Google daquela pessoa. Configure também as credenciais do casal e as pessoais (ID + JSON).

---

## 8. Configurações finais no app

Após o primeiro login, vá em **Configurações** (ícone ⚙️ ou BottomNav "Config") e preencha:

### Conta Google
- **ID do cliente OAuth:** cole o ID criado no [Passo 3.6](#36-criar-o-id-do-cliente-oauth-login-com-google)
- **E-mail da Pessoa A** e **E-mail da Pessoa B:** os e-mails Google de cada um
- Use **"Sair da conta"** para deslogar/trocar de conta

### Perfil do casal
- **Pessoa A:** nome real (ex: João)
- **Pessoa B:** nome real (ex: Maria)
- Toque em **"Salvar"**

### Orçamento
- Coloque o valor do orçamento mensal do casal em reais
- Toque em **"Salvar"**

### Google Sheets (do casal)
- Cole o **ID da planilha do casal**
- Cole o **JSON das credenciais** da Service Account do casal
- Toque em **"Testar conexão"** → deve aparecer ✓ verde

### Planilha pessoal
- Faça isso **individualmente** em cada celular, cada um com sua planilha

---

## 9. Resumo rápido

```
PARA O CASAL (uma vez só):
┌─────────────────────────────────────────────────────┐
│ 1. Criar planilha no Google Sheets                  │
│    ├── Aba "lancamentos" com 16 colunas (A:P)       │
│    ├── Aba "config" (nomes, orçamento, e-mails)     │
│    ├── Aba "contas" (A:F)                           │
│    └── Aba "cartoes" (A:I)                          │
│                                                     │
│ 2. Criar projeto no Google Cloud                    │
│    ├── Ativar Google Sheets API                     │
│    ├── Criar Service Account → baixar JSON          │
│    └── Criar ID do cliente OAuth (login Google)     │
│                                                     │
│ 3. Compartilhar planilha com e-mail da Service      │
│    Account → permissão EDITOR                       │
│                                                     │
│ 4. No app: ID do cliente + e-mails (Conta Google),  │
│    ID da planilha + JSON → Testar conexão           │
└─────────────────────────────────────────────────────┘

PARA CADA PESSOA (opcional, controle pessoal):
┌─────────────────────────────────────────────────────┐
│ 1. Criar planilha pessoal no Google Sheets          │
│    ├── Aba "pessoal" com 17 colunas (A:Q)           │
│    ├── Aba "contas" (A:F)                           │
│    └── Aba "cartoes" (A:I)                           │
│                                                     │
│ 2. Criar Service Account pessoal → baixar JSON      │
│                                                     │
│ 3. Compartilhar planilha pessoal com e-mail da      │
│    Service Account → permissão EDITOR               │
│                                                     │
│ 4. No app → Configurações → Planilha pessoal:       │
│    cole o ID e o JSON → Testar conexão              │
└─────────────────────────────────────────────────────┘
```

---

## 10. Problemas comuns

### ❌ "Credenciais da Service Account não configuradas"
**Causa:** O JSON não foi colado nas configurações do app.
**Solução:** Vá em Configurações → Google Sheets → cole o JSON completo e salve.

### ❌ "Sem permissão para acessar a planilha" (403)
**Causa:** A Service Account foi adicionada como **Visualizador** em vez de **Editor**.
**Solução:** Abra a planilha → Compartilhar → encontre o e-mail da Service Account → mude para **Editor**.

### ❌ "Testar conexão" funciona mas lançamentos não aparecem na planilha
**Causa:** Mesmo problema acima — leitura funciona com Visualizador, mas escrita precisa de Editor.
**Solução:** Mesma solução acima.

### ❌ "ID da planilha não configurado"
**Causa:** O ID não foi salvo corretamente.
**Solução:** Volte em Configurações, cole o ID novamente (só o trecho entre `/d/` e `/edit`) e toque em "Salvar ID".

### ❌ "Configure o ID do cliente Google nas Configurações"
**Causa:** O ID do cliente OAuth ainda não foi salvo neste dispositivo.
**Solução:** Toque em "Ir para Configurações" → Conta Google → cole o ID do cliente ([Passo 3.6](#36-criar-o-id-do-cliente-oauth-login-com-google)) e salve.

### ❌ "Este e-mail não está cadastrado para o casal"
**Causa:** O e-mail da conta Google usada no login não bate com `email_pessoa_a` nem `email_pessoa_b`.
**Solução:** Em Configurações → Conta Google, confira os e-mails cadastrados (devem ser exatamente os e-mails Google de cada pessoa).

### ❌ O botão do Google não aparece / login falha (erro 401/redirect)
**Causa:** A origem do app não está autorizada no ID do cliente OAuth.
**Solução:** No Google Cloud → Credenciais → seu ID do cliente, adicione a URL do app em "Origens JavaScript autorizadas" e adicione o e-mail como usuário de teste na tela de permissão OAuth.

### ❌ "Planilha pessoal não configurada" na tela Pessoal
**Causa:** Você ainda não configurou a planilha pessoal.
**Solução:** Siga a [Seção 6](#6-planilha-pessoal-uma-por-pessoa) deste guia.

### ❌ Lançamentos do casal não aparecem no controle pessoal
**Causa:** A reconciliação acontece na sincronização, que precisa de conexão com a planilha pessoal configurada.
**Solução:** Configure a planilha pessoal (Seção 6), feche e reabra o app.

### ❌ "Aba pessoal não encontrada na planilha"
**Causa:** A aba foi criada com nome diferente de `pessoal` (maiúscula, acento, etc.).
**Solução:** Abra a planilha pessoal e renomeie a aba para `pessoal` (minúsculo, sem acento).

---

## Estrutura completa das planilhas para referência

### Planilha do casal — aba `lancamentos`
| Coluna | Nome | Tipo | Exemplo |
|---|---|---|---|
| A | id | Texto (UUID) | `a3f2-...` |
| B | data | Data (AAAA-MM-DD) | `2026-05-28` |
| C | valor | Número | `45.90` |
| D | tipo | Texto | `gasto`, `receita`, `transferencia`, `cartao` |
| E | categoria | Texto | `alimentacao` |
| F | quem_pagou | Texto | `João` |
| G | descricao | Texto | `Almoço no shopping` |
| H | criado_em | Data e hora (ISO) | `2026-05-28T12:00:00Z` |
| I | sincronizado | Texto | `true` ou `false` |
| J | conta_id | Texto | ID da conta |
| K | conta_destino_id | Texto | ID da conta destino (transferência) |
| L | cartao_id | Texto | ID do cartão (despesa de cartão) |
| M | recorrente | Texto | `true` ou `false` |
| N | frequencia | Texto | `mensal`, `semanal`, `anual` |
| O | vencimento | Data (AAAA-MM-DD) | `2026-06-10` |
| P | efetivada | Texto | `true` ou `false` |

### Planilha do casal — aba `config`
| Coluna | Nome | Exemplo |
|---|---|---|
| A | chave | `nome_pessoa_a` |
| B | valor | `João` |

Linhas padrão:
- `nome_pessoa_a` → Nome da Pessoa A
- `nome_pessoa_b` → Nome da Pessoa B
- `email_pessoa_a` / `email_pessoa_b` → e-mails Google (login)
- `orcamento_mensal` → Valor em reais (ex: `5000`)
- `categorias` → JSON gerado automaticamente pelo app

### Planilha pessoal — aba `pessoal`
| Coluna | Nome | Tipo | Exemplo |
|---|---|---|---|
| A | id | Texto (UUID) | `b7c1-...` |
| B | data | Data (AAAA-MM-DD) | `2026-05-28` |
| C | valor | Número | `120.00` |
| D | tipo | Texto | `gasto`, `receita`, `transferencia`, `cartao` |
| E | categoria | Texto | `alimentacao` |
| F | descricao | Texto | `[Casal] Mercado` |
| G | criado_em | Data e hora (ISO) | `2026-05-28T12:00:00Z` |
| H | origem | Texto | `manual` ou `casal` |
| I | ref_casal_id | Texto | ID do lançamento do casal |
| J | sincronizado | Texto | `true` ou `false` |
| K | conta_id | Texto | ID da conta |
| L | conta_destino_id | Texto | ID da conta destino (transferência) |
| M | cartao_id | Texto | ID do cartão |
| N | recorrente | Texto | `true` ou `false` |
| O | frequencia | Texto | `mensal`, `semanal`, `anual` |
| P | vencimento | Data (AAAA-MM-DD) | `2026-06-10` |
| Q | efetivada | Texto | `true` ou `false` |

### Abas `contas` (casal e pessoal)
| Coluna | Nome | Tipo | Exemplo |
|---|---|---|---|
| A | id | Texto (UUID) | `c1a2-...` |
| B | nome | Texto | `Nubank` |
| C | tipo | Texto | `corrente`, `poupanca`, `dinheiro`, `carteira` |
| D | saldo_inicial | Número | `1500.00` |
| E | criado_em | Data e hora (ISO) | `2026-05-28T12:00:00Z` |
| F | sincronizado | Texto | `true` ou `false` |

### Abas `cartoes` (casal e pessoal)
| Coluna | Nome | Tipo | Exemplo |
|---|---|---|---|
| A | id | Texto (UUID) | `d4e5-...` |
| B | nome | Texto | `Nubank Roxinho` |
| C | bandeira | Texto | `Mastercard` |
| D | limite | Número | `5000.00` |
| E | dia_fechamento | Número | `28` |
| F | dia_vencimento | Número | `5` |
| G | conta_pagamento_id | Texto | ID da conta de pagamento |
| H | criado_em | Data e hora (ISO) | `2026-05-28T12:00:00Z` |
| I | sincronizado | Texto | `true` ou `false` |

---

*Guia criado para o FinançasCasal — versão 2.0 (login Google, carteira e lançamentos avançados)*
