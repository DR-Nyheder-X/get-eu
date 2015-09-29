var React = require('react')

// Styles
require('../scss/NotFound.scss')

var NotFound = React.createClass({
  render: function() {
    return (
    <div className="NotFound">
        <h1>We can't find that page</h1>
      </div>
    )
  }
})

module.exports = NotFound
