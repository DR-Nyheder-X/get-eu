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
      <a className={cls} href='https://www.facebook.com/sharer/sharer.php?u=http://www.dr.dk/nyheder/politik/eu15/forstaa-forbeholdet'><i></i> {this.props.children}</a>
    )
  }
}
