import React from 'react'
import { useRouter } from 'next/router'

import styled from 'styled-components'
import Container from '../container'
import theme from '../../../theme'
import LinkButton from '../linkButton'

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

  const navbarLinksElements = navbarLinksList.map(page => (
    <li key={page.url}>
      <LinkButton
        href={page.url}
        variant={router.pathname === page.url ? 'primary' : 'secondary'}
      >
        {page.title}
      </LinkButton>
    </li>
  ))

  return (
    <Container
      tag='header'
      display='flex'
      alignItems='center'
      maxWidth='initial'
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
          md: '100%'
        }}
        maxWidth={{
          md: '500px'
        }}
      >
        <LinksList>
          {navbarLinksElements}
        </LinksList>
      </Container>
    </Container>
  )
}

export default Header
