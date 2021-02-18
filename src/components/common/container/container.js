import styled from 'styled-components'

import propToStyle from '../../../utils/propToStyle'

const Container = styled.div`
  width: clamp(300px, 100%, 2000px);
  padding-left: 10%;
  padding-right: 10%;
  margin-left: auto;
  margin-right: auto;
  ${propToStyle('display')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
`

export default Container