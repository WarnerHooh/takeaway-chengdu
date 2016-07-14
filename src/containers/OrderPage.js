import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as order from '../actions/order'
import OrderComponent from '../components/OrderComponent'

class OrderPage extends Component {
  componentWillMount() {
    this.props.orders()
  }
  render() {
    console.log(this.props.orderdata)
    return (
      <div className="orderPage">
        <OrderComponent data={this.props.orderdata[0]} />
      </div>
    )
  }
}

OrderPage.propTypes = {
  orders: PropTypes.func.isRequired,
  orderdata: PropTypes.array.isRequired
}
const mapState = (state) => {
  return { orderdata: state.orderAction }
}
export default connect(mapState, order)(OrderPage)
