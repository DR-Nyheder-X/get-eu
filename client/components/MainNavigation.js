import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import { Link } from 'react-router'
import { find } from 'lodash'
import Counter from './Counter'
import { whereToGo } from '../utils/whereToGo'

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
    progress: PropTypes.object.isRequired
  }

  render () {
    const { currentPath, progress } = this.props
    const { points } = progress
    const quizTo = whereToGo(progress)

    const quizCls = tabCls([/^\/(quiz|the_end)/, /^\/$/],
                           currentPath, 'MainNavigation-tabQuiz')
    const pointsCls = tabCls(/^\/points/,
                             currentPath, 'MainNavigation-tabPoints')

    return (
      <nav className='MainNavigation'>
        <div className={quizCls}>
          <Link to={quizTo}>Lær</Link>
        </div>
        <div className={pointsCls}>
          <Link to='/points'>
            <Counter begin={0} end={points} time={3000} /> point
          </Link>
        </div>
      </nav>
    )
  }
}
