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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
`

export default GlobalStyle