import {storage} from '@core/Utils'

const defaultState = {
  rowState: {},
  colState: {}
}


export const initialState = storage('AppState')
    ? storage('AppState')
    : defaultState
