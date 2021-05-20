import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import propToStyle from '../../../utils/propToStyle'

const ImageStyled = styled.img`
  ${ propToStyle('marginBottom') }
`

export default function Image({ src, alt, ...props }) {
  return (
    <ImageStyled src={src} alt={alt} {...props} />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
