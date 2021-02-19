import Container from '../container'

function MainWrapper({children}) {
  return (
    <Container
      tag='main'
    >
      {children}
    </Container>
  )
}

export default MainWrapper