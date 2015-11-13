import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'

import '../scss/ShareButton.scss'

export default class ShareButton extends Component {
  static get propTypes () {
    return {
      type: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string
    }
  }
  render () {
    const type = formatTypeClasses('ShareButton', this.props.type)
    const cls = classname('ShareButton', this.props.className, type)

    return (
      <a className={cls} type={type} href=''><i></i> {this.props.children}</a>
    )
  }
}
