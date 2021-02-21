import Container from "../../common/container"
import Card from "../card"


function CardWrapper() {
  return (
    <Container tag='section'>
      <Card
        cover='/images/code.jpg'
        title='Projeto 1'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam non libero.'
        url='https://www.google.com/'
        highLight={true}
      />
      <Card
        cover='/images/code.jpg'
        title='Projeto 2'
        url='https://www.bing.com/'
        highLight={false}
      />
      <Card
        cover='/images/code.jpg'
        title='Projeto 3'
        url='https://www.yahoo.com/'
        highLight={false}
      />
    </Container>
  )
}

export default CardWrapper