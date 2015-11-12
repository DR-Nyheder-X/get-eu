import React, { Component, PropTypes } from 'react'
var Masonry = require('react-masonry-component')(React) // TODO: Not exactly kosher

import '../scss/Entries.scss'

export default class Entries extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const masonryOptions = {
      transitionDuration: 0,
      itemSelector: '.Entry',
      isResizeBound: true
    }

    return (
      <div className='Entries'>
        <Masonry className={'Entries'} elementType={'div'} options={masonryOptions} disableImagesLoaded={true}>
          {this.props.children}
        </Masonry>
      </div>
    )
  }
}
