import {Container} from '@/components/container/Container'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Header} from '@/components/header/Header'
import './scss/index.scss'


const App = new Container('#app', {
  components: [Header, Toolbar, Formula, Table],
})

App.render()
