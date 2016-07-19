import React, { Component, PropTypes } from 'react'
import HistoryForm from './HistoryForm'
import Rating from './Rating'

class History extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hide: true,
      score: 0
    }
  }
  handleHideChange(e) {
    const self = this;
    this.setState({
      hide: !self.state.hide
    })
  }
  handleScoreChange(event) {
    this.setState({
      score: event.currentTarget.getAttribute('data-key')
    })
  }
  render() {
    console.log(this.props)
    return (
      <div className="history-container">
        {(() => {
          return this.props.historyItem.map((item, i) => {
            return (
              <div className="history" key={i}>
                <div className="history-logo">
                  <img src={'../assets/images/' + item.pic} alt=""/>
                </div>
                <div className="history-info">
                  <div className="history-contentInfo">
                    <p>{item.name}</p>
                    <Rating rate={item.score}/>
                    <p>{item.meetingname}</p>
                    <p>tel:{item.tel}</p>
                    <p>
                      <span>{item.unit} Pieces </span>
                      |
                      <span> RMB {item.unit * 12}</span>
                    </p>
                    {(() => {
                      if (item.orderStatus === 'cancel') {
                        return (
                          <p className="history-comment__Cancel">
                            <span>Comment cancel</span>
                            <button>cancel</button>
                          </p>
                        )
                      }
                      return (
                        <p className="history-comment__Evaluate">
                          <span>done</span>
                          <button onClick={e => this.handleHideChange(e)}>evaluate</button>
                        </p>
                      )
                    })()}
                  </div>
                  <div className="history-other">
                    <div className="history-orderInfo">
                      <p>{item.comments}</p>
                    </div>
                    <br/>
                    <div className="history-date">
                      订餐时间: {item.time}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        })()}
        {(() => {
          if (this.state.hide !== true) {
            return (
              <div className="historyFormBox">
                <HistoryForm changeScore={this.handleScoreChange.bind(this)} changeHide={this.handleHideChange.bind(this)} score={this.state.score} />
                <div className="blackLayer" onClick={e => this.handleHideChange(e)}></div>
              </div>
            )
          }
        })()}
      </div>
    )
  }
}

History.propTypes = {
  historyItem: PropTypes.array.isRequired
}

export default History
