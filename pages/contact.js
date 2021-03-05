import React, { useState } from 'react'

import Header from '../src/components/common/header'
import Main from '../src/components/common/main'
import Container from '../src/components/common/container'
import Footer from '../src/components/common/footer'
import Modal from '../src/components/common/modal'
import Button from '../src/components/common/button'

export default function Home() {
  const [ modalDisplay, setModalDisplay ] = useState(false)
  return (
    <>
      <Header />
      <Main padding='0'>
        <Container>
          <Button
            variant='primary'
            as='button'
            setModalDisplay={setModalDisplay}
          >
            Fazer contato
          </Button>
          {modalDisplay && <Modal setModalDisplay={setModalDisplay} />}
        </Container>
      </Main>
      <Footer />
    </>
  )
}
