import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Filters from './Filters'
import Toggle from './Toggle'
import { toggleSection } from '../actions/leksikon'

const sections = [
  'Historiske begivenheder',
  'Retsforbeholdet',
  'Partiernes holdninger',
  'Ja-sidens argumenter',
  'Nej-sidens argumenter',
  'Valg-detaljer'
]

@connect(state => ({
  enabled: state.sections.enabled
}))
export default class Leksikon extends Component {
  static propTypes = {
    enabled: PropTypes.arrayOf(PropTypes.string),
    dispatch: PropTypes.func
  }

  handleChange (state) {
    const { dispatch } = this.props
    dispatch(toggleSection(state.value, state.checked))
  }

  render () {
    const { enabled } = this.props
    const handleChange = this.handleChange.bind(this)

    return <main className='App'>
      <Filters>
        {sections.map(title => (
          <Toggle
            key={title}
            onChange={handleChange}
            checked={enabled.includes(title)}
            value={title}
          >{title}</Toggle>
        ))}

        {enabled.map(title => (
          <h1 key={title}>{title}</h1>
        ))}
      </Filters>
    </main>
  }
}
