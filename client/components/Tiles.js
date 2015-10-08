import React, { Component, PropTypes } from 'react'
import classname from 'classname'
import formatTypeClasses from '../utils/formatTypeClasses'
import Progressbar from './Progressbar'

import '../scss/Tiles.scss'
import '../scss/Tile.scss'

export default class Tiles extends Component {
  static get propTypes () {
    return {
      className: PropTypes.string
    }
  }
  render () {
    const cls = classname('Tiles', this.props.className)
    return (
      <section className={cls} {...this.props}>
        <div className="Tile Tile-migrants">
          <div className="Tile-inner">
            <i></i>
            <h3>Flygtninge</h3>
            <h4>4/30</h4>
            <Progressbar percent='70' type='small dimmed' />
          </div>
        </div>

        <div className="Tile Tile--police">
          <div className="Tile-inner">
            <i></i>
            <h3>Politi</h3>
            <h4>4/30</h4>
            <Progressbar percent='30' type='small dimmed' />
          </div>
        </div>

        <div className="Tile Tile--family">
          <div className="Tile-inner">
            <i></i>
            <h3>Familie</h3>
            <h4>4/30</h4>
            <Progressbar percent='80' type='small dimmed' />
          </div>
        </div>

        <div className="Tile Tile--justice">
          <div className="Tile-inner">
            <i></i>
            <h3>Familie</h3>
            <h4>30/30</h4>
            <Progressbar percent='100' type='small dimmed' />
          </div>
        </div>

        <div className="Tile Tile--business">
          <div className="Tile-inner">
            <i></i>
            <h3>Erhverv</h3>
            <h4>4/30</h4>
            <Progressbar percent='10' type='small dimmed' />
          </div>
        </div>

        <div className="Tile Tile--eu">
          <div className="Tile-inner">
            <i></i>
            <h3>EU Generelt</h3>
            <h4>20/30</h4>
            <Progressbar percent='50' type='small dimmed' />
          </div>
        </div>
      </section>
    )
  }
}
