import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Button from '../components/Button'

class HomePage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  render() {
    return (
      <div>
        <div>HomePage!</div>
        <Button />
      </div>
    )
  }
}

const mapState = (state) => ({})

export default connect(mapState)(HomePage)
