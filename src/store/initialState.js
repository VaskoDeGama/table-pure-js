import {defaultStyles, defaultTitle} from '@/constants'
import {clone} from '@core/Utils'

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  styleState: {},
  currentStyles: defaultStyles,
  currentText: '',
  date: new Date().toJSON()
}

const normalize = (state) => {
  return {
    ...state,
    currentStyles: defaultStyles,
    currentText: ''
  }
}


export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}
