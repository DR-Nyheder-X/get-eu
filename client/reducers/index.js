import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'

import progress from './progress'

export function createFinalReducer () {
  return combineReducers({
    router: routerStateReducer,
    progress
  })
}
