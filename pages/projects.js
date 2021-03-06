import React from 'react'
import PropTypes from 'prop-types'
import Container from '../src/components/common/container'
import CardWrapper from '../src/components/projects/cardWrapper'
import PageWrapper from '../src/components/wrappers/pageWrapper'
import { getContent } from '../src/utils/getContent'
import Title from '../src/components/title'
import Text from '../src/components/text'
import { projectsQuery } from '../src/infra/queries/projectsQuery'

export async function getStaticProps({ preview }) {
  const data = await getContent(projectsQuery, preview)

  return {
    props: {
      data
    }
  }
}

export default function Projects(props) {
  const { data } = props
  const { projectsPage, allProjects, social } = data
  const { socialMediaLinks } = social
  const { pageTitle, pageDescription } = projectsPage

  return (
    <PageWrapper
      seoProps={{
        pageTitle: 'Projetos Front-end'
      }}
      header
      footer
      socialMediaLinks={socialMediaLinks}
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
