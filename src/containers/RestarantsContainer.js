/**
 * Created by yinzhaoshu on 7/10/16.
 */
import React, { Component, PropTypes } from 'react'
import RestaurantCard from '../components/RestaurantCard.js'

class RestarantsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="restaurant-container">
          <RestaurantCard restaurants={this.props.data}/>
      </div>
    )
  }

}

RestarantsContainer.propTypes = {
  data: PropTypes.array.isRequired
}

export default RestarantsContainer
