export default function handler(request, response) {
  // http://localhost:3000/api/preview?key=CHAVES
  const previewKey = 'CHAVES'
  if (request.query.key !== previewKey) {
    return response.status(401).json({
      message: 'Chave inválida, não autorizado'
    })
  }
  response.setPreviewData({}) // setar modo preview
  response.writeHead(307, { location: '/' }) // redirect p home
  return response.end()
}
