import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import propToStyle from '../../../utils/propToStyle'
import breakpointsMedia from '../../../utils/breakpointsMedia'

const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-left: 10%;
  padding-right: 10%;
  margin-left: auto;
  margin-right: auto;

  ${ ({ as }) => {
    if (as === 'section') {
      return css`&:not(:last-child) { ${ breakpointsMedia({
        xs: css`margin-bottom: 50px;`,
        sm: css`margin-bottom: 70px;`,
        md: css`margin-bottom: 90px;`,
        lg: css`margin-bottom: 100px;`
      }) }}`
    }

    return undefined
  } }

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

export default function Container({ tag, children, ...props }) {
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
