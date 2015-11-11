/* globals __DEVELOPMENT */
require('babel-core/polyfill')

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Leksikon from './components/Leksikon'

const initialState = {}
function sectionsReducer (state = initialState, action) {
  return state
}

const store = createStore({
  sectionsReducer
})

class Root extends Component {
  render () {
    let contents

    if (__DEVELOPMENT) {
      const DevTools = require('./DevTools')

      contents = <div>
        <DevTools />
        <Leksikon />
      </div>
    } else {
      contents = <Leksikon />
    }

    return <Provider store={store}>{contents}</Provider>
  }
}

const component = <Root />
const dest = document.querySelector('.leksikon')

render(component, dest)

if (module.hot) {
  module.hot.accept()
}

