import {Page} from '@core/page/Page'
import {createStore} from '@core/store/createStore'
import {normalizeInitialState} from '@/store/initialState'
import {rootReducer} from '@/store/rootReducer'
import {Container} from '@/components/container/Container'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import {StateProcessor} from '@core/page/StateProcessor'
import {LocalStorageClient} from '@/shared/LocalStorageClient'


export class TcellPage extends Page {
  constructor(param) {
    super(param);

    this.storeSub = null
    this.processor = new StateProcessor(
        new LocalStorageClient(this.params), 500
    )
  }

  async getRoot() {
    const state = await this.processor.get()
    const initialState = normalizeInitialState(state)
    const store = createStore(rootReducer, initialState)
    this.storeSub = store.subscribe(this.processor.listen)

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
    this.storeSub.unsubscribe()
  }
}
