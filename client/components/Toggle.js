var React = require('react')
require('../scss/Toggle.scss')

var Toggle = React.createClass({

  propTypes: {
    children: React.PropTypes.node
  },

  getInitialState: function () {
    return { enabled: true }
  },

  toggle: function () {
    if (this.state.enabled === true) { this.setState({ enabled: false }) }
    if (this.state.enabled === false) { this.setState({ enabled: true }) }
  },

  render: function () {
    var cls = 'Toggle'
    if (this.state.enabled === true) { cls = 'Toggle Toggle--disabled' }
    if (this.state.enabled === false) { cls = 'Toggle Toggle--enabled' }

    return (
      <div className={cls} onClick={this.toggle}>
        {this.props.children}
        <div className="Toggle-switch">
          <i></i>
        </div>
      </div>
    )
  }
})

module.exports = Toggle
