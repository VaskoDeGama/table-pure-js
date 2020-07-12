import {$} from '@core/dom'
import {Observer} from '@core/Observer'
import {StoreSubscriber} from '@core/StoreSubscriber'

export class Container {
  constructor(selector, options) {
    this.$el = $(selector)
    this.observer = new Observer()
    this.components = options.components || []
    this.store = options.store
    this.subscriber = new StoreSubscriber(this.store)
  }

  getRoot() {
    const componentOptions = {
      observer: this.observer,
      store: this.store
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
    this.subscriber.subscribeComponents(this.components)
    this.components.forEach(component => component.init())
  }

  destroy() {
    this.subscriber.unsubscribeFromStore()
    this.components.forEach(component => component.destroy())
  }
}
