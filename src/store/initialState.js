import {storage} from '@core/Utils'
import {defaultStyles, defaultTitle} from '@/constants'

const defaultState = {
  title: defaultTitle,
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
