export default function handler(request, response) {
  response.clearPreviewData() // voltar para modo normal
  response.writeHead(307, { location: '/' }) // redirect p home
  return response.end()
}
