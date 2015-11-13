import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Filters from './Filters'
import Toggle from './Toggle'
import { toggleFilter, toggleEntry } from '../actions/leksikon'
import { filters, entries } from '../Lepo'
import Entries from './Entries'
import Entry from './Entry'
import { find } from 'lodash'

@connect(state => ({
  enabled: state.filters.enabled,
  open: state.entries.open
}))
export default class Leksikon extends Component {
  static propTypes = {
    enabled: PropTypes.arrayOf(PropTypes.number),
    open: PropTypes.arrayOf(PropTypes.number),
    dispatch: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      entries: filterEntries(entries, props.enabled)
    }
  }

  componentWillReceiveProps (props) {
    this.setState({
      entries: filterEntries(entries, props.enabled)
    })
  }

  handleChange (state) {
    const { dispatch } = this.props
    dispatch(toggleFilter(state.value, state.checked))
  }

  handleToggleEntry (state) {
    this.props.dispatch(toggleEntry(state.id, state.open))
  }

  render () {
    const { enabled, open } = this.props
    const { entries } = this.state
    const handleChange = this.handleChange.bind(this)
    const handleToggleEntry = this.handleToggleEntry.bind(this)

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
            id={entry.id}
            title={entry.title}
            category={find(filters, {id: entry.filterId}).title}
            content={entry.content}
            open={open.indexOf(entry.id) > -1}
            onChange={handleToggleEntry}
          />
        ))}
      </Entries>
    </main>
  }
}

function filterEntries (entries, enabled) {
  return entries.filter(entry => {
    return enabled.indexOf(entry.filterId) > -1
  })
}
