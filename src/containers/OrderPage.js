import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import OrderComponent from '../components/OrderComponent'
import Popup from '../components/popup'
import { getToken } from '../api/index'

class OrderPage extends Component {
  static propTypes = {
    restaurants: PropTypes.object.isRequired
  }
  constructor() {
    super()
    this.state = {
      show: false
    }
  }
  handleShowChange() {
    const self = this
    this.setState({
    show: !self.state.show
    })
  }
  componentWillMount() {
    const token = getToken()
    if (!token) {
      this.context.router.push('/login')
    }
  }
  render() {
    return (
      <div>
        <div className="orderPage">
          <OrderComponent restaurants={this.props.restaurants}/>
        </div>
        <Popup open={this.state.show} component={null} changeShow={this.handleShowChange.bind(this)}/>
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
