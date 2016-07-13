/**
 * Created by yinzhaoshu on 7/10/16.
 */
import React, { Component, PropTypes } from 'react'
import Rating from './Rating.jsx'

class RestaurantCard extends Component {
  static propTypes = {
    restaurants: PropTypes.array.isRequired
  }
  render() {
    return (
      <div className="restaurant-container">
        {this.props.restaurants.map((n, i) => {
          return (
            <div className="restaurant" key={i}>
              <div className="restaurant-pic">
                <img src={'../assets/images/' + n.pic}/>
              </div>
              <div className="restarant-name">{n.name}</div>
              <Rating rate={n.score}/>
              <div className="restarant-summary">{n.summary}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default RestaurantCard
