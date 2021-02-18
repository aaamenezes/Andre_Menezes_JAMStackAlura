import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  font-size: ${ ({theme}) => theme.fontSize.title};
  color: ${ ({theme}) => theme.color.support.black}
`

export default Title