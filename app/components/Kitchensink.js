var React = require('react')
require('../scss/PageTitle.scss')
require('../scss/SectionTitle.scss')
require('../scss/Copy.scss')
require('../scss/Button.scss')

var Kitchensink = React.createClass({
  render: function() {
    return (
      <div className="Kitchensink">
        <h1 className="PageTitle PageTitle--blocky">Kitchensink</h1>
        <div className="SectionTitle"><h2>Buttons</h2></div>
        <div className="Copy">
          <p>Buttonize things with the <code>.Button</code> class. Disable with <code>.Button--disabled</code>.</p>
          <p><a className="Button" href="#">This is a button</a></p>
          <p><a className="Button Button--disabled" href="#">Disabled button</a></p>

        </div>

      </div>
    )
  }
})

module.exports = Kitchensink
