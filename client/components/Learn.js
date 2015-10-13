import React, { Component, PropTypes } from 'react'
import Repo from '../Repo'
import PageTitle, { PreHeading } from './PageTitle'

export default class Learn extends Component {
  static propTypes = {
  }

  render () {
    return (
      <div>
        <PageTitle type="centered">
          <PreHeading>Lær de store ord bag</PreHeading>
          <h1>retsforbeholdet</h1>
        </PageTitle>
      </div>
    )
  }
}
