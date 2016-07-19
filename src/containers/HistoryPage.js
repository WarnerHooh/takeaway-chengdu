import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import History from '../components/History'
import * as historyAction from '../actions/history'

class HistoryPage extends Component {
  static propTypes = {
    getHistory: PropTypes.func.isRequired,
    historyItem: PropTypes.array.isRequired
  }

  componentWillMount() {
    this.props.getHistory()
  }
  render() {
    return (
      <History historyItem={this.props.historyItem}/>
    )
  }
}

const mapState = (state) => {
  return {
    historyItem: state.history
  }
}

export default connect(mapState, historyAction)(HistoryPage)
