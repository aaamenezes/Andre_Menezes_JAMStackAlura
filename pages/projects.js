import React from 'react'
import Container from '../src/components/common/container'
import CardWrapper from '../src/components/projects/cardWrapper'
import PageWrapper from '../src/components/wrappers/pageWrapper'

export default function Projects() {
  return (
    <PageWrapper seoProps={{
      pageTitle: 'Projetos'
    }}
    >
      <Container tag='section'>
        <h1>Projetos</h1>
        {/* eslint-disable-next-line max-len */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam non libero. Laborum libero iste mollitia nisi ducimus sequi quas dolorum cupiditate quibusdam, tenetur veritatis amet obcaecati fugit animi minima.</p>
      </Container>
      <CardWrapper />
    </PageWrapper>
  )
}
