import styled from "styled-components"

const AvatarStyled = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 100%;
  left: 50%;
  width: clamp(100px, 50%, 250px);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Crop = styled.div`
  padding-top: 100%;
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