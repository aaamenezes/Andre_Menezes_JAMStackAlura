import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import breakpointsMedia from '../../../utils/breakpointsMedia'

const GridImagesStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 15%);

  ${ breakpointsMedia({
    xs: css`grid-gap: 10px;`,
    sm: css`grid-gap: 15px;`,
    md: css`grid-gap: 20px;`,
    lg: css`grid-gap: 25px;`
  }) }

  div {
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    &:nth-child(1) { grid-row: 1 / 3; }
    &:nth-child(2) {}
    &:nth-child(3) {}
    &:nth-child(4) { grid-column: 1 / 3; }
    &:nth-child(5) {}
    &:nth-child(6) { grid-row: 4 / 6; grid-column: 2 / 3; }
    &:nth-child(7) {}
  }
`

function GridImages({ images }) {
  const imageElements = images.map(image => (
    <div>
      <img src={image.url} alt={image.alt} />
    </div>
  ))

  return (
    <GridImagesStyled>
      {imageElements}
    </GridImagesStyled>
  )
}

GridImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default GridImages