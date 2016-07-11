import React, { Component, PropTypes } from 'react'
import Rating from './Rating'

class Restaurant extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <img src=""/>
        <div>title</div>
        <Rating rate={3.2}/>
        <p>Restaurant ListRestaurant ListRestaurant ListRestaurant List</p>
      </div>
    )
  }
}


export default Restaurant
