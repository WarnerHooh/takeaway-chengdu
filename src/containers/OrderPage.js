import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import OrderComponent from '../components/OrderComponent'
import { getToken } from '../api/index'

class OrderPage extends Component {
  static propTypes = {
    restaurants: PropTypes.object.isRequired
  }
  componentWillMount() {
    const token = getToken()
    if (!token) {
      this.context.router.push('/login')
    }
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

OrderPage.contextTypes = {
  router: React.PropTypes.object
}

export default connect((mapState))(OrderPage)
