import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Repo from '../Repo'

@connect(state => ({
  progress: state.progress
}))
export default class Test extends Component {
  static propTypes = {
    progress: PropTypes.object.isRequired
  }

  render () {
    return (
      <div>
        test
        {Repo.categories.map(categoryElm)}
      </div>
    )
  }
}

function categoryElm (category) {
  return (
    <div key={category.title}>{category.title}</div>
  )
}
