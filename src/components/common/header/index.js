import { useRouter } from 'next/router'

import Container from '../container'
import Icon from '../../common/icon'
import theme from '../../../theme'
import Button from '../button'
import styled from 'styled-components'

const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {

  const navbarLinksList = [
    { title: 'Home', url: '/', },
    { title: 'Projetos', url: '/projects', },
    { title: 'Sobre', url: '/about', }
  ]

  const navbarLinks = navbarLinksList.map(page => {

    const router = useRouter()
    console.log(router)

    return (
      <li key={page.url}>
        <Button
          url={page.url}
          variant={router.pathname === page.url ? 'primary' : 'secondary'}
        >
          {page.title}
        </Button>
      </li>
    )
  })

  return (
    <Container
      tag='header'
      display='flex'
      alignItems='center'
      height='60px'
      padding='0'
      boxShadow='0 0 30px -20px black'
      backgroundColor={theme.color.support.white}
    >
      <Container
        tag='nav'
      >
        <LinksList>
          {navbarLinks}
        </LinksList>
      </Container>
    </Container>
  )
}

export default Header