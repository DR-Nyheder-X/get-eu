import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'
import Icon from './Icon'
import { connect } from 'react-redux'
<<<<<<< HEAD

import '../scss/MainNavigation.scss'

@connect(state => ({ points: state.progress.points }))
=======
import { Link } from 'react-router'

import '../scss/MainNavigation.scss'

@connect(state => ({
  path: state.router.location.pathname,
  points: state.progress.points
}))
>>>>>>> origin/master
export default class MainNavigation extends Component {
  static get propTypes () {
    return {
      type: PropTypes.string,
      className: PropTypes.string
    }
  }
  render () {
    const type = formatTypeClasses('MainNavigation', this.props.type)
    const cls = classname('MainNavigation', this.props.className, type)

    const tabCls = (path, ...classes) => {
      const active = this.props.path === path
      return classname('MainNavigation-tab', classes, {
        ['MainNavigation-tab--active']: active
      })
    }

    return (
      <nav className={cls} {...this.props}>
        <div className={tabCls('/learn', "MainNavigation-tabWiki")}>
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
