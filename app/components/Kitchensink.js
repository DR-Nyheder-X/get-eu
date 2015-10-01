import React from 'react'
import Button from './Button'

require('../scss/PageTitle.scss')
require('../scss/SectionTitle.scss')
require('../scss/Copy.scss')

var Kitchensink = React.createClass({
  render: function() {
    return (
      <div className="Kitchensink">
        <div className="PageTitle PageTitle--boxed"><h1>Kitchensink</h1></div>
        <div className="SectionTitle"><h2>Buttons</h2></div>
        <div className="Copy">
          <p><Button type='small'>Small button</Button></p>
          <p><Button>Default Button</Button></p>
          <p><Button disabled>Disabled button</Button></p>
          <p><Button type='red'>Red button</Button></p>
          <p><Button type='light'>Light button</Button></p>
          <p><Button type='shadow'>Default with shadow</Button></p>
          <p><Button type='red darkShadow'>Red with dark shadow</Button></p>
          <p><Button type='shadow fullWidth'>Full width with shadow</Button></p>
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
