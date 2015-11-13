import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import '../scss/Entry.scss'

export default class Entry extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    open: PropTypes.bool,
    onChange: PropTypes.func
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
    event.preventDefault()

    const open = !this.state.open
    this.setState({ open })

    const { onChange } = this.props
    onChange && onChange(this.state)
  }

  render () {
    const { category, title, content } = this.props
    const { open } = this.state
    const toggleText = open ? 'Luk' : 'Åbn'

    const cls = classname('Entry', [
      open ? 'Entry--open' : 'Entry--closed'
    ])

    return (
      <div className={cls}>
        <div className='Entry-inner'>
          <header className='Entry-header'>
            <h2>{category}</h2>
            <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
          </header>
          <div className='Entry-content'
            dangerouslySetInnerHTML={{__html: content}}></div>
          <div className='Entry-toggle'>
            <a href='#' onClick={this.handleChange.bind(this)}>{toggleText}</a>
          </div>
        </div>
      </div>
    )
  }
}
