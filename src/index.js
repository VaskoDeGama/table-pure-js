// import {Container} from '@/components/container/Container'
// import {Formula} from '@/components/formula/Formula'
// import {Table} from '@/components/table/Table'
// import {Toolbar} from '@/components/toolbar/Toolbar'
// import {Header} from '@/components/header/Header'
// import {createStore} from '@core/createStore'
// import {rootReducer} from '@/store/rootReducer'
// import {storage, debounce} from '@core/Utils'
// import {initialState} from '@/store/initialState'

import './scss/index.scss'
import {Routes} from '@core/routes/Routes'

new Routes('#app', {

})

// const store = createStore(rootReducer, initialState)
//
//
// const stateListener = debounce( state => {
//   console.log('App storage:', state)
//   storage('AppState', state)
// }, 300)
//
// store.subscribe(stateListener)
//
// const App = new Container('#app', {
//   components: [Header, Toolbar, Formula, Table],
//   store,
// })
//
// App.render()
