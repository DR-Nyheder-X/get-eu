require('babel-core/polyfill')

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'

// STORE ------------------------------------------------

import createFinalStore from './createFinalStore'

const store = createFinalStore()

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

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

if (__DEVELOPMENT) { // eslint-disable-line
  store.subscribe(() => console.log(store.getState()))

  const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react')

  render(<div>
    {component}
    <DebugPanel top right bottom key="debugPanel">
      <DevTools store={store} monitor={LogMonitor} visibleOnLoad={false} />
    </DebugPanel>
  </div>, dest)
}

if (module.hot) {
  module.hot.accept();
}

