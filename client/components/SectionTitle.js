import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'

require('../scss/SectionTitle.scss')

export default class SectionTitle extends Component {
  static get propTypes () {
    return {
      children: PropTypes.node,
      type: PropTypes.string
    }
  }
  render () {
    const cls = classname('SectionTitle', formatTypeClasses('SectionTitle', this.props.type))
    return (
      <div className={cls} {...this.props}>
        <h2>{this.props.children}</h2>
      </div>
    )
  }
}
