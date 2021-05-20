import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const YouTubeWrapper = styled.iframe`
  width: 100%;
  height: 539px;
  border: none;
`

export default function YouTube({ src, alt }) {
  return (
    <YouTubeWrapper
      src={src}
      title={alt}
      allow='
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture
      '
      allowFullScreen
    />
  )
}

YouTube.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
