/* global __DEVELOPMENT */

/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */
import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import DevTools from './DevTools'
import routes from './routes'

let finalCreateStore

if (__DEVELOPMENT) {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    persistState('progress'),
    reduxReactRouter({ routes, createHistory }),
    DevTools.instrument(),
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
