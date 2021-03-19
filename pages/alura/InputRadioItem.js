import styled from 'styled-components'
import theme from './theme'

const InputRadioItem = styled.div`
  width: calc(100% / 3);
  transition: ${ theme.transition.fast };

  &:hover {
    background-color: ${ theme.color.lightBlue };
  }

  &:first-child 
    label {
      border-radius: ${ theme.borderRadius } 0 0 ${ theme.borderRadius };
    }
  }

  &:last-child {
    label {
      border-radius: 0 ${ theme.borderRadius } ${ theme.borderRadius } 0;
    }
  }

  &:not(:first-child) {
    label {
      border-left: none;
    }
  }
`

export default InputRadioItem
