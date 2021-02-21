import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`

  ${normalize}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily.primary };
  }

  html {
    font-size: 14px;
    line-height: 1.5;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  body {
    color: ${ ({theme}) => theme.color.support.black };
    background-color: ${ ({theme}) => theme.color.support.gray };
  }

  #__next {
    min-height: 100vh;
  }

  h1 {
    margin: clamp(10px, 5%, 30px) 0 clamp(20px, 10%, 60px);
    font-size: ${ ({theme}) => theme.fontSize.title };
    text-align: center;
  }

  h2 {
    margin: 0 0 clamp(20px, 5%, 60px);
    /* margin: clamp(10px, 5%, 30px) 0 clamp(20px, 10%, 60px); */
    font-size: ${ ({theme}) => theme.fontSize.subTitle };
    text-align: center;
  }

  img {
    max-width: 100%;
  }

  a {
    color: currentColor;
    text-decoration: none;
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