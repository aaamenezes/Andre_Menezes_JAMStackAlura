import React from 'react'
import Header from '../src/components/common/header'
import Main from '../src/components/common/main'
import Hero from '../src/components/common/hero'
import Container from '../src/components/common/container'
import Title from '../src/components/title'
import Footer from '../src/components/common/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Main padding='0'>
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
      </Main>
      <Footer />
    </>
  )
}
