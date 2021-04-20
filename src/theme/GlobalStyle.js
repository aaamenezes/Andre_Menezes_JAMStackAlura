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
    margin: clamp(10px, 5%, 30px) 0 clamp(20px, 10%, 60px);
    font-size: ${ ({ theme }) => theme.fontSize.title };
    text-align: center;
  }

  h2 {
    margin: clamp(5px, 5%, 15px) 0 clamp(20px, 5%, 60px);
    font-size: ${ ({ theme }) => theme.fontSize.subTitle };
    text-align: center;
  }

  h3 {
    text-align: left;
  }

  p {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0
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
