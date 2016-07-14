import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RestaurantsContainer from '../containers/RestaurantsContainer.js'
import * as RestsAction from '../actions/getRests'

class HomePage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    logItems: PropTypes.func.isRequired,
    restaurants: PropTypes.array.isRequired
  }

  componentWillMount() {
    this.props.logItems()
  }
  render() {
    return (
      <RestaurantsContainer data={this.props.restaurants}/>
    )
  }
}

const mapState = (state) => {
  return { restaurants: state.cardsReducer }
}

export default connect(mapState, RestsAction)(HomePage)
