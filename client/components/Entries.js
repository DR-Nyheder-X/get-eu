import React, { Component, PropTypes } from 'react'
import createMasonry from 'react-masonry-component'

const Masonry = createMasonry(React)

import '../scss/Entries.scss'

export default class Entries extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultMasonryOptions = {
    transitionDuration: 0,
    itemSelector: '.Entry',
    isResizeBound: true
  }

  render () {
    return <div className='Entries'>
      <Masonry className='Entries' elementType='div' options={Entries.defaultMasonryOptions} disableImagesLoaded>
        {this.props.children}
      </Masonry>
    </div>
  }
}
