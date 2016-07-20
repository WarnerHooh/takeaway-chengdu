import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RestaurantCard from '../components/RestaurantCard'
import * as RestsAction from '../actions/getRests'
import Popup from '../components/popup'

class HomePage extends Component {
  static propTypes = {
    logItems: PropTypes.func.isRequired,
    restaurants: PropTypes.object.isRequired
  }
  constructor() {
    super()
    this.state = {
      show: false
    }
  }
  componentWillMount() {
    this.props.logItems()
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

const mapState = (state) => {
  return { restaurants: state.cardsReducer }
}

export default connect(mapState, RestsAction)(HomePage)
