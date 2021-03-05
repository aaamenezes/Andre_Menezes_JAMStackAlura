import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import Title from '../../text/title'
import Container from '../container'
import Form from '../../form'

function background({ theme }) {
  const color = theme.color.support.black
  const transparency = theme.backGroundTransparent.strong
  return color + transparency
}

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: ${ ({ theme }) => theme.zIndex.ModalBackdrop };
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${ background };
`

const ModalStyled = styled(Container)`
  position: fixed;
  z-index: ${ ({ theme }) => theme.zIndex.modal };
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: clamp(250px, 70%, 500px);
  height: 80vh;
  padding: 10%;
  background-color: ${ ({ theme }) => theme.color.support.white };
`

function Modal({ setModalDisplay }) {
  return (
    <>
      <ModalBackdrop onClick={() => setModalDisplay(false)} />
      <ModalStyled>
        <Title as='h2'>
          Fico feliz que queira me contatar!
        </Title>
        <Form />
      </ModalStyled>
    </>
  )
}

Modal.propTypes = {
  setModalDisplay: PropTypes.func.isRequired
}

export default Modal
