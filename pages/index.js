import React from 'react'

import Header from '../src/components/common/header'
import Main from '../src/components/common/main'
import Title from '../src/components/text/title'
import SubTitle from '../src/components/text/subtitle'
import Footer from '../src/components/common/footer'
import Hero from '../src/components/common/hero'
import Container from '../src/components/common/container'

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Main padding='0'>
        <Hero />
        <Container tag='section'>
          <Title>
            André de Menezes
          </Title>
          <SubTitle>
            Portfront
          </SubTitle>
        </Container>
      </Main>
      <Footer />
    </React.Fragment>
  )
}
