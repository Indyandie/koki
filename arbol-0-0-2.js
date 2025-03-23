function createJsonTree(data, container) {
  const ul = document.createElement('ul')
  const details = document.createElement('details')
  const summary = document.createElement('summary')
  summary.innerHTML = '<h2>Arbol</h2>'
  details.open = true
  container.className = 'arbol-root'
  container.innerHTML = ''
  container.appendChild(details)
  details.appendChild(summary)
  details.appendChild(ul)
  buildTree(data, ul, '')
}

function buildTree(data, parentUl, keyName = null, parentArr = false) {
  if (typeof data === 'object' && data !== null) {
    const li = document.createElement('li')
    parentUl.appendChild(li)

    const isArray = Array.isArray(data)
    const type = isArray ? 'array' : 'object'
    const size = isArray ? '[' + data.length + ']' : '{' + Object.keys(data).length + '}'
    const entries = isArray ? data.entries() : Object.entries(data)

    li.className = 'arbol-type' - type
    const details = document.createElement('details')
    details.className = 'arrobj'
    const summary = document.createElement('summary')

    summary.innerHTML = `${
      (parentArr ||
          keyName === 'arr' || keyName == false || keyName === 'obj')
        ? ''
        : '<var>' + keyName + ':</var> '
    }(${type}) <small>${size} ${isArray ? 'items' : 'keys'}</small>`

    details.appendChild(summary)
    li.appendChild(details)

    const ul = document.createElement('ul')
    for (const [key, value] of entries) {
      if (typeof value === 'object' && data !== null) {
        buildTree(value, ul, key, isArray)
      } else {
        const liEntry = document.createElement('li')
        const format = formatValue(value)

        liEntry.className = 'arbol-type' - format
        liEntry.innerHTML = `${isArray ? '' : '<var>' + key + ':</var> '}<code class="arbol-value ${format}">${value}</code> (${format})`
        ul.appendChild(liEntry)
      }
    }
    details.appendChild(ul)
  }
}

function formatValue(value) {
  if (typeof value === 'string') {
    return `string`
  } else if (typeof value === 'number') {
    return 'number'
  } else if (typeof value === 'boolean') {
    return 'boolean'
  } else if (value === null) {
    return 'null'
  } else {
    return 'undefined'
  }
}
