import { GraphQLClient } from 'graphql-request'

export function getContent(query) {
  const TOKEN = process.env.DATO_CMS_TOKEN
  const DatoCMSURL = 'https://graphql.datocms.com/'

  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${ TOKEN }`
    }
  })

  return client.request(query)
}
