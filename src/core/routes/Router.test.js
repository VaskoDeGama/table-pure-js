import {Routes} from './Routes'
import {Page} from '../page/Page'

class DashboardPage extends Page {
  getRoot() {
    const root = document.createElement('div')
    root.innerHTML = 'dashboard'
    return root
  }
}
class TcellPage extends Page {}

describe('Router:', () => {
  let router
  let $root

  beforeEach(() => {
    $root = document.createElement('div')
    router = new Routes($root, {
      dashboard: DashboardPage,
      tcell: TcellPage
    })
  })

  test('should be defined', () => {
    expect(router).toBeDefined()
  })

  test('should render dashboard page', () => {
    router.changePageHandler()
    expect($root.innerHTML).toBe('<div>dashboard</div>')
  })
})
