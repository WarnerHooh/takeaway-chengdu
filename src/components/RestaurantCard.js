/**
 * Created by yinzhaoshu on 7/10/16.
 */
import React, { Component, PropTypes } from 'react'
import StarRate from './StarRate.js'
class RestaurantCard extends Component {
  render() {
    return (
      <div className="restaurant-container">
        {this.props.restaurants.map((n) => {
          return (
            <div className="restaurant">
              <div className="restaurant-pic">
                <img src={'../assets/images/' + n.pic}/>
              </div>
              <div className="restarant-name">{n.name}</div>
              <div className="restarant-score">得分:{n.score}分</div>
              <div className="restarant-summary">餐馆介绍:{n.summary}</div>
              <StarRate rate={n.score}/>
            </div>
          )
        })}
      </div>
    )
  }
}

RestaurantCard.propTypes = {
  restaurants: PropTypes.array.isRequired
}
export default RestaurantCard
