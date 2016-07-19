import React, { Component, PropTypes } from 'react'
import Score from './Score'
import * as LightStar from '../actions/lightStar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class HistoryForm extends Component {
  static propTypes = {
    changeHide: PropTypes.func,
    changeScore: PropTypes.func,
    score: PropTypes.Number,
    orderId: PropTypes.String
  };
  constructor(props) {
    super(props)
  }
  onSubmit(event) {
    var orderId = this.props.orderId
    var score = this.props.score
    this.props.actions.lightStar(orderId, score)
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

HistoryForm.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LightStar, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryForm)
