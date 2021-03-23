import styled from 'styled-components'
import { theme } from './theme'

const Title = styled.h1`
  margin-top: 0;
  padding-top: clamp(10px,5%,30px);
  font-size: ${ theme.fontSize.title };
  text-align: left;
  color: ${ theme.color.darkBlue };
`

export default Title
