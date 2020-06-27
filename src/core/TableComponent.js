import {DomListener} from '@core/DomListener'

export class TableComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || ''
    this.observer = options.observer
    this.store = options.store
    this.unsubscribers = []
    this.prepare()
  }

  $

  $emit(event, ...args) {
    this.observer.emit(event, ...args)
  }

  $sub(event, fn) {
    const unsub = this.observer.onSub(event, fn)
    this.unsubscribers.push(unsub)
  }

  prepare() {

  }

  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
