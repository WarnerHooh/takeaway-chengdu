import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import Score from './Score'

export const fields = ['restaurantName', 'score']

const HistoryForm = ({ fields: { restaurantName, score }, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="historyForm">
    <h3>Evaluate restaurant</h3>
    <p>Restaurant Name</p>
    <Score />
    <fieldset className="historyFrom__comment">
      <label>evaluate</label>
      <textarea type="textarea" rows="7" cols="44"/>
    </fieldset>
    <div className="historyForm__btnBox">
      <input className="historyFrom__submit" type="submit" value="Submit"/>
      <input className="historyFrom__cancel" type="button" value="Cancel"/>
    </div>
  </form>
)

HistoryForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'history',
  fields
})(HistoryForm)
