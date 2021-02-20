import Container from '../container'

function Main({children, ...props}) {
  return (
    <Container
      tag='main'
      minHeight='calc(100vh - 60px - 60px)'
      {...props}
    >
      {children}
    </Container>
  )
}

export default Main