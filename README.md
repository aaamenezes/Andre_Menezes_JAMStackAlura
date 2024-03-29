# PortFront: Portfolio de projetos de desenvolvimento front-end

## Descrição

O PortFront é um portfolio de projetos.

Ele foi desenvolvido durante o Bootcamp Front-end JamStack da Alura.

## Tecnologias utilizadas

As principais tecnologias utilizadas foram React.JS, Styled Componentes e Next.JS, com muito foco em desempenho e SEO.

Os dados cadastrados no portfólio foram importados via API do DatoCMS, que utiliza GraphQL.

Também foram realizados testes no front-end utilizando Cypress, Jest e React Testing Library.

O ESLint foi utilizado para padronizar o código escrito.

## Referências

A identidade visual foi totalmente baseada no estilo site Dribbble.

As páginas construídas foram:

### Home (`/`)

Página inicial com imagem de capa, perfil e nome do dono do portfólio.

### Projetos (`/projects`)

Página de listagem de projetos.

### Projeto de exemplo (`/project`)

Página de exibição de um projeto.

Contém:

- Texto
- Imagens
- Vídeo
- Slider com outros projetos (feito com o Swiper)

### Contato (`/contact`)

Informações sobre o dono do portfólio.

Contém:

- Texto
- Grid de imagens
- Listagem de portfólios do Github (carregado via API)
- E formulário de contato

## Projeto no ar

Você pode acessar o projeto através dessa URL: [PortFront](https://portfront.vercel.app/)

## Como rodar esse projeto em seu computador

1. Faça um clone do projeto em seu computador:

```
git clone https://github.com/aaamenezes/Andre_Menezes_JAMStackAlura.git
```

2. Acesse a pasta do projeto:

```
cd Andre_Menezes_JAMStackAlura
```

3. Instale as dependências:

```
npm i
```

Ou:

```
yarn
```

4. Inicie o projeto:

```
npm run dev
```

Ou: 

```
yarn dev
```








<!--
# [nome do projeto]

## Descrição

- O que é
- O que faz
- Objetivo do projeto
- Requisitos para estar pronto
- Requisitos bônus

## Tecnologias utilizadas

- Linguagens
- Pré-processador
- Frameworks
- Servidor
- Backend
- API
- CMS headless

## Referências

- Identidade visual
- Recursos
- Publicação

## Projeto no ar

Você pode acessar o projeto [nome_do_projeto](URL_DA_LOJA) rodando em produção na [VERCEL?].

## Como rodar esse projeto em seu computador

1. Faça um clone do projeto em seu computador:

```
git clone ...
```

2. Acesse a pasta do projeto

```
cd 
```

3. Instale as dependências:

```
npm i
```

Ou:

```
yarn
```

4. Inicie o projeto:

```
npm run dev
```

Ou: 

```
yarn dev
```

-->















<!--

# Example app with styled-components

This example features how you use a different styling solution than [styled-jsx](https://github.com/zeit/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-styled-components&project-name=with-styled-components&repository-name=with-styled-components)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Try it on CodeSandbox

[Open this example on CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/with-styled-components)

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>

-->
