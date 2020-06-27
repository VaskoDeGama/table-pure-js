import {DomListener} from '@core/DomListener'

export class TableComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || ''
    this.observer = options.observer
    this.unsubscribers = []
    this.prepare()
  }


  $dispatch(event, ...args) {
    this.observer.dispatch(event, ...args)
  }

  $sub(event, fn) {
    const unsub = this.observer.subscribe(event, fn)
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
