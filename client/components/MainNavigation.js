import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import Icon from './Icon'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { find } from 'lodash'

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
        <div className={tabCls(/^\/learn/, currentPath, "MainNavigation-tabWiki")}>
          <Link to='/learn'>Lær</Link>
        </div>
        <div className={tabCls([/^\/test/, /^\/$/], currentPath, "MainNavigation-tabQuiz")}>
          <Link to='/test'>Test</Link>
        </div>
        <div className="MainNavigation-tab MainNavigation-tab--pill">
          <a href="#"><Icon type="coins" /> {this.props.points} point</a>
        </div>
      </nav>
    )
  }
}
