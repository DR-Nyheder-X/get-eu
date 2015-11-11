import React, { Component, PropTypes } from 'react'

import '../scss/Filters.scss'

export default class Filters extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const { children } = this.props

    return (
      <div className='Filters'>
        <header className='Filters-header'>
          <h1>Eu-leksikon</h1>
          <h2>Få svar på retsforbeholdets svære spørgsmål (plus bonus-info)</h2>
        </header>

        <div className='Filters-toggles'>
          {children}
        </div>
      </div>
    )
  }
}
