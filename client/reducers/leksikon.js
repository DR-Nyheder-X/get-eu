import { combineReducers } from 'redux'
import { TOGGLE_FILTER } from '../actions/leksikon'
import { without } from 'lodash'
import { filters } from '../Lepo'

const initialState = {
  enabled: filters.map(f => f.id)
}

export function filtersReducer (state = initialState, action) {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case TOGGLE_FILTER:
      newState.enabled = without(newState.enabled, action.value)
      if (action.checked) newState.enabled.push(action.value)
      break
    default: break
  }

  return newState
}

export function createFinalReducer () {
  return combineReducers({
    filters: filtersReducer
  })
}
