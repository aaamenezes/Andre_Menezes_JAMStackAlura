import styled, { css } from "styled-components"
import breakpointsMedia from '../../../utils/breakpointsMedia'

const AvatarStyled = styled.div`
  width: clamp(100px, 50%, 250px);

  ${breakpointsMedia({
    xs: css`
      position: absolute;
      transform: translate(-50%, -50%);
      top: 100%;
      left: 50%;
    `,
    md: css`
      transform: translate(0, -50%);
      top: initial;
      left: 10%;
    `
  })}

  img {
    border-radius: 50%;

    ${breakpointsMedia({
      xs: css`
        position: absolute;
        top: 0;
      `,
      md: css`
        position: initial;
      `
    })}
  }
`

const Crop = styled.div`
  ${breakpointsMedia({
    xs: css`
      padding-top: 100%;
    `,
    md: css`
      padding-top: initial;
    `
  })}
`

function Avatar({imageUrl}) {
  return (
    <AvatarStyled>
      <Crop>
        <img src={imageUrl} />
      </Crop>
    </AvatarStyled>
  )
}

export default Avatar