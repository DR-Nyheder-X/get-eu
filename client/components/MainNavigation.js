import React, { Component, PropTypes } from 'react'
import classname from 'classname'
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
    progress: PropTypes.object.isRequired
  }

  render () {
    const { currentPath, progress } = this.props
    const { points } = progress

    const quizCls = tabCls([/^\/quiz/, /^\/$/],
                           currentPath, 'MainNavigation-tabQuiz')
    const pointsCls = tabCls(/^\/points/,
                             currentPath, 'MainNavigation-tabPoints')

    return (
      <nav className='MainNavigation'>
        <div className={quizCls}>
          <Link to='/quiz'>Lær</Link>
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
