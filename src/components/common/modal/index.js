import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import Container from '../container'

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

  width: 95%;
  max-width: 600px;
  min-height: 80vh;
  background-color: ${ ({ theme }) => theme.color.support.white };
`

const LockScroll = createGlobalStyle` body { overflow: hidden; } `

function Modal({ setModalDisplay, children }) {
  return (
    <>
      <LockScroll />
      <ModalBackdrop onClick={() => setModalDisplay(false)} />
      <ModalStyled>
        {children}
      </ModalStyled>
    </>
  )
}

Modal.propTypes = {
  setModalDisplay: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Modal
