import React, { Component, PropTypes } from 'react'

class Score extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    score: PropTypes.Number,
    handleScoreChange: PropTypes.func
  };
  constructor(props) {
    super(props)
  }
  render() {
    const styles = {
      container: {
        width: this.props.score / 5 * 72 + 'px'
      }
    }
    return (
      <div className="historyForm--rate">
        <span>score</span>
        <span className="historyForm--rateBox">
            <span className="historyForm--rate__star" data-key="1" onClick={e => this.props.handleScoreChange(e)} />
            <span className="historyForm--rate__star" data-key="2" onClick={e => this.props.handleScoreChange(e)} />
            <span className="historyForm--rate__star" data-key="3" onClick={e => this.props.handleScoreChange(e)} />
            <span className="historyForm--rate__star" data-key="4" onClick={e => this.props.handleScoreChange(e)} />
            <span className="historyForm--rate__star" data-key="5" onClick={e => this.props.handleScoreChange(e)} />
            <span className="historyForm--rate__yellowstarBox" style={ styles.container }>
              <span className="historyForm--rate__yellowstar" data-key="1" onClick={e => this.props.handleScoreChange(e)}/>
              <span className="historyForm--rate__yellowstar" data-key="2" onClick={e => this.props.handleScoreChange(e)}/>
              <span className="historyForm--rate__yellowstar" data-key="3" onClick={e => this.props.handleScoreChange(e)}/>
              <span className="historyForm--rate__yellowstar" data-key="4" onClick={e => this.props.handleScoreChange(e)}/>
              <span className="historyForm--rate__yellowstar" data-key="5" onClick={e => this.props.handleScoreChange(e)}/>
            </span>
        </span>
        {(() => {
          if (this.props.score !== 0) {
            return <span className="historyForm--rate__count">{this.props.score} 分</span>
          }
          return null
        })()}
      </div>
    )
  }
}

export default Score
