const CODES = {
  A: 65,
  Z: 90
}


function toCell(row) {
  return function(_, col) {
    return `<div class="cell" 
            contenteditable 
            data-col="${col}" 
            data-type="cell"
            data-id="${row}:${col}"
            ></div>`
  }
}

function createCol(col, index) {
  return `<div class="column" data-type="resizable" data-col="${index}">${col}
          <div class="col-resize" data-resize="col"></div>
          </div>`
}

function createRow(rowNumber, content) {
  const resizer = rowNumber
      ? '<div class="row-resize" data-resize="row"></div>'
      : ''
  return `
     <div class="row" data-type="resizable">
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

export function createTable(rowsCount = 40, ) {
  const colsCount = CODES.Z - CODES.A + 1
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('')
  const rows = []
  rows.push(createRow(null, cols))
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        // .map((_, col) => createCell(row, col))
        .map(toCell(row))
        .join('')
    rows.push(createRow(row + 1, cells))
  }
  return rows.join('')
}
