import styled from 'styled-components'
import propToStyle from '../../../utils/propToStyle'

const Title = styled.h1`
  font-size: ${ ({ theme }) => theme.fontSize.title };
  color: ${ ({ theme }) => theme.color.support.black };
  ${ propToStyle('textAlign') }
`

export default Title
