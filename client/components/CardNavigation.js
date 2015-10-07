import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'

import '../scss/CardNavigation.scss'

export default class CardNavigation extends Component {
  static get propTypes () {
    return {
      className: PropTypes.string
    }
  }
  render () {
    const cls = classname('CardNavigation', this.props.className)

    return (
      <nav className={cls} {...this.props}>
        <a href="#" className="CardNavigation-previous">Forrige</a>
        <a href="#" className="CardNavigation-next">Næste</a>

        <ul>
          <li></li>
          <li className="active"></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    )
  }
}
