import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import propToStyle from '../../../utils/propToStyle'

const TitleStyled = styled.h2`
  color: ${ ({ theme }) => theme.color.support.black };
  ${ propToStyle('textAlign') }
  ${ propToStyle('margin') }
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
