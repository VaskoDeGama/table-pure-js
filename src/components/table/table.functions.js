import {range} from '@core/Utils'

export function shouldResize(event) {
  return event.target.dataset.resize
}

export function isCell(event) {
  return event.target.dataset.type === 'cell'
}

export function matrix($target, $current) {
  const target = $target.id(true)
  const current = $current.id(true)
  const cols = range(current.col, target.col)
  const rows = range(current.row, target.row)
  return cols.reduce((acc, col ) => {
    rows.forEach(row => acc.push(`${row}:${col}`))
    return acc
  }, [])
}

export function nextSelector(key, {row, col}) {
  const MIN = 0
  // const MAX = 0
  switch (key) {
    case 'Enter':
      row++
      break
    case 'Tab':
      col++
      break
    case 'ArrowLeft':
      col = col - 1 < MIN ? MIN : col - 1
      break
    case 'ArrowRight':
      col++
      break
    case 'ArrowUp':
      row = row - 1 < MIN ? MIN : row - 1
      break
    case 'ArrowDown':
      row++
      break
  }

  return `[data-id="${row}:${col}"]`
}
