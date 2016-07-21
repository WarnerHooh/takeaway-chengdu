import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import History from '../components/History'
import * as historyAction from '../actions/history'
import HistoryForm from '../components/HistoryForm'
import Popup from '../components/popup'
import { getToken } from '../api/index'

class HistoryPage extends Component {
  static propTypes = {
    getHistory: PropTypes.func.isRequired,
    historyItem: PropTypes.array.isRequired
  }
  constructor() {
    super()
    this.state = {
      show: false,
      score: 0
    }
  }
  componentWillMount() {
    const token = getToken()
    if (!token) {
      this.context.router.push('/login')
    }
    this.props.getHistory()
  }
  handleShowChange(orderId) {
    const self = this
    this.setState({
      show: !self.state.show,
      orderId
    })
  }
  handleScoreChange(event) {
    this.setState({
      score: event.currentTarget.getAttribute('data-key')
    })
  }
  render() {
    return (
      <div>
        <History historyItem={this.props.historyItem} changeShow={e => this.handleShowChange(e)}/>
        <Popup open={this.state.show} component={<HistoryForm score={this.state.score} orderId={this.state.orderId} changeShow={(e) => this.handleShowChange(e)} changeScore={(e) => this.handleScoreChange(e)}/>} changeShow={this.handleShowChange.bind(this)}/>
      </div>

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
