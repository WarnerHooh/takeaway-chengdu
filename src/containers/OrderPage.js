import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import OrderComponent from '../components/OrderComponent'

class OrderPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    restaurants: PropTypes.array.isRequired
  }
  render() {
    console.log(this.props)
    return (
      <div className="orderPage">
        <OrderComponent restaurants={this.props.restaurants[0]}/>
      </div>
    )
  }
}

const mapState = (state) => {
  return { restaurants: state.cardsReducer }
}

export default connect((mapState))(OrderPage)
