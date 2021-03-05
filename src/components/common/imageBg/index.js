import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

const ImageBgStyled = styled.img`
  position: relative;
  z-index: -1;
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`

function ImageBg({ imageUrl, children }) {
  return (
    <ImageBgStyled src={imageUrl}>
      {children}
    </ImageBgStyled>
  )
}

ImageBg.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default ImageBg
