require('babel-core/polyfill')

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import { RESET_PROGRESS } from './actions'

// STORE ------------------------------------------------

import createFinalStore from './createFinalStore'

const store = createFinalStore()

function resetProgress () {
  store.dispatch({ type: RESET_PROGRESS })
  return true
}
window.resetProgress = resetProgress


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

