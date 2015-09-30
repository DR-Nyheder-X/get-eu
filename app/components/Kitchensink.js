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
          <p><a className="Button Button--small" href="#">Small button</a></p>
          <p><a className="Button" href="#">Default button</a></p>
          <p><a className="Button Button--disabled" href="#">Disabled button</a></p>
          <p><a className="Button Button--red" href="#">Red button</a></p>
          <p><a className="Button Button--light" href="#">Light button</a></p>
          <p><a className="Button Button--shadow" href="#">Default with shadow</a></p>
          <p><a className="Button Button--red Button--darkShadow" href="#">Red with dark shadow</a></p>
          <p><a className="Button Button--shadow Button--fullWidth" href="#">Full width with shadow</a></p>
        </div>

      </div>
    )
  }
})

module.exports = Kitchensink
