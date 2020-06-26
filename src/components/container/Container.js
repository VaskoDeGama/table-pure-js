import {$} from '@core/dom'
import {Observer} from '@core/Observer'

export class Container {
  constructor(selector, options) {
    this.$el = $(selector)
    this.observer = new Observer()
    this.components = options.components || []
  }

  getRoot() {
    const componentOptions = {
      observer: this.observer
    }
    const $root = $.create('div', 'excel')
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el, componentOptions )
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    return $root
  }

  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init())
  }
}
