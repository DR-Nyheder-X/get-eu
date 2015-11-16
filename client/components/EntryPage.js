import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { entries, filters } from '../Lepo'
import { find } from 'lodash'
import Entry from './Entry'
import Button from './Button'
import '../scss/EntryPage.scss'
import '../scss/Filters.scss'

@connect(state => ({
  id: state.router.params.id
}))
export default class EntryPage extends Component {
  static propTypes = {
    id: PropTypes.string
  }

  render () {
    const { id } = this.props
    const entry = find(entries, { id: parseInt(id, 10) })

    return <div className='EntryPage'>
      <div className='Filters'>
        <header className='Filters-header'>
          <h1>Eu-leksikon</h1>
          <h2>Få svar på retsforbeholdets svære spørgsmål (plus bonus-info)</h2>
        </header>
      </div>
      <Entry
        key={entry.id}
        id={entry.id}
        title={entry.title}
        category={find(filters, {id: entry.filterId}).title}
        content={entry.content}
        open
        hideControls
      />
      <div class='EntryPage-goBack'>
        <Button type='yellow darkShadow' to='/'>Se hele leksikonet</Button>
      </div>
    </div>
  }
}
