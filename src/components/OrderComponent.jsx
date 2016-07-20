import React, { Component, PropTypes } from 'react'
import OrderForm from './OrderForm'
import { connect } from 'react-redux'
import * as SubmitOrder from '../actions/submitOrder'
import { bindActionCreators } from 'redux'

class OrderComponent extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(event, data) {
    var name = this.props.restaurant.name
    var tel = this.props.restaurant.tel
    var pic = this.props.restaurant.pic
    const newOrder = { ...event, name, tel, pic }
    this.props.actions.submitOrder(newOrder)
    this.context.router.push('/history')
  }
  render() {
    return (
      <div className="orderComponent">
        <div className="orderComponent--restaurantInfo">
          <img src={'../assets/images/' + this.props.restaurant.pic}></img>
          <h1>{this.props.restaurant.name}</h1>
          <div className="orderComponent--restaurantInfo__address">Address: {this.props.restaurant.address}</div>
          <div className="orderComponent--restaurantInfo__tel">Tel: {this.props.restaurant.tel}</div>
          <p>Desctiptions: {this.props.restaurant.summary}</p>
        </div>
        <div className="orderComponent--restaurantForm">
          <OrderForm onSubmit={this.handleSubmit.bind(this)}/>
        </div>
      </div>
    )
  }
}

OrderComponent.propTypes = {
  restaurant: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

OrderComponent.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    restaurant: state.cardsReducer.choosed
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SubmitOrder, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderComponent)
