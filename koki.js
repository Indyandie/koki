function kokiInit(data, container, openDetails = true, kokiTitle = 'koki') {
  const ul = document.createElement('ul')
  const details = document.createElement('details')
  const summary = document.createElement('summary')
  summary.innerHTML = `<header><h2>${kokiTitle}</h2></header>`
  details.open = true
  container.className = 'arbol-root'
  container.innerHTML = ''
  container.appendChild(details)
  details.appendChild(summary)
  details.appendChild(ul)
  kokiArbol(data, ul, '')
}

function kokiArbol(data, parentUl, keyName = null, parentArr = false) {
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
    details.open = true
    const summary = document.createElement('summary')

    const arrObjSize = (entries < 1) ? '<small style="color: gray">empty</small>' : `<small>${size} ${isArray ? 'items' : 'keys'}</small>`
    summary.innerHTML = `${
      (parentArr ||
          keyName === 'arr' || keyName == false || keyName === 'obj')
        ? ''
        : '<var>' + keyName + '</var> '
    }(${type}) ${arrObjSize}`

    details.appendChild(summary)
    li.appendChild(details)

    const ul = document.createElement('ul')
    for (const [key, value] of entries) {
      if (typeof value === 'object' && data !== null) {
        kokiArbol(value, ul, key, isArray)
      } else {
        const liEntry = document.createElement('li')
        const format = kokiGetType(value)

        liEntry.className = 'arbol-type' - format
        liEntry.innerHTML = `${isArray ? '' : '<var>' + key + '</var> '}<code class="arbol-value ${format}">${value}</code> (${format})`
        ul.appendChild(liEntry)
      }
    }
    details.appendChild(ul)
  }
}

function kokiGetType(value) {
  if (value === null) return 'null'
  if (value === undefined) return 'undefined'
  return typeof value
}
