import {CHANGE_TEXT, TABLE_RESIZE} from '@/store/types'

export function rootReducer(state, action) {
  let nextState
  let field
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === 'col' ? 'colState' : 'rowState'
      nextState = state[field] || {}
      nextState[action.data.id] = action.data.value
      return {...state, [field]: nextState}
    case CHANGE_TEXT:
      nextState = state['dataState'] || {}
      nextState[action.data.id] = action.data.value
      return {...state, currentText: action.data.value, dataState: nextState}
    default: return state
  }
}
