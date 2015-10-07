require('babel-core/polyfill')

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'

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

render(<Root />, document.getElementById('root'))

if (__DEVELOPMENT) { // eslint-disable-line
  store.subscribe(() => console.log(store.getState()))
}

