import React, { Component } from 'react'

class Rating extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var self = this

    const styles = {
      container: {
        width: self.props.rate / 5 * 72 + 'px'
      }

    }
    return (
      <div className="restaurantList--rate">
        <span className="restaurantList--rate__star">
          <span className="restaurantList--rate__yellowstar" style={ styles.container }></span>
        </span>
        <span className="restaurantList--rate__count">{self.props.rate} 分</span>
      </div>
    )
  }
}

export default Rating
