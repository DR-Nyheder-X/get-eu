var React = require('react')

// Styles
require('../scss/About.scss')

var About = React.createClass({
  render: function() {
    return (
      <div className="About">
        <h1>About</h1>
      </div>
    )
  },
  componentDidMount: function(){
    console.log('About did mount')
  }
})

module.exports = About
