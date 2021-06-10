import React from 'react'
import PropTypes from 'prop-types'
import Container from '../../common/container'
import ProjectCard from '../projectCard'

export default function CardWrapper({ projectsList }) {
  const projectsElements = projectsList.map(project => (
    <ProjectCard
      cover={project.coverImage.url}
      title={project.projectTitle}
      url={project.url}
      key={project.projectTitle}
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

CardWrapper.propTypes = {
  projectsList: PropTypes.arrayOf(PropTypes.object).isRequired
}
