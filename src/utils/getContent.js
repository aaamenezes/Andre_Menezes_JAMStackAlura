import { GraphQLClient } from 'graphql-request'

export function getContent(query, preview) {
  const baseURL = 'https://graphql.datocms.com/'
  const datoCMSURL = preview
    ? `${ baseURL }preview`
    : baseURL
  const TOKEN = process.env.DATO_CMS_TOKEN

  const client = new GraphQLClient(datoCMSURL, {
    headers: {
      Authorization: `Bearer ${ TOKEN }`
    }
  })

  return client.request(query)
}
