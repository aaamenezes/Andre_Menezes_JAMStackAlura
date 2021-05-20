import React from 'react'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import GlobalStyle from '../src/theme/GlobalStyle'
import theme from '../src/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PortFront - André Menezes</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        {/* eslint-disable-next-line max-len */}
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap' rel='stylesheet' />
        {/* eslint-disable-next-line max-len */}
        <link href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap' rel='stylesheet' />
        {/* eslint-disable-next-line max-len */}
        <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.15.2/css/all.css' />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  // pageProps: PropTypes.objectOf(PropTypes.object).isRequired
  pageProps: PropTypes.oneOfType([
    PropTypes.object, PropTypes.array
  ]).isRequired
}
