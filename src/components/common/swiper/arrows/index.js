import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ArrowButtonStyled = styled.div`
  color: ${ ({ theme }) => theme.color.primary.light };
  pointer-events: none;
`

export default function ArrowButton({ direction }) {
  return <ArrowButtonStyled className={`swiper-button-${ direction }`} />
}

ArrowButton.propTypes = {
  direction: PropTypes.string.isRequired
}
