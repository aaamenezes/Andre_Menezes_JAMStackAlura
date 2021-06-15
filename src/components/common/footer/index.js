import React from 'react'
import PropTypes from 'prop-types'
import Container from '../container'
import Icon from '../icon'
import LinkButton from '../linkButton'

export default function Footer({ socialMediaLinks }) {
  const linksElements = socialMediaLinks.split('---').map(link => {
    const socialLink = link.split(': ')[1]
    const socialName = link.split(': ')[0].toLowerCase().trim()

    return (
      <LinkButton href={socialLink} external key={socialName}>
        <Icon name={socialName} />
      </LinkButton>
    )
  })
  return (
    <Container
      tag='footer'
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
      height='60px'
      width={{
        md: '100%'
      }}
      maxWidth={{
        md: '500px'
      }}
      padding={{
        md: '0'
      }}
      backgroundColor='transparent'
    >
      {linksElements}
    </Container>
  )
}

Footer.propTypes = {
  socialMediaLinks: PropTypes.string.isRequired
}
