import Link from 'next/link'
import styled from 'styled-components'

import Container from '../../common/container'
import SubTitle from '../../text/subtitle'

const CardStyled = styled.article`
  margin: clamp(30px, 10%, 60px) 0;
  background-color: ${ ({theme}) => theme.color.support.white };
  box-shadow: ${ ({theme}) => theme.boxShadow.low };
  transition: ${ ({theme}) => theme.transition.medium };

  &:hover {
    box-shadow: ${ ({theme}) => theme.boxShadow.high };
  }

  a {
    display: ${ ({highLight}) => highLight ? 'block' : 'flex' };

    img {
      width: ${ ({highLight}) => highLight ? '100%' : '50%' };
    }
  }
`

CardStyled.TextWrapper = styled(Container)`
  display: ${ ({highLight}) => !highLight ? 'flex' : 'block' };
  align-items: ${ ({highLight}) => !highLight ? 'center' : false };
  width: ${ ({highLight}) => !highLight ? '50%' : false };
  padding: 5%;
`

function Card({cover, title, text, url, highLight}) {
  return (
    <CardStyled highLight={highLight}>
      <Link href={url}>
        <a>
          <img src={cover} />
          <CardStyled.TextWrapper highLight={highLight}>
            <SubTitle margin='0'>
              {title}
            </SubTitle>
            {highLight && <p>{text}</p>}
          </CardStyled.TextWrapper>
        </a>
      </Link>
    </CardStyled>
  )
}

export default Card