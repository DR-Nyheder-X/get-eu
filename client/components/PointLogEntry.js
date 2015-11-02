import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'
import Term from './Term'

import '../scss/PointLogEntry.scss'

export default class PointLogEntry extends Component {
  static get propTypes () {
    return {
      type: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string,
      points: PropTypes.string
    }
  }
  render () {
    const type = formatTypeClasses('PointLogEntry', this.props.type)
    const cls = classname('PointLogEntry', this.props.className, type)
    return (
      <div className={cls} {...this.props}>
        <div className='PointLogEntry-inner'>
          <header>
            <h3><i></i> {this.props.points} point</h3>
            <p>{this.props.children}</p>
          </header>
          <ul className='PointLogEntry-terms'>
            <Term>Lovgivnings-halløj</Term>
            <Term>Sandalforordning</Term>
            <Term>Dublin III</Term>
            <Term>Rumænske roer</Term>
          </ul>
        </div>
      </div>
    )
  }
}
