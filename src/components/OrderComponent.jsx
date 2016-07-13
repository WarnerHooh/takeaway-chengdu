import React, { Component, PropTypes } from 'react'
import OrderForm from './OrderForm'
class OrderComponent extends Component {

  render() {
    return (
      <div className="orderComponent">
        <div className="orderComponent--restaurantInfo">
          <img src={'../assets/images/' + this.props.restaurants.pic}></img>
          <h1>{this.props.restaurants.name}</h1>
          <div className="orderComponent--restaurantInfo__address">Address: {this.props.restaurants.address}</div>
          <div className="orderComponent--restaurantInfo__tel">Tel: {this.props.restaurants.tel}</div>
          <p>Desctiptions: {this.props.restaurants.summary}</p>
        </div>
        <div className="orderComponent--restaurantForm">
          <OrderForm />
        </div>
      </div>
    )
  }
}


OrderComponent.propTypes = {
  restaurants: PropTypes.object.isRequired
}
export default OrderComponent
