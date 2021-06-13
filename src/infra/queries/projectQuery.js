import { socialQuery } from './socialQuery'

export const projectQuery = `query {
  project(filter: {id: {eq: 41451192}} ) {
    coverImage(locale: pt_BR) {
      url
      alt
    }
    phrase
    projectTitle
    firstParagraph
    bodyImage(locale: pt_BR) {
      url
      alt
    }
    secondParagraph
    bodyVideo {
      title
      url
    }
  }
  ${ socialQuery }
}`
