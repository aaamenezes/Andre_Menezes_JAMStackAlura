import styled from "styled-components"

const ImageBgStyled = styled.img`
  position: relative;
  z-index: -1;
`

function ImageBg({imageUrl, children}) {
  return (
    <ImageBgStyled src={imageUrl}>
      {children}
    </ImageBgStyled>
  )
}

export default ImageBg