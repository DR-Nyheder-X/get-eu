import React, { Component } from 'react'

import '../scss/Term.scss'

export default class Term extends Component {
  render () {
    return (
      <li className='Term' {...this.props}></li>
    )
  }
}
