

import './scss/index.scss'
import {Routes} from '@core/routes/Routes'
import {DashboardPage} from '@/pages/Dashboard'
import {TcellPage} from '@/pages/TcellPage'

new Routes('#app', {
  dashboard: DashboardPage,
  tcell: TcellPage
})

