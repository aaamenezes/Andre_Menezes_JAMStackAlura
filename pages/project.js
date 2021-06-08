import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../src/components/common/hero'
import Title from '../src/components/title'
import Text from '../src/components/text'
import Container from '../src/components/common/container'
import Image from '../src/components/common/image'
import YouTube from '../src/components/common/youtube'
import Swiper from '../src/components/common/swiper'
import PageWrapper from '../src/components/wrappers/pageWrapper'
import { getContent } from '../src/utils/getContent'

export async function getStaticProps({ preview }) {
  const query = `
    query {
      project {
        coverImage(locale: pt_BR) {
          url
          alt
        }
        phrase
        projectTitle
        firstParagraph
        bodyImage(locale: pt_BR) {
          url
          alt
        }
        secondParagraph
        bodyVideo {
          title
          url
        }
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

export default function Project(props) {
  const { data } = props
  const { project } = data

  const {
    coverImage,
    projectTitle,
    phrase,
    firstParagraph,
    bodyImage,
    secondParagraph,
    bodyVideo
  } = project

  return (
    <PageWrapper
      seoProps={{
        pageTitle: 'Projeto [projectName]'
      }}
      header
      footer
    >
      <Hero
        imageURL={coverImage.url}
        imageAlt={`${ projectTitle } - ${ phrase }`}
        phrase={phrase}
        fullHeight
      />
      <Container tag='section'>
        <Title titleTag='h1'>
          {projectTitle}
        </Title>
        <Text external>{firstParagraph}</Text>
        <Image
          src={bodyImage.url}
          alt={bodyImage.alt}
          marginBottom='30px'
        />
        <Text external>{secondParagraph}</Text>
      </Container>
      <Container tag='section'>
        <YouTube
          src={bodyVideo.url.replace('watch?v=', 'embed/').split('&')[0]}
          alt={bodyVideo.title}
        />
      </Container>
      <Container tag='section'>
        <Swiper projectsList={[
          {
            cover: '/images/code.jpg',
            title: 'Projeto 1',
            url: '/#'
          },
          {
            cover: '/images/code.jpg',
            title: 'Projeto 2',
            url: '/#'
          },
          {
            cover: '/images/code.jpg',
            title: 'Projeto 3',
            url: '/#'
          },
          {
            cover: '/images/code.jpg',
            title: 'Projeto 4',
            url: '/#'
          },
          {
            cover: '/images/code.jpg',
            title: 'Projeto 5',
            url: '/#'
          },
          {
            cover: '/images/code.jpg',
            title: 'Projeto 6',
            url: '/#'
          },
          {
            cover: '/images/code.jpg',
            title: 'Projeto 7',
            url: '/#'
          }
        ]}
        />
      </Container>
    </PageWrapper>
  )
}

Project.propTypes = {
  data: PropTypes.objectOf(PropTypes.objectOf).isRequired
}
