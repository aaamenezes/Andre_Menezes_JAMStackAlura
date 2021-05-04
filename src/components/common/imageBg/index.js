import React from 'react'

import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const ImageBgStyled = styled.img`
  position: relative;
  z-index: -1;
  width: 100%;
  object-fit: cover;

  ${ ({ fullHeight }) => (
    fullHeight
      ? css`height: 100%;`
      : css`max-height: 300px;`
  ) }
`

function ImageBg({ imageURL, fullHeight }) {
  return (
    <ImageBgStyled src={imageURL} fullHeight />
  )
}

ImageBg.propTypes = {
  imageURL: PropTypes.string.isRequired,
  fullHeight: PropTypes.bool
}

ImageBg.defaultProps = {
  fullHeight: false
}

export default ImageBg
