import React from 'react'

import Container from '../src/components/common/container/container'
import Header from '../src/components/common/header'
import Title from '../src/components/text/title'
import SubTitle from '../src/components/text/subtitle'
import Icon from '../src/components/common/icon'
import Footer from '../src/components/common/footer'

export default function Home() {
  return (
    <React.Fragment>
      <Header>
        <Container>
          <Icon type='bars' />
        </Container>
      </Header>
      <Container>
        <Title>
          André de Menezes
        </Title>
        <SubTitle>
          Portfront
        </SubTitle>
      </Container>
      <Footer>
        <Container
          display='flex'
          justifyContent='space-evenly'
          alignItems='center'
        >
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </Container>
      </Footer>
    </React.Fragment>
  )
}
