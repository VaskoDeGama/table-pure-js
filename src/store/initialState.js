import {storage} from '@core/Utils'
import {defaultStyles} from '@/constants'

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  styleState: {},
  currentStyles: defaultStyles,
  currentText: '',
}

const normalize = (state) => {
  return {
    ...state,
    currentStyles: defaultStyles,
    currentText: ''
  }
}
export const initialState = storage('AppState')
    ? normalize(storage('AppState'))
    : defaultState
