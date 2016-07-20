import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RestaurantCard from '../components/RestaurantCard'
import * as RestsAction from '../actions/Rests'

class HomePage extends Component {
  static propTypes = {
    getRestaurants: PropTypes.func.isRequired,
    restaurants: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.props.getRestaurants()
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
