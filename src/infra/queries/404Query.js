import { socialQuery } from './socialQuery'

export const error404Query = `query {
  erro404(locale: pt_BR) {
    pageTitle
    pageDescription
    funnyIframe
    iframeTitle
  }
  ${ socialQuery }
}`
