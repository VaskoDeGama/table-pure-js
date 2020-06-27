import {Container} from '@/components/container/Container'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Header} from '@/components/header/Header'
import {createStore} from '@core/createStore'
import {rootReducer} from '@/store/rootReducer'
import './scss/index.scss'


const store = createStore(rootReducer)
console.log(store)

const App = new Container('#app', {
  components: [Header, Toolbar, Formula, Table],
  store,
})

App.render()
