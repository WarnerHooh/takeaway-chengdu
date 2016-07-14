import React, { Component, PropTypes } from 'react'
import OrderForm from './OrderForm'


class OrderComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="orderComponent">
        <div className="orderComponent--restaurantInfo">
          <img src={'../assets/images/' + this.props.data.pic}></img>
          <h1>{this.props.data.name}</h1>
          <div className="orderComponent--restaurantInfo__address">Address: {this.props.data.address}</div>
          <div className="orderComponent--restaurantInfo__tel">Tel: {this.props.data.tel}</div>
          <p>Desctiptions: {this.props.data.summary}</p>
        </div>
        <div className="orderComponent--restaurantForm">
          <OrderForm />
        </div>
      </div>
    )
  }
}

OrderComponent.propTypes = {
  data: PropTypes.array.isRequired
}

export default OrderComponent
