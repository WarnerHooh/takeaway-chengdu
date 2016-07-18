import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RestaurantCard from '../components/RestaurantCard'
import * as RestsAction from '../actions/getRests'

class HomePage extends Component {
  static propTypes = {
    logItems: PropTypes.func.isRequired,
    restaurants: PropTypes.array.isRequired
  }

  componentWillMount() {
    this.props.logItems()
  }
  render() {
    return (
      <RestaurantCard restaurants={this.props.restaurants}/>
    )
  }
}

const mapState = (state) => {
  return { restaurants: state.cardsReducer }
}

export default connect(mapState, RestsAction)(HomePage)
