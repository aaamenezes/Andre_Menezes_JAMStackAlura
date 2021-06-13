import { socialQuery } from './socialQuery'

export const homeQuery = `query {
  home(locale: pt_BR) {
    coverPicture {
      url
      alt
    }
    profilePicture {
      url
      alt
    }
    portfolioName
    portfolioOwner
  }
  ${ socialQuery }
}`
