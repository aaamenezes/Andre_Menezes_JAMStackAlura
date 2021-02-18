import styled from 'styled-components'

const SubTitle = styled.h2`
  text-align: center;
  font-size: ${ ({theme}) => theme.fontSize.subTitle};
  color: ${ ({theme}) => theme.color.support.black}
`

export default SubTitle