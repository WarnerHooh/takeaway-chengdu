import React, { Component, PropTypes } from 'react'
import RestaurantCard from '../components/RestaurantCard.js'

class RestaurantsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <RestaurantCard restaurants={this.props.data}/>
    )
  }

}

RestaurantsContainer.propTypes = {
  data: PropTypes.array.isRequired
}

export default RestaurantsContainer
