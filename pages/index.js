import React from 'react'

import Header from '../src/components/common/header'
import Main from '../src/components/common/main'
import Hero from '../src/components/common/hero'
import Container from '../src/components/common/container'
import Title from '../src/components/text/title'
import SubTitle from '../src/components/text/subtitle'
import Footer from '../src/components/common/footer'
import Card from '../src/components/projects/card'
import CardWrapper from '../src/components/projects/cardWrapper'

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Main padding='0'>
        {/* <Hero />
        <Container tag='section'>
          <Title>
            PortFront
          </Title>
          <SubTitle>
            André de Menezes
          </SubTitle>
        </Container> */}
        <Container tag='section'> 
          <h1>Projetos</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam non libero. Laborum libero iste mollitia nisi ducimus sequi quas dolorum cupiditate quibusdam, tenetur veritatis amet obcaecati fugit animi minima.</p>
        </Container>
        <CardWrapper />
      </Main>
      <Footer />
    </React.Fragment>
  )
}
