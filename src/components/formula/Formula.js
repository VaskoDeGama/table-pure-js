import {TableComponent} from '@core/TableComponent'


export class Formula extends TableComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
      ...options
    })
  }


  toHTML() {
    return `
    <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    const text = event.target.textContent.trim()
    this.observer.dispatch('end of input', text)
  }

  onClick(event) {

  }
}
