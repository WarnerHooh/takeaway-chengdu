import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import HomeComponent from '../components/HomeComponent'

class HomePage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  render() {
    return (
      <HomeComponent />
    )
  }
}

const mapState = (state) => ({})

export default connect(mapState)(HomePage)
