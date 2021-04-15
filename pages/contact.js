import React, { useState } from 'react'

import Header from '../src/components/common/header'
import Main from '../src/components/common/main'
import Container from '../src/components/common/container'
import Footer from '../src/components/common/footer'
import Modal from '../src/components/common/modal'
import Button from '../src/components/common/button'
import Title from '../src/components/title'
import Form from '../src/components/form'
import Avatar from '../src/components/common/avatar'
import Text from '../src/components/text'
import theme from '../src/theme'
import GridImages from '../src/components/common/gridImages'

export default function Contact() {
  const [ modalDisplay, setModalDisplay ] = useState(false)

  return (
    <>
      <Header />
      <Main padding='0' maxWidth='initial'>
        <Container as='section'>

          <Title>
            Que bom que você veio
          </Title>

          <Avatar imageUrl='/images/avatar.jpeg' margin='0 auto' />

          <Title titleTag='h1'>
            Sobre mim
          </Title>
        </Container>

        <Container as='section' padding='10%'>
          {/* eslint-disable-next-line max-len */}
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, rerum. Doloremque quae provident laudantium sed quas, id aliquam adipisci tempora ex itaque qui dolor reiciendis hic velit sequi omnis molestiae.</Text>

          {/* eslint-disable-next-line max-len */}
          <Text>Laboriosam odio odit molestiae veritatis aspernatur. Odio, ratione atque expedita dolorem neque quo mollitia obcaecati molestiae excepturi repellendus voluptatibus. Cum, aperiam nobis? Mollitia excepturi ex accusantium quod pariatur, tempora sunt!</Text>

          {/* eslint-disable-next-line max-len */}
          <Text>Aliquid, eaque doloribus autem nobis voluptatem ullam officia repellendus animi magnam modi, dolor possimus molestias. Aspernatur voluptate neque debitis quas sit, sint fugit totam aperiam vero! Ab, sed? Quisquam, voluptates.</Text>

          {/* eslint-disable-next-line max-len */}
          <Text>Commodi, tempore perferendis excepturi atque distinctio sint iusto aut voluptatem assumenda, odit nesciunt asperiores eius. Eos neque dicta aut alias non soluta mollitia facere iste, minus aliquam amet sapiente autem.</Text>

          {/* eslint-disable-next-line max-len */}
          <Text>Autem culpa necessitatibus expedita reiciendis debitis totam quis vel neque vitae nemo praesentium reprehenderit voluptatem, rerum voluptate molestias, minus in? Vero ratione rem aliquam repellendus praesentium omnis eius quidem excepturi.</Text>
        </Container>

        <Container
          as='section'
          padding='0'
          color={theme.color.support.white}
          backgroundColor={theme.color.support.black}
          maxWidth='initial'
        >
          <Container
            padding='10%'
          >

            <Avatar
              // eslint-disable-next-line max-len
              imageUrl='https://i.picsum.photos/id/719/600/600.jpg?hmac=1q45aclFnkzu-iEnjJamWFQ4fN_5zwz1d1uguTvmr9U'
              margin='0 auto 30px'
            />

            {/* eslint-disable-next-line max-len */}
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, rerum. Doloremque quae provident laudantium sed quas, id aliquam adipisci tempora ex itaque qui dolor reiciendis hic velit sequi omnis molestiae.</Text>

            {/* eslint-disable-next-line max-len */}
            <Text>Laboriosam odio odit molestiae veritatis aspernatur. Odio, ratione atque expedita dolorem neque quo mollitia obcaecati molestiae excepturi repellendus voluptatibus. Cum, aperiam nobis? Mollitia excepturi ex accusantium quod pariatur, tempora sunt!</Text>

            <Avatar
              // eslint-disable-next-line max-len
              imageUrl='https://i.picsum.photos/id/719/600/600.jpg?hmac=1q45aclFnkzu-iEnjJamWFQ4fN_5zwz1d1uguTvmr9U'
              margin='0 auto 30px'
            />

            {/* eslint-disable-next-line max-len */}
            <Text>Aliquid, eaque doloribus autem nobis voluptatem ullam officia repellendus animi magnam modi, dolor possimus molestias. Aspernatur voluptate neque debitis quas sit, sint fugit totam aperiam vero! Ab, sed? Quisquam, voluptates.</Text>

            {/* eslint-disable-next-line max-len */}
            <Text>Commodi, tempore perferendis excepturi atque distinctio sint iusto aut voluptatem assumenda, odit nesciunt asperiores eius. Eos neque dicta aut alias non soluta mollitia facere iste, minus aliquam amet sapiente autem.</Text>

            {/* eslint-disable-next-line max-len */}
            <Text>Autem culpa necessitatibus expedita reiciendis debitis totam quis vel neque vitae nemo praesentium reprehenderit voluptatem, rerum voluptate molestias, minus in? Vero ratione rem aliquam repellendus praesentium omnis eius quidem excepturi.</Text>
          </Container>
        </Container>

        <Container
          as='section'
          padding='10%'
        >
          <GridImages
            images={[
              {
                // eslint-disable-next-line max-len
                url: 'https://i.picsum.photos/id/719/600/600.jpg?hmac=1q45aclFnkzu-iEnjJamWFQ4fN_5zwz1d1uguTvmr9U',
                alt: 'Alt imagem 1'
              },
              {
                // eslint-disable-next-line max-len
                url: 'https://i.picsum.photos/id/719/600/600.jpg?hmac=1q45aclFnkzu-iEnjJamWFQ4fN_5zwz1d1uguTvmr9U',
                alt: 'Alt imagem 2'
              },
              {
                // eslint-disable-next-line max-len
                url: 'https://i.picsum.photos/id/719/600/600.jpg?hmac=1q45aclFnkzu-iEnjJamWFQ4fN_5zwz1d1uguTvmr9U',
                alt: 'Alt imagem 3'
              },
              {
                // eslint-disable-next-line max-len
                url: 'https://i.picsum.photos/id/719/600/600.jpg?hmac=1q45aclFnkzu-iEnjJamWFQ4fN_5zwz1d1uguTvmr9U',
                alt: 'Alt imagem 4'
              },
              {
                // eslint-disable-next-line max-len
                url: 'https://i.picsum.photos/id/719/600/600.jpg?hmac=1q45aclFnkzu-iEnjJamWFQ4fN_5zwz1d1uguTvmr9U',
                alt: 'Alt imagem 5'
              },
              {
                // eslint-disable-next-line max-len
                url: 'https://i.picsum.photos/id/719/600/600.jpg?hmac=1q45aclFnkzu-iEnjJamWFQ4fN_5zwz1d1uguTvmr9U',
                alt: 'Alt imagem 6'
              },
              {
                // eslint-disable-next-line max-len
                url: 'https://i.picsum.photos/id/719/600/600.jpg?hmac=1q45aclFnkzu-iEnjJamWFQ4fN_5zwz1d1uguTvmr9U',
                alt: 'Alt imagem 7'
              },
            ]}
          />
        </Container>

        <Container as='section'>

          <Button
            variant='primary'
            as='button'
            handleClick={setModalDisplay}
          >
            Fazer contato
          </Button>

        </Container>

        {modalDisplay && (
          <Modal
            setModalDisplay={setModalDisplay}
            modalDisplay={modalDisplay}
          >
            <Title>
              Fico feliz que queira me contatar!
            </Title>
            <Form setModalDisplay={setModalDisplay} />
          </Modal>
        )}
      </Main>
      <Footer />
    </>
  )
}
