import React, { Component, PropTypes } from 'react'

class Score extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props)
    this.state = {
      score: 0
    }
  }
  handleScoreChange(event) {
    this.setState({
      score: event.currentTarget.getAttribute('data-key')
    })
  }
  render() {
    const styles = {
      container: {
        width: this.state.score / 5 * 72 + 'px'
      }

    }
    return (
      <div className="historyForm--rate">
        <span>score</span>
        <span className="historyForm--rateBox">
            <span className="historyForm--rate__star" data-key="1" onClick={e => this.handleScoreChange(e)} />
            <span className="historyForm--rate__star" data-key="2" onClick={e => this.handleScoreChange(e)} />
            <span className="historyForm--rate__star" data-key="3" onClick={e => this.handleScoreChange(e)} />
            <span className="historyForm--rate__star" data-key="4" onClick={e => this.handleScoreChange(e)} />
            <span className="historyForm--rate__star" data-key="5" onClick={e => this.handleScoreChange(e)} />
            <span className="historyForm--rate__yellowstarBox" style={ styles.container }>
              <span className="historyForm--rate__yellowstar" data-key="1" onClick={e => this.handleScoreChange(e)}/>
              <span className="historyForm--rate__yellowstar" data-key="2" onClick={e => this.handleScoreChange(e)}/>
              <span className="historyForm--rate__yellowstar" data-key="3" onClick={e => this.handleScoreChange(e)}/>
              <span className="historyForm--rate__yellowstar" data-key="4" onClick={e => this.handleScoreChange(e)}/>
              <span className="historyForm--rate__yellowstar" data-key="5" onClick={e => this.handleScoreChange(e)}/>
            </span>
        </span>
        {(() => {
          if (this.state.score !== 0) {
            return <span className="historyForm--rate__count">{this.state.score} 分</span>
          }
          return null
        })()}
      </div>
    )
  }
}

export default Score
