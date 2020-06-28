import {storage} from '@core/Utils'

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  currentText: '',

}


export const initialState = storage('AppState')
    ? storage('AppState')
    : defaultState
