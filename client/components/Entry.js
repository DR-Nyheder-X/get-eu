import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import '../scss/Entry.scss'

export default class Entry extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    open: PropTypes.bool
  }

  constructor (props) {
    super(props)
    const open = !!props.open
    this.state = { open }
  }

  componentWillReceiveProps (props) {
    const open = !!props.open
    this.setState({ open })
  }

  handleChange (event) {
    // event.preventDefault()
    const open = !this.state.open
    this.setState({ open })
  }


  render () {
    const { open, onChange } = this.props
    const cls = classname('Entry', [
      open ? 'Entry--open' : 'Entry--closed'
    ])

    return (
      <div className={cls} onClick={this.handleChange.bind(this)}>
        <header className='Entry-header'>
          <h2>{this.props.category}</h2>
          <h1>{this.props.title}</h1>
        </header>
        <div className='Entry-content'>
          {this.props.children}
        </div>
        <div className='Entry-toggle'>
          <a href='#'>Åbn</a>
        </div>
      </div>
    )
  }
}
