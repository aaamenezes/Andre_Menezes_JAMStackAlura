import React from 'react'
import styled from 'styled-components'
import { Player } from '@lottiefiles/react-lottie-player'

import successAnimation from '../../animations/success.json'

const SuccessStyled = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`

function Success() {
  return (
    <SuccessStyled>
      <Player
        autoplay
        loop
        src={successAnimation}
        style={{ height: '300px', width: '300px' }}
      />
    </SuccessStyled>
  )
}

export default Success
