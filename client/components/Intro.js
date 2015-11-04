import React, { Component, PropTypes } from 'react'
import Button from './Button'
import { whereToGo } from '../utils/whereToGo'
import { connect } from 'react-redux'

import '../scss/Intro.scss'

@connect(state => ({
  progress: state.progress
}))
export default class Intro extends Component {
  static propTypes = {
    progress: PropTypes.object.isRequired
  }

  render () {
    const goTo = whereToGo(this.props.progress)

    return (
      <div className='Intro'>
        <div className='Intro-inner'>
          <header>
            <h1>
              Om <em>5<i>:</i>00</em> minutter<br />
              og 20 spørgsmål
            </h1>
            <h2>ved du det meste om<br />retsforbeholdet</h2>
          </header>

          <ul>
            <li><i></i> Læs et par kort</li>
            <li><i></i> Svar på spørgsmål</li>
            <li><i></i> Optjen point</li>
          </ul>

          <div className='Intro-cta'>
            <Button to={goTo} type='yellow darkShadow'>Start</Button>
          </div>
        </div>
      </div>
    )
  }
}
