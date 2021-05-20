import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import breakpointsMedia from '../../../utils/breakpointsMedia'
import propToStyle from '../../../utils/propToStyle'

const AvatarStyled = styled.div`
  width: 50%;
  max-width: 250px;
  ${ propToStyle('position') }
  ${ propToStyle('transform') }
  ${ propToStyle('top') }
  ${ propToStyle('left') }
  ${ propToStyle('margin') }
`

const Crop = styled.div`
  display: block;

  ${ ({ positioned }) => {
    if (positioned) {
      return breakpointsMedia({
        xs: css`
          padding-top: 100%;
        `,
        md: css`
          padding-top: initial;
        `
      })
    }
    return undefined
  } }

  ${ propToStyle('paddingTop') }
`

const ImageStyled = styled.img`
  border-radius: 50%;

  ${ ({ positioned }) => {
    if (positioned) {
      return breakpointsMedia({
        xs: css`
          position: absolute;
          top: 0;
        `,
        md: css`
          position: initial;
        `
      })
    }
    return undefined
  } }

  ${ propToStyle('position') }
  ${ propToStyle('top') }
`

export default function Avatar({ imageUrl, position, ...props }) {
  return (
    <AvatarStyled position={position} {...props}>
      <Crop positioned={position === 'absolute'}>
        <ImageStyled
          src={imageUrl}
          alt='imagem de perfil'
          positioned={position === 'absolute'}
        />
      </Crop>
    </AvatarStyled>
  )
}

Avatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  position: PropTypes.string
}

Avatar.defaultProps = {
  position: undefined
}
