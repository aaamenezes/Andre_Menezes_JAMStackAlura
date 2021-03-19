import styled from 'styled-components'

import propToStyle from '../../src/utils/propToStyle'
import theme from './theme'

const Label = styled.label`
  font-size: ${ theme.fontSize.label };
  ${ propToStyle('flex') };
  ${ propToStyle('display') };
  ${ propToStyle('flexDirection') };
  ${ propToStyle('alignItems') };
  ${ propToStyle('border') };
  ${ propToStyle('borderCollapse') };
  ${ propToStyle('fontSize') };
  ${ propToStyle('userSelect') };
  ${ propToStyle('cursor') };
`

export default Label
