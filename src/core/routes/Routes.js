import {$} from '../dom'
import {ActiveRoute} from './ActiveRoute'
import {Loader} from '../../components/Loader'

export class Routes {
  constructor(selector, routes = {}) {
    if (!selector) {
      throw new Error('Selector is not provided in Router')
    }
    this.page = null
    this.loader = new Loader()
    this.$placeholder = $(selector)
    this.routes = routes
    this.changePageHandler = this.changePageHandler.bind(this)

    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.changePageHandler)
    this.changePageHandler()
  }

  async changePageHandler() {
    if (this.page) {
      this.page.destroy()
    }
    this.$placeholder.clear().append(this.loader)
    const Page = ActiveRoute.path.includes('tcell') ?
        this.routes.tcell :
        this.routes.dashboard


    this.page = new Page(ActiveRoute.param)
    const root = await this.page.getRoot()
    this.$placeholder.clear().append(root)
    this.page.afterRender()
  }

  destroy() {
    window.removeEventListener('hashchange', this.changePageHandler)
  }
}
