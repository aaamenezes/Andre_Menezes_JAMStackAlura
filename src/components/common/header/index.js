import React from 'react'
import { useRouter } from 'next/router'

import styled from 'styled-components'
import Container from '../container'
import theme from '../../../theme'
import Button from '../button'

const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  const router = useRouter()

  const navbarLinksList = [
    { title: 'Home', url: '/' },
    { title: 'Projetos', url: '/projects' },
    { title: 'Contato', url: '/contact' }
  ]

  const navbarLinks = navbarLinksList.map(page => (
    <li key={page.url}>
      <Button
        url={page.url}
        variant={router.pathname === page.url ? 'primary' : 'secondary'}
      >
        {page.title}
      </Button>
    </li>
  ))

  return (
    <Container
      tag='header'
      display='flex'
      alignItems='center'
      width='100%'
      height='60px'
      padding='0'
      boxShadow='0 0 30px -20px black'
      backgroundColor={theme.color.support.white}
    >
      <Container
        tag='nav'
        padding={{
          md: '0'
        }}
        width={{
          md: 'clamp(200px, 100%, 500px);'
        }}
      >
        <LinksList>
          {navbarLinks}
        </LinksList>
      </Container>
    </Container>
  )
}

export default Header
