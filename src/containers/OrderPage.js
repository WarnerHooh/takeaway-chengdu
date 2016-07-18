import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import OrderComponent from '../components/OrderComponent'

class OrderPage extends Component {
  static propTypes = {
    restaurants: PropTypes.array.isRequired
  }
  componentDidUpdate() {
    this.context.router.push('/history')
  }
  render() {
    return (
      <div className="orderPage">
        <OrderComponent restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapState = (state) => {
  return { restaurants: state.cardsReducer.choosed }
}

export default connect((mapState))(OrderPage)
