import React from 'react'

import Header from '../src/components/common/header'
import Main from '../src/components/common/main'
import Hero from '../src/components/common/hero'
import Container from '../src/components/common/container'
import Title from '../src/components/text/title'
import SubTitle from '../src/components/text/subtitle'
import Footer from '../src/components/common/footer'
import Card from '../src/components/projects/card'

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
        <Container tag='section'>
          <Card
            cover='/images/code.jpg'
            title='Projeto 1'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam non libero.'
            url='https://www.google.com/'
            highLight
          />
          <Card
            cover='/images/code.jpg'
            title='Projeto 1'
            url='https://www.google.com/'
          />
          <Card
            cover='/images/code.jpg'
            title='Projeto 1'
            url='https://www.google.com/'
          />
        </Container>
      </Main>
      <Footer />
    </React.Fragment>
  )
}
