import React from 'react'
import Container from '../container'
import Icon from '../icon'
import LinkButton from '../../common/linkButton'

export default function FooterWrapper() {
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
      <LinkButton href='https://github.com/aaamenezes' external>
        <Icon name='github' />
      </LinkButton>
      <LinkButton href='https://twitter.com/aaamenezes' external>
        <Icon name='twitter' />
      </LinkButton>
      <LinkButton href='https://aaamenezes.medium.com/' external>
        <Icon name='medium' />
      </LinkButton>
    </Container>
  )
}
