import { socialQuery } from './socialQuery'

export const projectsQuery = `query {
  projectsPage(locale: pt_BR) {
    pageTitle
    pageDescription
  }
  allProjects {
    coverImage {
      url
      alt
    }
    projectTitle
    url
  }
  ${ socialQuery }
}`
