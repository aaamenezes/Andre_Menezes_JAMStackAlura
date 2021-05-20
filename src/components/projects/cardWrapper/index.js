import React from 'react'
import Container from '../../common/container'
import ProjectCard from '../projectCard'
import db from '../../../../db.json'

export default function CardWrapper() {
  const projectsElements = db.projects.map(project => (
    <ProjectCard
      cover={project.cover}
      title={project.title}
      text={project.text}
      url={project.url}
      key={project.title}
    />
  ))

  return (
    <Container
      tag='section'
      display='grid'
      gridTemplateColumns={{
        xs: '1fr',
        sm: '1fr 1fr',
        md: '1fr 1fr 1fr'
      }}
      gridGap='30px'
      padding='30px'
    >
      {projectsElements}
    </Container>
  )
}
