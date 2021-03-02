import React from 'react'
import styled from 'styled-components'
import Title from '../../text/title'
import Container from '../container'

function background({ theme }) {
  const color = theme.color.support.black
  const transparency = theme.backGroundTransparent.strong
  return color + transparency
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${ background };
`

const ModalStyled = styled(Container)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80vw;
  height: 80vh;
  padding: 10%;
  background-color: ${ ({ theme }) => theme.color.support.white };
`

function Modal() {
  return (
    <ModalBackdrop>
      <ModalStyled>
        <Title as='h2'>
          Fico feliz que queira me contatar!
        </Title>
        <form>
          <label htmlFor='name'>Seu nome</label>
          <input type='text' id='name' name='name' />
          <label htmlFor='email'>Seu email</label>
          <input type='email' id='email' name='email' />
          <label htmlFor='message'>Sua mensagem</label>
          <textarea id='message' name='message' />
        </form>
      </ModalStyled>
    </ModalBackdrop>
  )
}

export default Modal
