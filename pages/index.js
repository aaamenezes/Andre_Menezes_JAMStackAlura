import React from 'react'
import Hero from '../src/components/common/hero'
import Container from '../src/components/common/container'
import Title from '../src/components/title'
import PageWrapper from '../src/components/wrappers/pageWrapper'

export default function Home() {
  return (
    <PageWrapper seoProps={{
      pageTitle: 'Home'
    }}
    >
      <Hero imageURL='/images/code.jpg' avatarURL='/images/avatar.jpeg' />
      <Container tag='section'>
        <Title
          textAlign={{
            xs: 'center',
            md: 'right'
          }}
        >
          PortFront
        </Title>
        <Title
          titleTag='h1'
          textAlign={{
            xs: 'center',
            md: 'right'
          }}
        >
          André de Menezes
        </Title>
      </Container>
    </PageWrapper>
  )
}
