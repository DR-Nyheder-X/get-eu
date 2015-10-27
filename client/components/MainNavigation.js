import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import Icon from './Icon'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { find } from 'lodash'
import Counter from './Counter'

import '../scss/MainNavigation.scss'

const tabCls = (paths, currentPath, ...classes) => {
  if (paths.length === undefined) paths = [paths]

  const active = find(paths, path => currentPath.match(path))
  return classname('MainNavigation-tab', classes, {
    ['MainNavigation-tab--active']: active
  })
}

export default class MainNavigation extends Component {
  static propTypes = {
    currentPath: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired
  }

  render () {
    const { currentPath } = this.props

    return (
      <nav className='MainNavigation'>
        <div className={tabCls([/^\/test/, /^\/$/], currentPath, "MainNavigation-tabQuiz")}>
          <Link to='/test'>Test</Link>
        </div>
        <div className={tabCls(/^\/points/, currentPath, "MainNavigation-tabPoints")}>
          <Link to='/points'>Point</Link>
        </div>
      </nav>
    )
  }
}
