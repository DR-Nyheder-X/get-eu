import React, { Component, PropTypes } from 'react'
import PageTitle from './PageTitle'

import '../scss/ZeroPointsMessage.scss'

export default class ZeroPointsMessage extends Component {
  render () {
    const cls = 'ZeroPointsMessage'
    return (
      <div className={cls}>
        <div className='ZeroPointsMessage-hint'>Start her</div>
        <PageTitle type='centered shadow'>
          <h1>
            <em>Du har ingen</em> <em>point endnu</em>
          </h1>
        </PageTitle>
      </div>
    )
  }
}
