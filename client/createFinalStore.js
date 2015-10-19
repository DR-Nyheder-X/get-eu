import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { ReduxRouter, reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'

import routes from './routes'

let finalCreateStore

if (__DEVELOPMENT) {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    persistState('progress'),
    reduxReactRouter({ routes, createHistory }),
  )(createStore)
} else {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    persistState('progress'),
    reduxReactRouter({ routes, createHistory }),
  )(createStore)
}


import { createFinalReducer } from './reducers'

const reducer = createFinalReducer()

export default function createFinalStore () {
  return finalCreateStore(reducer)
}
