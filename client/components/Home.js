import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

require('../scss/Home.scss')

export default class Home extends Component {
  render () {
    return (
      <div className="Home">
        <h1>Get EU frontend components</h1>
        <ul>
          <li><Link to='/kitchensink'>Kitchensink</Link></li>
        </ul>
      </div>
    )
  }
}
