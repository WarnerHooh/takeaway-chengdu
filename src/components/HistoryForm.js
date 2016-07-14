import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import Score from './Score'

export const fields = ['restaurantName', 'score', 'comment']

const HistoryForm = ({ fields: { restaurantName, score, comment }, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <h3>Evaluate restaurant</h3>
    <p>Restaurant Name</p>
    <Score />
    <fieldset className="historyFrom__comment">
      <label>evaluate</label>
      <textarea type="textarea" placeholder="comment" {...comment} />
    </fieldset>
    <input className="historyFrom__submit" type="submit" value="Submit"/>
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
