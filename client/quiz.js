/* globals __DEVELOPMENT */
require('babel-core/polyfill')

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import { RESET_PROGRESS } from './actions'
import { pushState } from 'redux-router'

// STORE ------------------------------------------------

import createFinalStore from './createFinalStore'

const store = createFinalStore()

class Root extends Component {
  render () {
    let contents

    if (__DEVELOPMENT) {
      const DevTools = require('./DevTools')

      contents = <div>
        <DevTools />
        <ReduxRouter />
      </div>
    } else {
      contents = <ReduxRouter />
    }

    return (
      <Provider store={store}>
        {contents}
      </Provider>
    )
  }
}

const component = <Root />
const dest = document.querySelector('.quiz')

render(component, dest)

if (module.hot) {
  module.hot.accept()
}

window.resetProgress = function () {
  store.dispatch({ type: RESET_PROGRESS })
  return true
}

// Redirect to root if no points in progress
const state = store.getState()
if (state.progress.completedStepIds.length === 0) {
  if (!state.router.location.pathname.match(/^\/$/)) {
    store.dispatch(pushState(null, '/'))
  }
}
