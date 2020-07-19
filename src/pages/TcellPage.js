import {Page} from '@core/Page'
import {createStore} from '@core/createStore'
import {normalizeInitialState} from '@/store/initialState'
import {rootReducer} from '@/store/rootReducer'
import {debounce, storage} from '@core/Utils'
import {Container} from '@/components/container/Container'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'

function storageName(params) {
  return `tcell:${params}`
}

export class TcellPage extends Page {
  getRoot() {
    const params = this.params ? this.params : Date.now().toString()

    const state = storage(storageName(params))
    const initialState = normalizeInitialState(state)
    const store = createStore(rootReducer, initialState)

    const stateListener = debounce( state => {
      storage(storageName(params), state)
    }, 300)

    store.subscribe(stateListener)

    this.app = new Container( {
      components: [Header, Toolbar, Formula, Table],
      store,
    })

    return this.app.getRoot()
  }


  afterRender() {
    this.app.init()
  }

  destroy() {
    this.app.destroy()
  }
}
