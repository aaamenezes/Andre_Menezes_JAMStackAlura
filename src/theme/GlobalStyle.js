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
    background-color: ${ ({theme}) => theme.color.support.gray }
  }

  #__next {
    min-height: 100vh;
  }

  h1 {
    margin: 0;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyle