import React, { Component, PropTypes } from 'react'
import HistoryForm from './HistoryForm'

class History extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className="history-container">
        <div className="history">
          <div className="history-logo">
            <img src="../assets/images/res1.jpg" alt=""/>
          </div>
          <div className="history-info">
            <div className="history-contentInfo">
              <p>川调</p>
              <p>年终大会</p>
              <p>tel:12112121212</p>
              <p>
                <span>18 Pieces </span>
                |
                <span> RMB 180</span>
              </p>
              <p className="history-comment__Cancel">
                <span>Comment cancel</span>
                <button>cancel</button>
              </p>
            </div>
            <div className="history-other">
              <div className="history-orderInfo">
                <p>鱼香肉丝盒饭 * 6</p>
                <p>仔姜肉丝盒饭 * 6</p>
                <p>青椒肉丝盒饭 * 6</p>
              </div>
              <div className="history-orderInfo">
                <p>鱼香肉丝盒饭 * 6</p>
                <p>仔姜肉丝盒饭 * 6</p>
                <p>青椒肉丝盒饭 * 6</p>
              </div>
              <br/>
              <div className="history-date">
                订餐时间: 2016年7月13日12:00
              </div>
            </div>
          </div>
        </div>
        <div className="history">
          <div className="history-logo">
            <img src="../assets/images/res1.jpg" alt=""/>
          </div>
          <div className="history-info">
            <div className="history-contentInfo">
              <p>川调</p>
              <p>年终大会</p>
              <p>tel:12112121212</p>
              <p>
                <span>18 Pieces </span>
                |
                <span> RMB 180</span>
              </p>
              <p className="history-comment__Evaluate">
                <span>done</span>
                <button>evaluate</button>
              </p>
            </div>
            <div className="history-other">
              <div className="history-orderInfo">
                <p>鱼香肉丝盒饭 * 6</p>
                <p>仔姜肉丝盒饭 * 6</p>
                <p>青椒肉丝盒饭 * 6</p>
              </div>
              <div className="history-orderInfo">
                <p>鱼香肉丝盒饭 * 6</p>
                <p>仔姜肉丝盒饭 * 6</p>
                <p>青椒肉丝盒饭 * 6</p>
              </div>
              <br/>
              <div className="history-date">
                订餐时间: 2016年7月13日12:00
              </div>
            </div>
          </div>
        </div>
        <HistoryForm />
      </div>
    )
  }
}

export default History
