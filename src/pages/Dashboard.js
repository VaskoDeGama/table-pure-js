import {Page} from '@core/Page'
import {$} from '@core/dom'
import {createRecordsTabel} from '@/pages/dashboard.functions'

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString()
    return $.create('div', 'dash').html(`
    <div class="dash__header">
      <h1>PureJSTable for FUN</h1>
    </div>
    <div class="dash__new">
      <div class="dash__view">
        <a href="#tcell/${now}" class="dash__create">New table</a>
      </div>
    </div>
    <div class="dash__tables dash__view">
      ${createRecordsTabel()}
    </div>
    
    `)
  }
}
