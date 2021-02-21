import Link from 'next/link'

import Container from "../container"
import Icon from "../icon"

function FooterWrapper() {
  return (
    <Container
      tag='footer'
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
      height='60px'
      width={{
        md: 'clamp(200px, 100%, 500px);'
      }}
      padding={{
        md: '0',
      }}
      backgroundColor='transparent'
    >
      <Link href='https://github.com/aaamenezes'>
        <a target='_blank'>
          <Icon type='github' />
        </a>
      </Link>
      <Link href='https://twitter.com/aaamenezes'>
        <a target='_blank'>
          <Icon type='twitter' />
        </a>
      </Link>
      <Link href='https://aaamenezes.medium.com/'>
        <a target='_blank'>
          <Icon type='medium' />
        </a>
      </Link>
    </Container>
  )
}

export default FooterWrapper