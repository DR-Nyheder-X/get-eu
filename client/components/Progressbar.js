import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'

import '../scss/Progressbar.scss'

export default class Progressbar extends Component {
  static get propTypes () {
    return {
      type: PropTypes.string,
      className: PropTypes.string,
      percent: PropTypes.number
    }
  }
  render () {
    const type = formatTypeClasses('Progressbar', this.props.type)
    const cls = classname('Progressbar', this.props.className, type)

    return (
      <div className={cls} {...this.props}>
        <div className='Progressbar-fill'
        style={{width: `${this.props.percent}%`}}></div>
      </div>
    )
  }
}
