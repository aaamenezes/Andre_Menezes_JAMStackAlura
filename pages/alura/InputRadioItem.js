import styled from 'styled-components'
import theme from './theme'

const InputRadioItem = styled.div`
  width: calc(100% / 3);

  &:first-child {
    label {
      border-radius: ${ theme.borderRadius } 0 0 ${ theme.borderRadius };
    }
  }

  &:last-child {
    label {
      border-radius: 0 ${ theme.borderRadius } ${ theme.borderRadius } 0;
    }
  }
`

export default InputRadioItem
