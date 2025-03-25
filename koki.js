function kokiInit(data, container, openDetails = true, kokiTitle = 'koki') {
  container.classList.add('arbol-root')
  container.innerHTML = ''

  const details = document.createElement('details')
  details.open = true

  const summary = document.createElement('summary')
  summary.innerHTML = `<header><h2>${kokiTitle}</h2></header>`

  const dataElem = document.createElement('data')
  dataElem.value = JSON.stringify(data)

  const ul = document.createElement('ul')

  const code = document.createElement('code')
  code.innerHTML = JSON.stringify(data, null, 2)

  const pre = document.createElement('pre')

  pre.appendChild(code)

  // kokiArbol(data, ul, '', false, openDetails)
  const fragment = kokiArbol(data, '', false, openDetails)

  ul.appendChild(fragment)
  details.innerHTML = `<label><input type="checkbox">Raw JSON</label>`
  details.append(summary, pre, dataElem)
  dataElem.appendChild(ul)
  container.append(details)
}

function kokiArbol(data, keyName = null, parentArr = false, openDetails = true, level = 0) {
  const fragment = document.createDocumentFragment()
  const li = document.createElement('li')
  fragment.appendChild(li)

  if (typeof data === 'object' && data !== null) {
    const isArray = Array.isArray(data)
    const type = isArray ? 'array' : 'object'
    const length = isArray ? data.length : Object.keys(data).length
    const size = isArray ? '[' + length + ']' : '{' + length + '}'
    const entries = isArray ? data.entries() : Object.entries(data)
    openDetails = level === 0 && openDetails || openDetails && level < 2 ? true : false

    li.className = 'arbol-type' - type

    const details = document.createElement('details')
    details.className = 'arrobj'
    details.open = openDetails

    const summary = document.createElement('summary')
    const arrObjSize = length === 0 ? '<small style="color: gray">empty</small>' : `<small>${size} ${isArray ? 'items' : 'keys'}</small>`

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
      if (typeof value === 'object' && value !== null) {
        const fragment = kokiArbol(value, key, isArray, openDetails, level + 1)
        ul.appendChild(fragment)
      } else {
        const liEntry = document.createElement('li')
        const format = kokiGetType(value)
        console.log(key, value)

        liEntry.className = 'arbol-type' - format
        liEntry.innerHTML = `${isArray ? '' : '<var>' + key + '</var> '}<code class="arbol-value ${format}">${value}</code> (${format})`
        ul.appendChild(liEntry)
      }
    }
    details.appendChild(ul)
  }

  return fragment
}

function kokiGetType(value) {
  if (value === null) return 'null'
  if (value === undefined) return 'undefined'
  return typeof value
}
