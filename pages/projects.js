import React from 'react'
import PropTypes from 'prop-types'
import Container from '../src/components/common/container'
import CardWrapper from '../src/components/projects/cardWrapper'
import PageWrapper from '../src/components/wrappers/pageWrapper'
import { getContent } from '../src/utils/getContent'
import Title from '../src/components/title'
import Text from '../src/components/text'

export async function getStaticProps({ preview }) {
  const query = `
    query {
      projectsPage(locale: pt_BR) {
        pageTitle
        pageDescription
      }
      allProjects {
        coverImage {
          url
          alt
        }
        projectTitle
        url
      }
    }
  `

  const data = await getContent(query, preview)

  return {
    props: {
      data
    }
  }
}

export default function Projects(props) {
  const { data } = props
  const { projectsPage, allProjects } = data

  const { pageTitle, pageDescription } = projectsPage

  return (
    <PageWrapper
      seoProps={{
        pageTitle: 'Projetos Front-end'
      }}
      header
      footer
    >
      <Container tag='section'>
        <Title titleTag='h1'>
          {pageTitle}
        </Title>
        <Text external>
          {pageDescription}
        </Text>
      </Container>
      <CardWrapper projectsList={allProjects} />
    </PageWrapper>
  )
}

Projects.propTypes = {
  data: PropTypes.objectOf(PropTypes.objectOf).isRequired
}
