import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RestaurantCard from '../components/RestaurantCard'
import Popup from '../components/popup'
import * as RestsAction from '../actions/Rests'
import { getToken } from '../api/index'

class HomePage extends Component {
  static propTypes = {
    getRestaurants: PropTypes.func.isRequired,
    restaurants: PropTypes.object.isRequired
  }
  constructor() {
    super()
    this.state = {
      show: false
    }
  }
  componentWillMount() {
    const token = getToken()
    if (!token) {
      this.context.router.push('/login')
    }
    this.props.getRestaurants()
  }
  handleShowChange() {
    const self = this
    this.setState({
      show: !self.state.show
    })
  }
  render() {
    return (
      <div>
        <RestaurantCard restaurants={this.props.restaurants}/>
        <Popup open={this.state.show} component={null} changeShow={this.handleShowChange.bind(this)}/>
      </div>
    )
  }
}

HomePage.contextTypes = {
  router: React.PropTypes.object
}

const mapState = (state) => {
  return { restaurants: state.cardsReducer }
}

export default connect(mapState, RestsAction)(HomePage)
