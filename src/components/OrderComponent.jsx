import React, { Component, PropTypes } from 'react'
import OrderForm from './OrderForm'


class OrderComponent extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(event, data) {
    console.log(event); // this should be the data, but is an event
    console.log('Submission received!');
    this.context.router.push('/history')
  }
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
          <OrderForm onSubmit={this.handleSubmit.bind(this)}/>
        </div>
      </div>
    )
  }
}

OrderComponent.propTypes = {
  restaurants: PropTypes.array.isRequired
}

OrderComponent.contextTypes = {
  router: React.PropTypes.object
}

export default OrderComponent
