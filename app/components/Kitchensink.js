var React = require('react')
require('../scss/PageTitle.scss')
require('../scss/SectionTitle.scss')
require('../scss/Copy.scss')
require('../scss/Button.scss')

var Kitchensink = React.createClass({
  render: function() {
    return (
      <div className="Kitchensink">
        <div className="PageTitle PageTitle--boxed"><h1>Kitchensink</h1></div>
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

        <div className="SectionTitle"><h2>Headings</h2></div>
        <div className="PageTitle"><h1>Page title</h1></div>
        <div className="PageTitle PageTitle--shadow"><h1>Page title with shadow</h1></div>
        <div className="PageTitle PageTitle--boxed"><h1>Boxed page title</h1></div>
        <div className="PageTitle PageTitle--boxed PageTitle--shadow"><h1>Boxed page title with shadow</h1></div>
        <div className="PageTitle PageTitle--small"><h1>Small page title</h1></div>
        <div className="PageTitle PageTitle--small PageTitle--centered">
          <h2 className="PageTitle-preheading">This is a pre-heading with a</h2>
          <h1>Small centered page title</h1>
        </div>
      </div>
    )
  }
})

module.exports = Kitchensink
