import React from 'react'
import styled from 'styled-components'
import Container from '../src/components/common/container'
import Text from '../src/components/text'
import LinkButton from '../src/components/common/linkButton'
import PageWrapper from '../src/components/wrappers/pageWrapper'

const Iframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 90vh;
`

export default function Page404() {
  return (
    <PageWrapper
      seoProps={{
        pageTitle: 'Página perdida'
      }}
      header
      footer
    >
      <Container tag='section' padding='5% 10%'>
        <Text>Página não encontrada... :/</Text>
        <Text>
          Enquanto isso, se diverta no nosso gerador de cores aleatórias:
        </Text>
        <Text>
          Use a tela abaixo, ou acesse
          {' '}
          <LinkButton
            href='https://codepen.io/aaamenezes/full/GRrqYxz'
            external
            inline
          >
            diretamente aqui
          </LinkButton>
          .
        </Text>
        <Iframe
          src='https://codepen.io/aaamenezes/full/GRrqYxz'
          title='Gerador de cores aleatórias via CodePen'
        />
      </Container>
    </PageWrapper>
  )
}
