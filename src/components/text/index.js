import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextStyled = styled.p`
  display: block;
`

function Text({ textTag, children, ...props }) {
  return (
    <TextStyled as={textTag} {...props}>
      {children}
    </TextStyled>
  )
}

Text.propTypes = {
  textTag: PropTypes.string,
  children: PropTypes.node.isRequired
}

Text.defaultProps = {
  textTag: 'p'
}

export default Text
