import React from 'react'
import PropTypes from 'prop-types'

import Container from '../container'

export default function Main({ children, ...props }) {
  return (
    <Container
      tag='main'
      padding='0'
      maxWidth='initial'
      minHeight='calc(100vh - 60px - 60px)'
      {...props}
    >
      {children}
    </Container>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}
