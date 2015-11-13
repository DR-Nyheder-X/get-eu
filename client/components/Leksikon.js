import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Filters from './Filters'
import Toggle from './Toggle'
import { toggleFilter } from '../actions/leksikon'
import { filters, entries } from '../Lepo'
import Entries from './Entries'
import Entry from './Entry'
import { find } from 'lodash'

function filterEntries (entries, enabled) {
  return entries.filter(entry => {
    return enabled.includes(entry.id)
  })
}

@connect(state => ({
  enabled: state.filters.enabled
}))
export default class Leksikon extends Component {
  static propTypes = {
    enabled: PropTypes.arrayOf(PropTypes.number),
    dispatch: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      entries: filterEntries(entries, props.enabled)
    }
  }

  handleChange (state) {
    const { dispatch } = this.props
    dispatch(toggleFilter(state.value, state.checked))
  }

  render () {
    const { enabled } = this.props
    const handleChange = this.handleChange.bind(this)

    return <main className='App'>
      <Filters>
        {filters.map(filter => (
          <Toggle
            key={filter.title}
            onChange={handleChange}
            checked={enabled.includes(filter.id)}
            value={filter.id}
          >{filter.title}</Toggle>
        ))}
      </Filters>
      <Entries>
        {entries.map(entry => (
          <Entry
            key={entry.id}
            title={entry.title}
            category={find(filters, {id: entry.filterId}).title}
            content={entry.content}
          />
        ))}
      </Entries>
    </main>
  }
}
