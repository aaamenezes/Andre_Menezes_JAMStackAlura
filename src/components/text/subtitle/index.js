import styled from 'styled-components'
import propToStyle from '../../../utils/propToStyle'

const SubTitle = styled.h2`
  font-size: ${ ({ theme }) => theme.fontSize.subTitle };
  color: ${ ({ theme }) => theme.color.support.black };
  ${ propToStyle('margin') }
  ${ propToStyle('textAlign') }
`

export default SubTitle
