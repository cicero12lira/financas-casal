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
7. [Primeiro acesso ao app — criação dos PINs](#7-primeiro-acesso-ao-app--criação-dos-pins)
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
3. Clique na linha **1** da planilha e adicione os cabeçalhos abaixo, **um em cada coluna**:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| id | data | valor | tipo | categoria | quem_pagou | descricao | criado_em | sincronizado |

> **Dica:** Selecione a linha 1, clique em **Formatar → Texto em negrito** para destacar os cabeçalhos.

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

### 2.4 Copiar o ID da planilha

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
2. Entre com seu PIN (ou crie o PIN — veja a [Seção 7](#7-primeiro-acesso-ao-app--criação-dos-pins))
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
2. Adicione os cabeçalhos na linha 1, **um em cada coluna**:

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| id | data | valor | tipo | categoria | descricao | criado_em | origem | ref_casal_id | sincronizado |

> Diferente da planilha do casal, aqui não tem `quem_pagou` (é sempre você) e há duas colunas extras: `origem` (se veio do casal ou foi lançado manualmente) e `ref_casal_id` (referência ao lançamento do casal).

### 6.3 Criar uma Service Account para a planilha pessoal

Repita o [Passo 3.3 e 3.4](#33-criar-a-service-account-conta-de-serviço) para criar **outra** Service Account. Pode ser no mesmo projeto do Google Cloud.

Sugestão de nome: `pessoal-joao` ou `pessoal-maria`.

> Você também pode criar uma única Service Account e usar para tudo, mas ter uma por planilha é mais seguro — se você revogar o acesso de uma, não afeta as outras.

### 6.4 Compartilhar a planilha pessoal

Repita o [Passo 4](#4-compartilhar-a-planilha-com-a-service-account) para a **planilha pessoal**, usando o e-mail da nova Service Account.

Lembre-se: permissão **Editor**.

### 6.5 Configurar no app

1. Entre no app com o seu PIN
2. Vá em **Configurações**
3. Role até a seção **"PLANILHA PESSOAL"**
4. Cole o ID da sua planilha pessoal e salve
5. Cole o JSON da Service Account pessoal e salve
6. Toque em **"Testar conexão"** — deve aparecer ✓ verde

---

## 7. Primeiro acesso ao app — criação dos PINs

### 7.1 Criar o PIN da Pessoa A

1. Abra o app pela primeira vez
2. A tela mostrará: **"Crie o PIN da Pessoa A"**
3. Digite 4 dígitos (ex: 1234)
4. Digite novamente para confirmar

### 7.2 Criar o PIN da Pessoa B

Imediatamente após, a tela mostrará: **"Crie o PIN da Pessoa B"**

1. Digite 4 dígitos **diferentes** do PIN da Pessoa A (ex: 5678)
2. Confirme digitando novamente

> Pronto! Agora o app tem dois PINs. Cada um identifica uma pessoa.
> Na próxima vez que abrir o app e digitar o PIN, o app sabe automaticamente quem é você.

### 7.3 Nos outros dispositivos

**Celular da Pessoa A:**
- Abra o app pela primeira vez → vai pedir para criar os PINs novamente nesse dispositivo
- Crie os mesmos PINs que foram definidos no primeiro dispositivo
- Configure as credenciais do casal (mesmo ID e JSON)
- Configure as credenciais pessoais (ID e JSON da sua planilha pessoal)

**Celular da Pessoa B:**
- Mesma coisa: abra o app, crie os dois PINs (iguais aos do outro celular)
- Configure as credenciais do casal
- Configure as credenciais pessoais da Pessoa B

---

## 8. Configurações finais no app

Após criar os PINs, vá em **Configurações** (ícone ⚙️ ou BottomNav "Config") e preencha:

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
│    ├── Aba "lancamentos" com 9 colunas              │
│    └── Aba "config" com nomes e orçamento           │
│                                                     │
│ 2. Criar projeto no Google Cloud                    │
│    ├── Ativar Google Sheets API                     │
│    ├── Criar Service Account                        │
│    └── Baixar o JSON de credenciais                 │
│                                                     │
│ 3. Compartilhar planilha com e-mail da Service      │
│    Account → permissão EDITOR                       │
│                                                     │
│ 4. No app: cole o ID e o JSON → Testar conexão      │
└─────────────────────────────────────────────────────┘

PARA CADA PESSOA (opcional, controle pessoal):
┌─────────────────────────────────────────────────────┐
│ 1. Criar planilha pessoal no Google Sheets          │
│    └── Aba "pessoal" com 10 colunas                 │
│                                                     │
│ 2. Criar Service Account pessoal                    │
│    └── Baixar o JSON de credenciais                 │
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

### ❌ PIN incorreto ao fazer login
**Causa:** O PIN foi criado em outro dispositivo e não é o mesmo aqui.
**Solução:** Use o mesmo PIN que foi criado no primeiro dispositivo. Se esqueceu, vá em Configurações → Segurança → Alterar PIN (você precisará do PIN atual para alterar).

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
| D | tipo | Texto | `gasto` ou `receita` |
| E | categoria | Texto | `alimentacao` |
| F | quem_pagou | Texto | `João` |
| G | descricao | Texto | `Almoço no shopping` |
| H | criado_em | Data e hora (ISO) | `2026-05-28T12:00:00Z` |
| I | sincronizado | Texto | `true` ou `false` |

### Planilha do casal — aba `config`
| Coluna | Nome | Exemplo |
|---|---|---|
| A | chave | `nome_pessoa_a` |
| B | valor | `João` |

Linhas padrão:
- `nome_pessoa_a` → Nome da Pessoa A
- `nome_pessoa_b` → Nome da Pessoa B
- `orcamento_mensal` → Valor em reais (ex: `5000`)
- `categorias` → JSON gerado automaticamente pelo app

### Planilha pessoal — aba `pessoal`
| Coluna | Nome | Tipo | Exemplo |
|---|---|---|---|
| A | id | Texto (UUID) | `b7c1-...` |
| B | data | Data (AAAA-MM-DD) | `2026-05-28` |
| C | valor | Número | `120.00` |
| D | tipo | Texto | `gasto` ou `receita` |
| E | categoria | Texto | `alimentacao` |
| F | descricao | Texto | `[Casal] Mercado` |
| G | criado_em | Data e hora (ISO) | `2026-05-28T12:00:00Z` |
| H | origem | Texto | `manual` ou `casal` |
| I | ref_casal_id | Texto | ID do lançamento do casal |
| J | sincronizado | Texto | `true` ou `false` |

---

*Guia criado para o FinançasCasal — versão 1.0*
