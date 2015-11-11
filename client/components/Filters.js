import React, { Component } from 'react'
import Toggle from './Toggle'

import '../scss/Filters.scss'

export default class Filters extends Component {
  render () {
    return (
      <div className='Filters'>
        <header className='Filters-header'>
          <h1>Eu-leksikon</h1>
          <h2>Få svar på retsforbeholdets svære spørgsmål (plus bonus-info)</h2>
        </header>

        <div className='Filters-toggles'>
          <Toggle>Historiske begivenheder</Toggle>
          <Toggle>Retsforbeholdet</Toggle>
          <Toggle>Partiernes holdninger</Toggle>
          <Toggle>Ja-sidens argumenter</Toggle>
          <Toggle>Nej-sidens argumenter</Toggle>
          <Toggle>Valg-detaljer</Toggle>
        </div>
      </div>
    )
  }
}
