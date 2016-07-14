import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import History from '../components/History'

class HistoryPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  render() {
    return (
      <History />
    )
  }
}

const mapState = (state) => ({})

export default connect(mapState)(HistoryPage)
