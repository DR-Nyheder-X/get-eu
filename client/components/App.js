import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MainNavigation from './MainNavigation'
import Header from './Header'

require('../scss/App.scss')

@connect(state => ({
  path: state.router.location.pathname,
  points: state.progress.points
}))
class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    path: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired
  }

  render () {
    const { path, points } = this.props

    return (
      <main className="App">
        <Header />
        <MainNavigation currentPath={path} points={points} />
        {this.props.children}
      </main>
    )
  }
}

export default App
