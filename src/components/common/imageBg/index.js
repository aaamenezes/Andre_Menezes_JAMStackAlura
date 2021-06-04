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
      : css`max-height: 50vh;`
  ) }
`

export default function ImageBg({ imageURL, imageAlt, fullHeight }) {
  return (
    <ImageBgStyled
      src={imageURL}
      fullHeight={fullHeight}
      alt={imageAlt}
    />
  )
}

ImageBg.propTypes = {
  imageURL: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  fullHeight: PropTypes.bool
}

ImageBg.defaultProps = {
  fullHeight: false
}
