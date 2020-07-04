import {TableStateComponent} from '@core/TableStateComponent'
import {createToolbar} from '@/components/toolbar/toolbar.template'
import {$} from '@core/dom'


export class Toolbar extends TableStateComponent {
  static className = 'excel__toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options
    })
  }

  prepare() {
    const initialState = {
      textAlign: 'left',
      fontWeight: 'normal',
      textDecoration: 'none',
      fontStyle: 'normal'
    }
    this.initState(initialState)
  }

  get template() {
    return createToolbar(this.state)
  }

  toHTML() {
    return this.template
  }

  onClick(event) {
    const $target = $(event.target)
    if ($target.data.type === 'button') {
      const style = JSON.parse($target.data.value)
      const [key, value] = Object.entries(style)[0]
      this.setState({[key]: value})
      console.log(this.state)
    }
  }
}
