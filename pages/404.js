import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '../src/components/common/container'
import Text from '../src/components/text'
import PageWrapper from '../src/components/wrappers/pageWrapper'
import { getContent } from '../src/utils/getContent'
import Title from '../src/components/title'

export async function getStaticProps({ preview }) {
  const query = `
    query {
      erro404(locale: pt_BR) {
        pageTitle
        pageDescription
        funnyIframe
        iframeTitle
      }
    }
  `

  const data = await getContent(query, preview)

  return {
    props: {
      data
    }
  }
}

const Iframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 90vh;
`

export default function Page404(props) {
  const { data } = props
  const { erro404 } = data

  const { pageTitle, pageDescription, funnyIframe, iframeTitle } = erro404

  return (
    <PageWrapper
      seoProps={{
        pageTitle: 'Página perdida'
      }}
      header
      footer
    >
      <Container tag='section' padding='5% 10%'>
        <Title titleTag='h1'>
          {pageTitle}
        </Title>
        <Text external>
          {pageDescription}
        </Text>
        {
          funnyIframe && (
            <Iframe
              src={funnyIframe}
              title={iframeTitle || 'Iframe'}
            />
          )
        }
      </Container>
    </PageWrapper>
  )
}

Page404.propTypes = {
  data: PropTypes.objectOf(PropTypes.objectOf).isRequired
}
