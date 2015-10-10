import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'
import '../scss/Card.scss'

export default class Card extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
  }

  render () {
    const type = formatTypeClasses('Card', this.props.type)
    const cls = classname('Card', this.props.className, type)
    return (
      <div className={cls} {...this.props}>
        <div className="Card-inner">
          {this.props.text}
        </div>
      </div>
    )
  }
}
