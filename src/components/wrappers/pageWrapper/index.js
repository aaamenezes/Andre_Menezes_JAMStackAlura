import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../common/header'
import Main from '../../common/main'
import Footer from '../../common/footer'
import SEO from '../../../seo'

export default function PageWrapper({ children, seoProps }) {
  return (
    <>
      <SEO {...seoProps} />
      <Header />
      <Main padding='0'>
        {children}
      </Main>
      <Footer />
    </>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  seoProps: PropTypes.shape({
    pageTitle: PropTypes.string.isRequired
  }).isRequired
}
