import {TableComponent} from '@core/TableComponent'
import {$} from '@core/dom'

export class Formula extends TableComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      subscribe: ['currentText'],
      ...options
    })
  }

  init() {
    super.init()
    this.$input = this.$root.find('.input')
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

  storeChanged(changes) {
    this.$input.text(changes.currentText)
  }


  onKeydown(event) {
    const keyCode = event.code
    const keys = ['Enter', 'Tab']
    if (keys.includes(keyCode)) {
      event.preventDefault()
      this.$emit('formula:done')
    }
  }
}
