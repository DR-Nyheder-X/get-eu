/* globals __DEVELOPMENT */
require('babel-core/polyfill')

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { createFinalReducer } from './reducers/leksikon'
import { Route, IndexRoute } from 'react-router'
import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createHashHistory'
import { ReduxRouter } from 'redux-router'
import Leksikon from './components/Leksikon'
import EntryPage from './components/EntryPage'

const routes = (
  <Route path='/'>
    <Route path='/:id' component={EntryPage} />
    <IndexRoute component={Leksikon} />
  </Route>
)

let finalCreateStore

if (__DEVELOPMENT) {
  const DevTools = require('./DevTools')

  finalCreateStore = compose(
    reduxReactRouter({ routes, createHistory }),
    DevTools.instrument()
  )(createStore)
} else {
  finalCreateStore = compose(
    reduxReactRouter({ routes, createHistory })
  )(createStore)
}

const store = finalCreateStore(createFinalReducer())

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
