import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MainNavigation from './MainNavigation'
import classname from 'classname'

const is_iOS7 =
  navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i)

require('../scss/App.scss')

@connect(state => ({
  path: state.router.location.pathname,
  progress: state.progress
}))
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    path: PropTypes.string.isRequired,
    progress: PropTypes.object.isRequired
  }

  render () {
    const { path, progress } = this.props
    const cls = classname('App', {
      ['no-animations']: is_iOS7
    })

    return (
      <main className={cls}>
        <MainNavigation currentPath={path} progress={progress} />
        {this.props.children}
      </main>
    )
  }
}
