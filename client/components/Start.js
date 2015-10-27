import React, { Component, PropTypes } from 'react'
import Header from './Header'
import Button from './Button'
import { connect } from 'react-redux'
import { whereToGo } from '../utils/whereToGo'

import '../scss/Start.scss'

@connect(state => ({ progress: state.progress }))
export default class Start extends Component {
  static propTypes = {
    className: PropTypes.string,
    progress: PropTypes.object
  }

  componentDidMount () {
    const { progress, history } = this.props

    // Redirect to next relevant step
    if (progress.completedStepIds.length > 0) {
      history.replaceState(null, whereToGo(progress))
    }
  }

  render () {
    const goTo = whereToGo(this.props.progress)

    return (
      <div className='Start'>
        <Header />
        <h1>
          Bliv klar til<br />afstemningen om<br /><em>retsforbeholdet</em>
        </h1>
        <h2>
          Tag et lynkursus i lovområderne<br />og test din viden
        </h2>
        <div className='Start-baseballs'></div>
        <div className='Start-cta'>
          <Button to={goTo} type='yellow darkShadow fullWidth'>
            Kom i gang
          </Button>
        </div>
      </div>
    )
  }
}
