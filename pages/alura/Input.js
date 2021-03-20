import styled from 'styled-components'

import propToStyle from '../../src/utils/propToStyle'
import theme from './theme'

const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  border-radius: ${ theme.borderRadius };
  border: 1px solid ${ theme.color.blue };
  outline: none;
  transition: ${ theme.transition.fast };
  ${ propToStyle('display') };
  ${ propToStyle('width') };
  ${ propToStyle('backgroundColor') };

  &:hover, &:focus {
    border: 1px solid ${ theme.color.darkBlue };
    box-shadow: 0 0 0 3px ${ theme.color.darkBlue };
  }

  &:checked + label {
    background-color: ${ theme.color.lightBlue };
  }
`

export default Input
