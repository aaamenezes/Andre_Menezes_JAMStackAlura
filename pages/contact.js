import React, { useState } from 'react'

import Header from '../src/components/common/header'
import Main from '../src/components/common/main'
import Container from '../src/components/common/container'
import Footer from '../src/components/common/footer'
import Modal from '../src/components/common/modal'
import Button from '../src/components/common/button'
import Title from '../src/components/text/title'
import Form from '../src/components/form'

export default function Contact() {
  const [ modalDisplay, setModalDisplay ] = useState(false)

  return (
    <>
      <Header />
      <Main padding='0'>
        <Container>

          <Button
            variant='primary'
            as='button'
            handleClick={setModalDisplay}
          >
            Fazer contato
          </Button>

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
        </Container>
      </Main>
      <Footer />
    </>
  )
}
