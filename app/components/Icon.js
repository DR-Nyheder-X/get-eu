import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'

import '../scss/Icon.scss'

export default class Icon extends Component {
  static get propTypes () {
    return {
      type: PropTypes.string,
      className: PropTypes.string
    }
  }
  render () {
    const type = formatTypeClasses('Icon', this.props.type)
    const cls = classname('Icon', this.props.className, type)
    return (
      <i className={cls} {...this.props}></i>
    )
  }
}
