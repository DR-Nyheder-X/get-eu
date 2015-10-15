import React, { Component, PropTypes } from 'react'
import formatTypeClasses from '../utils/formatTypeClasses'
import Header from './Header'
import Button from './Button'

import '../scss/Start.scss'

export default class Start extends Component {
  static get propTypes () {
    return {
      className: PropTypes.string
    }
  }
  render () {
    const cls = 'Start'

    return (
      <div className={cls}>
        <Header />
        <h1>Bliv klar til<br />afstemningen om<br /><em>retsforbeholdet</em></h1>
        <h2>Tag et lynkursus i lovområderne<br />og test din viden</h2>
        <div className='Start-baseballs'></div>
        <div className='Start-cta'>
          <Button type='red darkShadow fullWidth'>Kom i gang</Button>
        </div>
        <a href='#' className='Start-close'>Luk</a>
      </div>
    )
  }
}
