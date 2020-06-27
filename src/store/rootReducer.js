export function rootReducer(state, action) {
  switch (action.type) {
    case 'TABLE_RESIZE':
      const {id, value} = action.data
      const prevState = state.colState || {}
      prevState[id] = value
      return {...state, colState: prevState}
    default: return state
  }
}
