import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getNewChildren } from './getNewChildren'

const TextStyled = styled.p`
  display: block;
`

export default function Text({
  textTag, children, external, ...props
}) {
  if (external) {
    return (
      <TextStyled
        as={textTag}
        dangerouslySetInnerHTML={{ __html: getNewChildren(children) }}
      />
    )
  }

  return (
    <TextStyled as={textTag} {...props}>
      {children}
    </TextStyled>
  )
}

Text.propTypes = {
  textTag: PropTypes.string,
  children: PropTypes.node,
  external: PropTypes.bool
}

Text.defaultProps = {
  textTag: 'p',
  children: undefined,
  external: false
}
