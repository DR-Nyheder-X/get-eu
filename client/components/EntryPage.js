import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { entries, filters } from '../Lepo'
import { find } from 'lodash'
import Entry from './Entry'
import Button from './Button'

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

    return <div>
      <br />
      <Entry
        key={entry.id}
        id={entry.id}
        title={entry.title}
        category={find(filters, {id: entry.filterId}).title}
        content={entry.content}
        open
        hideControls
      />
      <br />
      <Button to='/'>Tilbage til oversigten</Button>
    </div>
  }
}
