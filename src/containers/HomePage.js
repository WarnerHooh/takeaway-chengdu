import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RestarantsContainer from '../containers/RestarantsContainer.js'

import Button from '../components/Button'

class HomePage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    restaurants: PropTypes.array.isRequired,
  };
  render() {
    return (
      <RestarantsContainer data={this.props.restaurants}/>
    )
  }
}

const mapState = (state) => {
  return { restaurants: state.cardsReducer }
}

export default connect(mapState)(HomePage)
