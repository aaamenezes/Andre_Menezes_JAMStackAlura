import React from 'react'
import styled from 'styled-components'
import { Player } from '@lottiefiles/react-lottie-player'

import loadingAnimation from '../../animations/loading.json'

const LoadingStyled = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`

function Loading() {
  return (
    <LoadingStyled>
      <Player
        autoplay
        loop
        src={loadingAnimation}
        style={{ height: '300px', width: '300px' }}
      />
    </LoadingStyled>
  )
}

export default Loading
