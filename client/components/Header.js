import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'
import Icon from './Icon'

import '../scss/Header.scss'

export default class Header extends Component {
  static get propTypes () {
    return {
      type: PropTypes.string,
      className: PropTypes.string
    }
  }
  render () {
    const cls = classname('Header', this.props.className)
    return (
      <header className={cls} {...this.props}>
        <a href="#" className="Header-logo">DR Forstå Forbeholdet</a>
      </header>
    )
  }
}
