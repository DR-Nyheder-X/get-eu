var React = require('react')
require('../scss/PageTitle.scss')

var Kitchensink = React.createClass({
  render: function() {
    return (
      <div className="Kitchensink">
        <h1 className="PageTitle PageTitle--blocky">Kitchensink</h1>
      </div>
    )
  }
})

module.exports = Kitchensink
