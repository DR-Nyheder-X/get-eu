var React = require('react')

var TestComponent = React.createClass({
  render: function() {
    return (
      <div className="TestComponent">
        This is a test component.
      </div>
    )
  },
  componentDidMount: function(){
    console.log('test did mount')
  }
})

module.exports = TestComponent
