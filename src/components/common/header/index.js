import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  box-shadow: 0 0 30px -20px black;
  background-color: ${ ({theme}) => theme.color.support.white };
`

export default Header