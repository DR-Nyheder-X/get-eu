import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MainNavigation from './MainNavigation'
import Header from './Header'

require('../scss/App.scss')

@connect(state => ({
  path: state.router.location.pathname,
  progress: state.progress
}))
class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    path: PropTypes.string.isRequired,
    progress: PropTypes.object.isRequired
  }

  render () {
    const { path, progress } = this.props

    return (
      <main className="App">
        <Header />
        <MainNavigation currentPath={path} progress={progress} />
        {this.props.children}
      </main>
    )
  }
}

export default App
