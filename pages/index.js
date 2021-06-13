import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../src/components/common/hero'
import Container from '../src/components/common/container'
import Title from '../src/components/title'
import PageWrapper from '../src/components/wrappers/pageWrapper'
import { getContent } from '../src/utils/getContent'
import { homeQuery } from '../src/infra/queries/homeQuery'

export async function getStaticProps({ preview }) {
  const data = await getContent(homeQuery, preview)

  return {
    props: {
      data
    }
  }
}

export default function Home(props) {
  const { data } = props
  const { home, social } = data
  const { socialMediaLinks } = social

  const { coverPicture, portfolioName, portfolioOwner, profilePicture } = home

  return (
    <PageWrapper
      seoProps={{
        pageTitle: 'Home'
      }}
      header
      footer
      socialMediaLinks={socialMediaLinks}
    >
      <Hero
        imageURL={coverPicture.url}
        imageAlt={coverPicture.alt}
        avatarURL={profilePicture.url}
        avatarAlt={profilePicture.alt}
      />
      <Container tag='section'>
        <Title
          textAlign={{
            xs: 'center',
            md: 'right'
          }}
        >
          {portfolioName}
        </Title>
        <Title
          titleTag='h1'
          textAlign={{
            xs: 'center',
            md: 'right'
          }}
        >
          {portfolioOwner}
        </Title>
      </Container>
    </PageWrapper>
  )
}

Home.propTypes = {
  data: PropTypes.objectOf(PropTypes.objectOf).isRequired
}
