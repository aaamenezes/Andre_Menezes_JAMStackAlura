import React from 'react'

import Header from '../src/components/common/header'
import Main from '../src/components/common/main'
import Title from '../src/components/text/title'
import SubTitle from '../src/components/text/subtitle'
import Footer from '../src/components/common/footer'

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <Title>
          André de Menezes
        </Title>
        <SubTitle>
          Portfront
        </SubTitle>
      </Main>
      <Footer />
    </React.Fragment>
  )
}
