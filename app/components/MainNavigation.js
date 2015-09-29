var React = require('react')

// Styles
require('../scss/MainNavigation.scss')

var MainNavigation = React.createClass({
  render: function() {
    return (
      <nav className="MainNavigation">
        <a href="#/">Home</a>
        <a href="#/about">About</a>
      </nav>
    )
  }
})

module.exports = MainNavigation
