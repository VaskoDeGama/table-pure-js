function toHtml() {
  return `
        <li class="dash__record">
          <a href="">Container with cats 1</a>
          <strong>22.06.2020</strong>
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
