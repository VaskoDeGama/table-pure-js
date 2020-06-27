import {TABLE_RESIZE} from '@/store/types'

export function rootReducer(state, action) {
  let nextState
  switch (action.type) {
    case TABLE_RESIZE:
      console.log(action.data.type)
      if (action.data.type === 'col') {
        nextState = state.colState || {}
        nextState[action.data.id] = action.data.value
        return {...state, colState: nextState}
      } else {
        nextState = state.rowState || {}
        nextState[action.data.id] = action.data.value
        return {...state, rowState: nextState}
      }
    default: return state
  }
}
