/* eslint-disable max-len */

import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

export default function SEO({ pageTitle }) {
  const defaultTitle = 'PortFront | André Menezes'
  const fullTitle = pageTitle
    ? `${ pageTitle } | ${ defaultTitle }`
    : defaultTitle

  const description = 'Portfolio de projetos de desenvolvimento front-end. Programação focada em ReactJS e NextJS'
  const url = 'http://portfront.vercel.app/'
  const imageURL = '/images/avatar.jpeg'

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name='title' content={fullTitle} />
      <meta name='description' content={description} />
      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageURL} />
      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={fullTitle} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={imageURL} />
    </Head>
  )
}

SEO.propTypes = {
  pageTitle: PropTypes.string.isRequired
}
