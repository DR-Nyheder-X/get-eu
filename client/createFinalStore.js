import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import {
  ReduxRouter,
  reduxReactRouter,
  routerStateReducer
} from 'redux-router'
import { createHistory } from 'history'

import routes from './routes'

const composedCreateStore = compose(
  applyMiddleware(),
  reduxReactRouter({ routes, createHistory })
)(createStore)

// ------------------------------------------------------

// REDUCERS ---------------------------------------------

import { combineReducers } from 'redux'

const initialState = {}
function a (state = initialState) {
  return state
}

const reducer = combineReducers({ a, router: routerStateReducer })

export default function createFinalStore () {
  return composedCreateStore(reducer)
}
