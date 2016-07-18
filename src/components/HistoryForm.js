import React, { Component, PropTypes } from 'react'
import Score from './Score'

class HistoryForm extends Component {
  static propTypes = {
    changeHide: PropTypes.func,
    changeScore: PropTypes.func,
    score: PropTypes.Number
  };
  constructor(props) {
    super(props)
  }
  onSubmit(event) {
    this.props.changeHide()
  }
  stopClose(e) {
    e.preventDefault()
  }
  render() {
    return (
      <form className="historyForm" onClick={e => this.stopClose(e)}>
        <h3>Evaluate restaurant</h3>
        <p>Restaurant Name</p>
        <Score score={this.props.score} handleScoreChange={this.props.changeScore}/>
        <fieldset className="historyFrom__comment">
          <label>evaluate</label>
          <textarea type="textarea" rows="7" cols="44"/>
        </fieldset>
        <div className="historyForm__btnBox">
          <input onClick={this.onSubmit.bind(this)} className="historyFrom__submit" type="submit" value="Submit"/>
          <input onClick={this.props.changeHide} className="historyFrom__cancel" type="button" value="Cancel"/>
        </div>
      </form>
    )
  }
}

export default HistoryForm
