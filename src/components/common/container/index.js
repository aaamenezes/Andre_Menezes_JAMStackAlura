import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import propToStyle from '../../../utils/propToStyle'

const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-left: 10%;
  padding-right: 10%;
  margin-left: auto;
  margin-right: auto;
  ${ propToStyle('position') };
  ${ propToStyle('display') };
  ${ propToStyle('justifyContent') };
  ${ propToStyle('alignItems') };
  ${ propToStyle('gridTemplateColumns') };
  ${ propToStyle('gridGap') };
  ${ propToStyle('height') };
  ${ propToStyle('width') };
  ${ propToStyle('maxWidth') };
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
  ${ propToStyle('color') };
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
