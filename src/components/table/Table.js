import {TableComponent} from '@core/TableComponent'
import {$} from '@core/dom'
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from '@/components/table/table.resize'
import {shouldResize,
  itCell,
  matrix,
  nextSelector
} from '@/components/table/table.functions'
import {TableSelection} from '@/components/table/TableSelection'


export class Table extends TableComponent {
  static className = 'excel__table'

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options
    })
  }

  toHTML() {
    return createTable(20)
  }

  prepare() {
    this.selection = new TableSelection()
  }

  init() {
    super.init()
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selectCell($cell)
    this.$sub('formula:OnInput', text => {
      this.selection.current.text(text)
    })
    this.$sub('formula:done', () => {
      this.selection.current.focus()
    })
  }

  selectCell($cell) {
    this.selection.select($cell)
    this.$dispatch('table:select', $cell)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    } else if (itCell(event)) {
      const $target = $(event.target)
      if (event.shiftKey) {
        const $cells = matrix($target, this.selection.current)
            .map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else {
        this.selection.select($target)
      }
    }
  }

  onKeydown(event) {
    if (itCell(event)) {
      const keys = ['Tab',
        'Enter',
        'ArrowRight',
        'ArrowLeft',
        'ArrowUp',
        'ArrowDown']
      const {key} = event
      if (keys.includes(key) && !event.shiftKey) {
        event.preventDefault()
        const id = $(event.target).id(true)
        const $next = this.$root.find(nextSelector(key, id))
        this.selection.select($next)
        this.$dispatch('table:select', $next)
        this.selectCell($next)
      }
    }
  }

  onInput(event) {
    if (itCell(event)) {
      const $target = $(event.target)
      this.$dispatch('table:cell:input', $target.text())
    }
  }
}
