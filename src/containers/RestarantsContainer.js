
import React, { Component, PropTypes } from 'react'
import RestaurantCard from '../components/RestaurantCard.js'

class RestarantsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <RestaurantCard restaurants={this.props.data}/>
    )
  }

}

RestarantsContainer.propTypes = {
  data: PropTypes.array.isRequired
}

export default RestarantsContainer
