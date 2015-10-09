import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { ReduxRouter, reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import persistState from 'redux-localStorage'
import thunk from 'redux-thunk'

import routes from './routes'

let finalCreateStore

if (__DEVELOPMENT) {
  const { devTools } = require('redux-devtools')

  finalCreateStore = compose(
    applyMiddleware(thunk),
    reduxReactRouter({ routes, createHistory }),
    persistState('progress'),
    devTools()
  )(createStore)
} else {
  finalCreateStore = createStore
}


import { createFinalReducer } from './reducers'

const reducer = createFinalReducer()

export default function createFinalStore () {
  return finalCreateStore(reducer)
}
