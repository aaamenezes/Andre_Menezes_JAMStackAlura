import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`

  ${ normalize }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    font-family: ${ ({ theme }) => theme.fontFamily.primary };
    line-height: 1.5;
    color: ${ ({ theme }) => theme.color.support.black };
    background-color: ${ ({ theme }) => theme.color.support.gray };

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  #__next {
    min-height: 100vh;
  }

  h1 {
    margin: 20px 0 40px;
    font-size: ${ ({ theme }) => theme.fontSize.title };
    text-align: center;
  }

  h2 {
    margin: 10px 0 30px;
    font-size: ${ ({ theme }) => theme.fontSize.subTitle };
    text-align: center;
  }

  h3 {
    text-align: left;
  }

  p {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  a {
    color: ${ ({ theme }) => theme.color.primary.dark };
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }

  button {
    border: none;
    outline: none;
    background: transparent;
  }

  ul, li {
    list-style: none;
  }
`

export default GlobalStyle
