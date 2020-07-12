import {Page} from '@core/Page'
import {$} from '@core/dom'

export class DashboardPage extends Page {
  getRoot() {
    return $.create('div', 'dash').html(`
    <div class="dash__header">
      <h1>PureJSTable for FUN</h1>
    </div>
    <div class="dash__new">
      <div class="dash__view">
        <a href="#" class="dash__create">New table</a>
      </div>
    </div>
    <div class="dash__tables dash__view">
      <div class="dash__list-header">
        <span>Название</span>
        <span>Дата редактирования</span>
      </div>
      <ul class="dash__list">
        <li class="dash__record">
          <a href="">Container with cats 1</a>
          <strong>22.06.2020</strong>
        </li>
        <li class="dash__record">
          <a href="">Container with cats 2</a>
          <strong>22.06.2020</strong>
        </li>
        <li class="dash__record">
          <a href="">Container with cats 3</a>
          <strong>22.06.2020</strong>
        </li>
        <li class="dash__record">
          <a href="">Container with cats 4</a>
          <strong>22.06.2020</strong>
        </li>

      </ul>
    </div>
    
    `)
  }
}
