import React, { Component } from 'react'
import PageTitle from './PageTitle'

import '../scss/ZeroPointsMessage.scss'

export default class ZeroPointsMessage extends Component {
  render () {
    return (
      <div className='ZeroPointsMessage'>
        <div className='ZeroPointsMessage-hint'>Start her</div>
        <PageTitle type='centered shadow'>
          <em>Du har ingen</em> <em>point endnu</em>
        </PageTitle>
      </div>
    )
  }
}
