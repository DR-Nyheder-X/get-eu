import { combineReducers } from 'redux'
import { TOGGLE_SECTION } from '../actions/leksikon'
import { without } from 'lodash'

const initialState = {
  enabled: []
}

export function sectionsReducer (state = initialState, action) {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case TOGGLE_SECTION:
      newState.enabled = without(newState.enabled, action.value)
      if (action.checked) newState.enabled.push(action.value)
      break
    default: break
  }

  return newState
}

export function createFinalReducer () {
  return combineReducers({
    sections: sectionsReducer
  })
}
