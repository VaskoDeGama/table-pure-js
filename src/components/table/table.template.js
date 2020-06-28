const CODES = {
  A: 65,
  Z: 90
}

const DEFAULT_WIDTH = 120
const DEFAULT_HEIGHT = 20

function getWidth(state, index) {
  return (state[index] || DEFAULT_WIDTH) + 'px'
}

function getHeight(state, index) {
  return (state[index] || DEFAULT_HEIGHT) + 'px'
}


function toCell(state, row) {
  return function(_, col) {
    const width = getWidth(state.colState, col)
    const id = `${row}:${col}`
    const data = state.dataState[id] || ''
    return `<div class="cell" 
            contenteditable 
            data-col="${col}" 
            data-type="cell"
            data-id="${id}"
            style="width: ${width}"
            >${data}</div>`
  }
}

function createCol({col, index, width}) {
  return `<div class="column"  style="width: ${width}"
  data-type="resizable" data-col="${index}">${col}
          <div class="col-resize" data-resize="col"></div>
          </div>`
}

function createRow(rowNumber, content, height) {
  const resizer = rowNumber
      ? `<div class="row-resize" data-resize="row"></div>`
      : ''
  return `
     <div class="row" data-type="resizable" style="height: ${height}" 
           data-row="${rowNumber || ''}">
        <div class="row-info">
          ${rowNumber || ''}
          ${resizer}
        </div>
        <div class="row-data">${content}</div>
     </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}


function withWidthFrom(state) {
  return function(col, index) {
    return {
      col, index, width: getWidth(state.colState, index)
    }
  }
}


export function createTable(rowsCount = 40, state = {} ) {
  const colsCount = CODES.Z - CODES.A + 1
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(withWidthFrom(state))
      .map(createCol)
      .join('')
  const rows = []
  rows.push(createRow(null, cols))
  for (let row = 0; row < rowsCount; row++) {
    const height = getHeight(state.rowState, row + 1)
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(state, row))
        .join('')

    rows.push(createRow(row + 1, cells, height))
  }
  return rows.join('')
}
