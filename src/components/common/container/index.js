import styled from 'styled-components'

import propToStyle from '../../../utils/propToStyle'

const Container = styled.div`
  width: clamp(300px, 100%, 2000px);
  padding-left: 10%;
  padding-right: 10%;
  margin-left: auto;
  margin-right: auto;
  ${propToStyle('display')};
  ${propToStyle('justifyContent')};
  ${propToStyle('alignItems')};
  ${propToStyle('height')};
  ${propToStyle('backgroundColor')};
  ${propToStyle('boxShadow')};
`

function ContainerWrapper({tag, children, ...props}) {
  return (
    <Container
      as={tag}
      {...props}
    >
      {children}
    </Container>
  )
}

export default ContainerWrapper