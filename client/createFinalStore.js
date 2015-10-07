import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { ReduxRouter, reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import persistState from 'redux-localStorage'

import routes from './routes'

const composedCreateStore = compose(
  // applyMiddleware(),
  persistState(),
  reduxReactRouter({ routes, createHistory })
)(createStore)

import { createFinalReducer } from './reducers'

const reducer = createFinalReducer()

export default function createFinalStore () {
  return composedCreateStore(reducer)
}
