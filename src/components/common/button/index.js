import Link from 'next/link'
import styled from 'styled-components'

const ButtonStyled = styled.a`
  padding: 5px 10px;
  border: 1px solid ${ ({theme}) => theme.color.primary.normal };
  border-radius: ${ ({theme}) => theme.borderRadius };
  font-weight: bold;
  cursor: pointer;

  ${ ({variant, theme}) => {
    if (variant === 'primary') {
      return {
        color: theme.color.support.white,
        backgroundColor: theme.color.primary.normal
      }
    } else if (variant === 'secondary') {
      return {
        color: theme.color.support.black,
        backgroundColor: theme.color.support.white
      }
    }
  }};
`

function Button({variant, children, url}) {

  return (
    <Link href={url} passHref>
      <ButtonStyled variant={variant}>
        {children}
      </ButtonStyled>
    </Link>
  )
}

export default Button