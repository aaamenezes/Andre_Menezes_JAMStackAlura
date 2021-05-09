import React from 'react'
import Header from '../src/components/common/header'
import Main from '../src/components/common/main'
import Footer from '../src/components/common/footer'
import Hero from '../src/components/common/hero'
import Title from '../src/components/title'
import Text from '../src/components/text'
import Container from '../src/components/common/container'
import Image from '../src/components/common/image'
import YouTube from '../src/components/common/youtube'
import Swiper from '../src/components/common/swiper'

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
        <Container tag='section'>
          <Title titleTag='h1'>
            Título do projeto
          </Title>
          <Text>
            {/* eslint-disable-next-line max-len */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium exercitationem reiciendis iusto, est nulla alias? Ab, odio corporis! Nulla ad mollitia recusandae voluptates eius sunt assumenda vero? Sunt, consequuntur ipsum.
          </Text>
          <Image
            src='/images/600.png'
            alt='Project Image'
            marginBottom='30px'
          />
          <Text>
            {/* eslint-disable-next-line max-len */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium exercitationem reiciendis iusto, est nulla alias? Ab, odio corporis! Nulla ad mollitia recusandae voluptates eius sunt assumenda vero? Sunt, consequuntur ipsum.
          </Text>
        </Container>
        <Container tag='section'>
          <YouTube
            src='https://www.youtube.com/embed/Jf4yrdWQXvQ'
            alt='Apresentação do projeto'
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
      </Main>
      <Footer />
    </>
  )
}

export default Project
