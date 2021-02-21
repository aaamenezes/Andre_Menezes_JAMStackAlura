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

  body {
    color: ${ ({theme}) => theme.color.support.black };
    background-color: ${ ({theme}) => theme.color.support.gray };
  }

  #__next {
    min-height: 100vh;
  }

  h1 {
    margin: 15% 0 10%;
    font-size: ${ ({theme}) => theme.fontSize.title };
    text-align: center;
  }

  h2 {
    margin: 0 0 5%;
    font-size: ${ ({theme}) => theme.fontSize.subTitle };
    text-align: center;
  }

  img {
    max-width: 100%;
  }

  a {
    color: currentColor;
  }
`

export default GlobalStyle