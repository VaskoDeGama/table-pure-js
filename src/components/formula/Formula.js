import {TableComponent} from '@core/TableComponent'


export class Formula extends TableComponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    })
  }


  toHTML() {
    return `
    <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    console.log(this.$root)
    console.log('Formula: onInput', event.target.textContent.trim())
  }

  onClick(event) {

  }
}
