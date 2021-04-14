import React from 'react'

import Header from '../src/components/common/header'
import Main from '../src/components/common/main'
import Container from '../src/components/common/container'
import Footer from '../src/components/common/footer'
import CardWrapper from '../src/components/projects/cardWrapper'

export default function Projects() {
  return (
    <>
      <Header />
      <Main padding='0'>
        <Container tag='section'>
          <h1>Projetos</h1>
          {/* eslint-disable-next-line max-len */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam non libero. Laborum libero iste mollitia nisi ducimus sequi quas dolorum cupiditate quibusdam, tenetur veritatis amet obcaecati fugit animi minima.</p>
        </Container>
        <CardWrapper />
      </Main>
      <Footer />
    </>
  )
}
