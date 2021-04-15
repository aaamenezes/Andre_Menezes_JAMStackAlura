import React from 'react'
import Link from 'next/link'

import Container from '../container'
import Icon from '../icon'

function FooterWrapper() {
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
      <Link href='https://github.com/aaamenezes'>
        <a
          href='https://github.com/aaamenezes'
          target='_blank'
          rel='noreferrer'
        >
          <Icon type='github' />
        </a>
      </Link>
      <Link href='https://twitter.com/aaamenezes'>
        <a
          href='https://twitter.com/aaamenezes'
          target='_blank'
          rel='noreferrer'
        >
          <Icon type='twitter' />
        </a>
      </Link>
      <Link href='https://aaamenezes.medium.com/'>
        <a
          href='https://aaamenezes.medium.com/'
          target='_blank'
          rel='noreferrer'
        >
          <Icon type='medium' />
        </a>
      </Link>
    </Container>
  )
}

export default FooterWrapper
