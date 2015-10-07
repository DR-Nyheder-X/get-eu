import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'
import Icon from './Icon'
import { connect } from 'react-redux'

import '../scss/MainNavigation.scss'

@connect(state => ({ points: state.progress.points }))
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

    return (
      <nav className={cls} {...this.props}>
        <div className="MainNavigation-tab MainNavigation-tabWiki">
          <a href="#">Lær</a>
        </div>
        <div className="MainNavigation-tab MainNavigation-tabQuiz MainNavigation-tab--active">
          <a href="#">Test</a>
        </div>
        <div className="MainNavigation-tab MainNavigation-tab--pill">
          <a href="#"><Icon type="coins" /> {this.props.points} point</a>
        </div>
      </nav>
    )
  }
}
