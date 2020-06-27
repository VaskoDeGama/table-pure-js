import {TableComponent} from '@core/TableComponent'
import {$} from '@core/dom'

export class Formula extends TableComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options
    })
  }

  init() {
    super.init()
    this.$input = this.$root.find('.input')
    this.$sub('table:cell:input',
        text => this.$input.text(text)
    )
    this.$sub('table:select', $cell => {
      this.$input.text($cell.text())
    })
  }


  toHTML() {
    return `
    <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    this.$emit('formula:OnInput', $(event.target).text())
  }


  onKeydown(event) {
    const keyCode = event.code
    const $target = $(event.target)
    const keys = ['Enter', 'Tab']
    if (keys.includes(keyCode)) {
      event.preventDefault()
      $target.text('')
      this.$emit('formula:done')
    }
  }
}
