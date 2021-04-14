import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import propToStyle from '../../utils/propToStyle'

const TitleStyled = styled.h2`
  ${ propToStyle('margin') }
  ${ propToStyle('textAlign') }
`

function Title({ titleTag, children, ...props }) {
  return (
    <TitleStyled as={titleTag} {...props}>
      {children}
    </TitleStyled>
  )
}

Title.propTypes = {
  titleTag: PropTypes.string,
  children: PropTypes.node.isRequired
}

Title.defaultProps = {
  titleTag: 'h2'
}

export default Title
