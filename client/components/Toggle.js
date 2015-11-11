import React, { Component, PropTypes } from 'react'
import classname from 'classname'

import '../scss/Toggle.scss'

export default class Toggle extends Component {
  static propTypes = {
    children: PropTypes.node,
    checked: PropTypes.bool,
    onChange: PropTypes.func
  }

  constructor (props) {
    super(props)
    const checked = !!props.checked
    this.state = { checked }
  }

  componentWillReceiveProps (props) {
    const checked = !!props.checked
    this.setState({ checked })
  }

  handleChange (event) {
    const checked = !this.state.checked
    this.setState({ checked })
  }

  render () {
    const { checked, onChange } = this.props
    const cls = classname('Toggle', [
      checked ? 'Toggle--enabled' : 'Toggle--disabled'
    ])

    return (
      <div className={cls} onClick={this.handleChange.bind(this)}>
        {this.props.children}
        <div className="Toggle-switch">
          <i></i>
        </div>
      </div>
    )
  }
}
