import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import propToStyle from '../../../utils/propToStyle'

const ContainerStyled = styled.div`
  width: clamp(200px, 100%, 1200px);
  padding-left: 10%;
  padding-right: 10%;
  margin-left: auto;
  margin-right: auto;
  ${ propToStyle('position') };
  ${ propToStyle('display') };
  ${ propToStyle('justifyContent') };
  ${ propToStyle('alignItems') };
  ${ propToStyle('height') };
  ${ propToStyle('width') };
  ${ propToStyle('minHeight') };
  ${ propToStyle('padding') };
  ${ propToStyle('paddingTop') };
  ${ propToStyle('paddingRight') };
  ${ propToStyle('paddingBottom') };
  ${ propToStyle('paddingLeft') };
  ${ propToStyle('marginTop') };
  ${ propToStyle('marginRight') };
  ${ propToStyle('marginBottom') };
  ${ propToStyle('marginLeft') };
  ${ propToStyle('lineHeight') };
  ${ propToStyle('backgroundColor') };
  ${ propToStyle('boxShadow') };
`

function Container({ tag, children, ...props }) {
  return (
    <ContainerStyled
      as={tag}
      {...props}
    >
      {children}
    </ContainerStyled>
  )
}

Container.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired
}

Container.defaultProps = {
  tag: 'div'
}

export default Container
