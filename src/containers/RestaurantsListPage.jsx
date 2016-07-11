import React, { Component, PropTypes } from 'react'
import Restaurants from '../components/Restaurants'

class RestaurantsListPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props)
  }
  render() {
    return (<Restaurants />)
  }
}

export default RestaurantsListPage
