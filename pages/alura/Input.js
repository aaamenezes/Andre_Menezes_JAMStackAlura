import styled from 'styled-components'

import propToStyle from '../../src/utils/propToStyle'
import theme from './theme'

const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  border: 1px solid ${ theme.color.blue };
  border-radius: ${ theme.borderRadius };
  outline: none;
  ${ propToStyle('display') };
  ${ propToStyle('width') };

  &:checked+label {
    background-color: ${ theme.color.lightBlue };
  }
`

export default Input
