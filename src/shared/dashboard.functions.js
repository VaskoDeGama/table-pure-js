import {storage} from '@core/Utils'

function toHtml(key) {
  const model = storage(key)
  const id = key.split(':')[1]
  return `
        <li class="dash__record">
          <a href="#tcell/${id}">${model.title}</a>
          <strong>
${new Date(model.date).toLocaleDateString()}
${new Date(model.date).toLocaleTimeString()}
          </strong>
        </li>
`
}

function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++ ) {
    const key = localStorage.key(i)
    if (!key.includes('tcell')) {
      continue
    }
    keys.push(key)
  }
  return keys
}

export function createRecordsTabel() {
  const keys = getAllKeys()
  if (!keys.length) {
    return `<p>Пока что таблиц нет</p>`
  }

  return `
      <div class="dash__list-header"> 
        <span>Название</span>
        <span>Дата редактирования</span>
      </div>
      <ul class="dash__list">
         ${keys.map(toHtml).join('')}
      </ul>
 `
}
