var React = require('react')
require('../scss/Home.scss')

var Home = React.createClass({
  render: function() {
    return (
      <div className="Home">
        <h1>Get EU frontend components</h1>
        <ul>
          <li><a href="#/kitchensink">Kitchensink</a></li>
        </ul>
      </div>
    )
  }
})

module.exports = Home
