import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Container from '../src/components/common/container'
import Header from '../src/components/common/header'
import Main from '../src/components/common/main'
import Footer from '../src/components/common/footer'
import Text from '../src/components/text'

const Iframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 90vh;
`

function Page404() {
  return (
    <>
      <Header />
      <Main padding='0'>
        <Container tag='section' padding='5% 10%'>
          <Text>Página não encontrada... :/</Text>
          <Text>
            Enquanto isso, se diverta no nosso gerador de cores aleatórias:
          </Text>
          <Text>
            Use a tela abaixo, ou acesse
            {' '}
            <Link href='https://codepen.io/aaamenezes/full/GRrqYxz'>
              <a
                href='https://codepen.io/aaamenezes/full/GRrqYxz'
                target='_blank'
                rel='noreferrer'
              >
                diretamente aqui.
              </a>
            </Link>
          </Text>
          <Iframe
            src='https://codepen.io/aaamenezes/full/GRrqYxz'
            title='Gerador de cores aleatórias via CodePen'
          />
        </Container>
      </Main>
      <Footer />
    </>
  )
}

export default Page404
