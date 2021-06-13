import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../common/header'
import Main from '../../common/main'
import Footer from '../../common/footer'
import SEO from '../../../seo'

export default function PageWrapper({
  seoProps,
  header,
  footer,
  socialMediaLinks,
  children
}) {
  return (
    <>
      <SEO {...seoProps} />
      {header && <Header />}
      <Main padding='0'>
        {children}
      </Main>
      {footer && <Footer socialMediaLinks={socialMediaLinks} />}
    </>
  )
}

PageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    pageTitle: PropTypes.string.isRequired
  }).isRequired,
  header: PropTypes.bool,
  footer: PropTypes.bool,
  socialMediaLinks: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

PageWrapper.defaultProps = {
  header: false,
  footer: false
}
