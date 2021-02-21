import Link from 'next/link'
import styled from 'styled-components'
import Container from '../../common/container'

const CardStyled = styled.article`
  margin: 20% 0;
  background-color: ${ ({theme}) => theme.color.support.white };
  box-shadow: ${ ({theme}) => theme.boxShadow.low };
  transition: ${ ({theme}) => theme.transition.medium };

  &:hover { box-shadow: ${ ({theme}) => theme.boxShadow.high }; }

  a {
    display: ${ (props) => console.log(props) };

    img {
      width: 50%;
    }
  }
`

function Card({cover, title, text, url, highLight}) {
  return (
    <CardStyled>
      <Link href={url}>
        <a>
          <img src={cover} />
          <Container width='50%' padding='5%'>
            <h2>{title}</h2>
            {highLight ? <p>{text}</p> : false}
          </Container>
        </a>
      </Link>
    </CardStyled>
  )
}

export default Card