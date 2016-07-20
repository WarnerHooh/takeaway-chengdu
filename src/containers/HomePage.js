import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RestaurantCard from '../components/RestaurantCard'
import * as RestsAction from '../actions/Rests'
import { getToken } from '../api/index'

class HomePage extends Component {
  static propTypes = {
    getRestaurants: PropTypes.func.isRequired,
    restaurants: PropTypes.object.isRequired
  }

  componentWillMount() {
    const token = getToken()
    if (!token) {
      this.context.router.push('/login')
    }
    this.props.getRestaurants()
  }
  render() {
    return (
      <RestaurantCard restaurants={this.props.restaurants}/>
    )
  }
}

HomePage.contextTypes = {
  router: React.PropTypes.object
}

const mapState = (state) => {
  return { restaurants: state.cardsReducer }
}

export default connect(mapState, RestsAction)(HomePage)
