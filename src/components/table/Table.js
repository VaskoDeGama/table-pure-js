import {TableComponent} from '@core/TableComponent'
import {createTable} from '@/components/table/table.template'


export class Table extends TableComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Table',
    })
  }

  toHTML() {
    return createTable(100)
  }
}
