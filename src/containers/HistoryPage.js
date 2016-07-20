import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import History from '../components/History'
import * as historyAction from '../actions/history'
import { getToken } from '../api/index'

class HistoryPage extends Component {
  static propTypes = {
    getHistory: PropTypes.func.isRequired,
    historyItem: PropTypes.array.isRequired
  }

  componentWillMount() {
    const token = getToken()
    if (!token) {
      this.context.router.push('/login')
    }
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

HistoryPage.contextTypes = {
  router: React.PropTypes.object
}

export default connect(mapState, historyAction)(HistoryPage)
