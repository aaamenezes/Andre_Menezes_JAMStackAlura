import { socialQuery } from './socialQuery'

export const contactQuery = `query {
  contact(locale: pt_BR) {
    pageTitle
    pageSubtitle
    profilePicture {
      url
      alt
    }
    firstText
    blackFirstImage {
      url
      alt
    }
    blackFirstText
    blackSecondImage {
      url
      alt
    }
    blackSecondText
    imagesGrid {
      url
      alt
    }
    githubApiUrl
    ctaTitle
    ctaText
    ctaButtonText
  }
  ${ socialQuery }
}`
