import {Page} from '@core/Page'
import {createStore} from '@core/createStore'
import {initialState} from '@/store/initialState'
import {rootReducer} from '@/store/rootReducer'
import {debounce, storage} from '@core/Utils'
import {Container} from '@/components/container/Container'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'

export class TcellPage extends Page {
  getRoot() {
    const store = createStore(rootReducer, initialState)
    console.log(this.params)

    const stateListener = debounce( state => {
      console.log('App storage:', state)
      storage('AppState', state)
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
