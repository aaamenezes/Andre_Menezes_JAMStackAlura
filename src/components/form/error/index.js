import React from 'react'
import styled from 'styled-components'
import { Player } from '@lottiefiles/react-lottie-player'

import ErrorAnimation from '../../animations/error.json'

const ErrorStyled = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`

function Error() {
  return (
    <ErrorStyled>
      <Player
        autoplay
        loop
        src={ErrorAnimation}
        style={{ height: '300px', width: '300px' }}
      />
    </ErrorStyled>
  )
}

export default Error
