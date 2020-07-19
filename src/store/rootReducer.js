import {
  CHANGE_TEXT,
  CHANGE_STYLE,
  TABLE_RESIZE, APPLY_STYLE, CHANGE_TITLE, UPDATE_DATE,
} from '@/store/types'

export function rootReducer(state, action) {
  let field
  let value
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === 'col' ? 'colState' : 'rowState'
      return {
        ...state,
        [field]: setValue(state, field, action)
      }
    case CHANGE_TEXT:
      field = 'dataState'
      return {
        ...state,
        currentText: action.data.value,
        [field]: setValue(state, field, action)
      }
    case CHANGE_STYLE:
      field = 'currentStyles'
      return {
        ...state,
        currentStyles: action.data
      }
    case APPLY_STYLE:
      field = 'styleState'
      value = state[field] || {}
      action.data.ids.forEach(id => {
        value[id] = {...value[id], ...action.data.value}
      })
      return {
        ...state,
        [field]: value,
        currentStyles: {
          ...state.currentStyles,
          ...action.data.value
        }
      }
    case CHANGE_TITLE:
      return {...state, title: action.data}
    case UPDATE_DATE:
      return {...state, date: new Date().toJSON()}
    default: return state
  }
}

function setValue(state, field, action) {
  const nextState = state[field] || {}
  nextState[action.data.id] = action.data.value
  return nextState
}
