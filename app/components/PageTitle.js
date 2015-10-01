import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'

require('../scss/PageTitle.scss')

export default class PageTitle extends Component {
  static get propTypes () {
    return {
      children: PropTypes.oneOfType([
        PropTypes.node, PropTypes.array
      ]),
      type: PropTypes.string
    }
  }
  render () {
    const cls = classname(
      'PageTitle',
      formatTypeClasses('PageTitle', this.props.type))

    const content = React.Children.count(this.props.children) === 1
      ? <h1>{this.props.children}</h1>
      : this.props.children

    return (
      <div className={cls} {...this.props}>
        {content}
      </div>
    )
  }
}

export class PreHeading extends Component {
  static get propTypes () {
    return {
      children: PropTypes.node
    }
  }
  render () {
    return <h2 className='PageTitle-preheading'>Pre:{this.props.children}</h2>
  }
}

