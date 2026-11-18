# Papufy

Estudo de caso público. O código do produto é proprietário e não está neste repositório.

Marketplace B2C de serviços locais, no ar em [papufy.com](https://papufy.com/). A pessoa busca por categoria e cidade, publica um pedido de serviço ou um perfil profissional, conversa no chat e acompanha publicações, notificações e carteira. Web e mobile no mesmo produto.

## O que eu fiz

Trabalhei no produto em produção, da interface até o fluxo que a API sustenta.

- Interface mobile-first em React, TypeScript, Vite e Tailwind
- Busca, categorias, anúncio, autenticação, chat, notificações e carteira
- Catálogo, busca e anúncios apoiados por API e PostgreSQL

## Arquitetura

```mermaid
flowchart LR
  cliente[Web e mobile]
  api[API]
  dados[(PostgreSQL)]
  cliente --> api --> dados
```

| Parte | Responsabilidade |
| --- | --- |
| Web e mobile | Busca, anúncio, chat, notificações, perfil e carteira |
| API | Catálogo, busca e fluxos de anúncio |
| PostgreSQL | Dados do marketplace |

## Stack

React, TypeScript, Node.js, PostgreSQL.

## Recorte de código

`src/` é um exemplo do domínio de busca, escrito para este portfólio. Não é o serviço em produção: não há banco, autenticação, chat nem dados reais.

A busca filtra anúncios por texto, categoria, cidade, estado e tipo (`pedido` ou `perfil`), ignorando acento e maiúsculas.

```bash
npm install
npm test
```
