import React from 'react'
import Header from '../src/components/common/header'
import Main from '../src/components/common/main'
import Footer from '../src/components/common/footer'
import Hero from '../src/components/common/hero'

function Project() {
  return (
    <>
      <Header />
      <Main>
        <Hero
          imageURL='/images/project-cover.jpg'
          phrase='Frase de efeito para a capa do projeto'
          fullHeight
        />
      </Main>
      <Footer />
    </>
  )
}

export default Project
