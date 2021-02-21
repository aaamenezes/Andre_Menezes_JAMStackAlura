import Container from "../../common/container"
import Card from "../card"


function CardWrapper() {

  const projectsList = [
    {
      cover: '/images/code.jpg',
      title: 'Projeto 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam non libero.',
      url: '/#',
      highLight: true
    },
    {
      cover: '/images/code.jpg',
      title: 'Projeto 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam non libero.',
      url: '/#',
      highLight: false
    },
    {
      cover: '/images/code.jpg',
      title: 'Projeto 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam non libero.',
      url: '/#',
      highLight: false
    },
    {
      cover: '/images/code.jpg',
      title: 'Projeto 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam non libero.',
      url: '/#',
      highLight: true
    }
  ]

  const projects = projectsList.map((project, index) => {
    return <Card
             cover={project.cover}
             title={project.title}
             text={project.text}
             url={project.url}
             highLight={project.highLight}
             key={index}
    />
  })

  return (
    <Container tag='section'>
      {projects}
    </Container>
  )
}

export default CardWrapper