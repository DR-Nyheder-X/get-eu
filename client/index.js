require('babel-core/polyfill')

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import { RESET_PROGRESS } from './actions'

// STORE ------------------------------------------------

import createFinalStore from './createFinalStore'

const store = createFinalStore()

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <ReduxRouter />
      </Provider>
    )
  }
}

const component = <Root />
const dest = document.getElementById('root')

render(component, dest)

if (module.hot) {
  module.hot.accept();
}

function resetProgress () {
  store.dispatch({ type: RESET_PROGRESS })
  return true
}
window.resetProgress = resetProgress
