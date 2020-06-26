import {TableComponent} from '@core/TableComponent'
import {$} from '@core/dom'

export class Formula extends TableComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click', 'keydown'],
      ...options
    })
  }

  init() {
    super.init()
    this.observer.subscribe('tableOnCellInput',
        text => {
          const $input = this.$root.find('.input')
          $input.text(text)
        }
    )
  }


  toHTML() {
    return `
    <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    const text = event.target.textContent.trim()
    this.observer.dispatch('formulaOnInput', text)
  }

  onClick(event) {

  }

  onKeydown(event) {
    const keyCode = event.code
    const $target = $(event.target)
    if (keyCode === 'Enter') {
      event.preventDefault()
      $target.text('')
      this.observer.dispatch('changeFocus')
    }
  }
}
