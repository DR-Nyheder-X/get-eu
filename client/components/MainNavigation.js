import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import Icon from './Icon'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import '../scss/MainNavigation.scss'

@connect(state => ({
  path: state.router.location.pathname,
  points: state.progress.points
}))
export default class MainNavigation extends Component {
  render () {
    const tabCls = (paths, ...classes) => {
      if (typeof paths === 'string') {
        paths = [paths]
      }
      const active = paths.indexOf(this.props.path) > -1
      return classname('MainNavigation-tab', classes, {
        ['MainNavigation-tab--active']: active
      })
    }

    return (
      <nav className='MainNavigation'>
        <div className={tabCls(['/learn', '/'], "MainNavigation-tabWiki")}>
          <Link to='/learn'>Lær</Link>
        </div>
        <div className={tabCls('/test', "MainNavigation-tabQuiz")}>
          <Link to='/test'>Test</Link>
        </div>
        <div className="MainNavigation-tab MainNavigation-tab--pill">
          <a href="#"><Icon type="coins" /> {this.props.points} point</a>
        </div>
      </nav>
    )
  }
}
