import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

require('../scss/App.scss')

@connect(state => ({ routerState: state.router }))
class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <main className="App">
        <h1>App!</h1>
        {this.props.children}
      </main>
    )
  }
}

export default App
