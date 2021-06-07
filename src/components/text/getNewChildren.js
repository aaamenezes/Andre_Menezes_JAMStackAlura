function removePEelements(content) {
  let newContent = content

  while (newContent.indexOf('<p>') !== -1) {
    newContent = newContent.replace('<p>', '')
  }

  while (newContent.indexOf('</p>') !== -1) {
    newContent = newContent.replace('</p>', '')
  }

  while (newContent.indexOf('<p ') !== -1) {
    const startIndex = newContent.indexOf('<p ')
    let lastIndex = startIndex + 1
    let pStyled = newContent.substring(startIndex, lastIndex)

    while (pStyled.indexOf('>') === -1) {
      lastIndex++
      pStyled = newContent.substring(startIndex, lastIndex)
    }

    newContent = newContent.replace(pStyled, '')
  }

  return newContent
}

function checkExternalLinks(content) {
  let newContent = content
  const noopenerQuantity = newContent.split('noopener').length - 1
  let iconQuantity = newContent.split('</i>').length - 1

  while (iconQuantity < noopenerQuantity) { // tem mais noopener que icon
    while (newContent.indexOf('"noopener"') !== -1) { // tem noopener sozinho
      const startIndex = newContent.indexOf('"noopener"')
      let lastIndex = startIndex + 1
      let oldExternalLink = newContent.substring(startIndex, lastIndex)

      while (oldExternalLink.indexOf('</a>') === -1) {
        lastIndex++
        oldExternalLink = newContent.substring(startIndex, lastIndex)
      }

      const newExternalLink = oldExternalLink
        .replace('</a>', ' <i class="fas fa-external-link-alt"></i></a>')
        .replace('noopener', 'noopener external')
      newContent = newContent.replace(oldExternalLink, newExternalLink)
    }
    iconQuantity = newContent.split('</i>').length - 1
  }

  return newContent
}

export function getNewChildren(children) {
  let newChildren = removePEelements(children)
  newChildren = checkExternalLinks(newChildren)
  return newChildren
}
