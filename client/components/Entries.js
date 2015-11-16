import React, { Component, PropTypes } from 'react'
import createMasonry from 'react-masonry-component'

const Masonry = createMasonry(React)

import '../scss/Entries.scss'

export default class Entries extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultMasonryOptions = {
    transitionDuration: '.2s',
    itemSelector: '.Entry',
    isResizeBound: true
  }

  componentWillReceiveProps (props) {
    setTimeout(function() {
      this.refs.masonry.masonry.layout()
    }, 0)
  }

  render () {
    return <div className='Entries'>
      <Masonry ref='masonry'
        className='Entries'
        elementType='div'
        options={Entries.defaultMasonryOptions}
      disableImagesLoaded={false}>
        {this.props.children}
      </Masonry>
    </div>
  }
}
