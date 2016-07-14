import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'

export const fields = ['meetingname', 'code', 'unit', 'time', 'comment']

const OrderForm = ({ fields: { meetingname, code, unit, time, comment }, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <fieldset className="orderComponent--restaurantFrom__name">
      <label>Meeting Name:</label>
      <input type="text" placeholder="meetingname" {...meetingname} />
    </fieldset>
    <fieldset className="orderComponent--restaurantFrom__code">
      <label>Code:</label>
      <input type="text" placeholder="code" {...code} />
    </fieldset>
    <fieldset className="orderComponent--restaurantFrom__unit">
      <label>Unit:</label>
      <input type="number" placeholder="unit" {...unit} />
    </fieldset>
    <fieldset className="orderComponent--restaurantFrom__time" >
      <label>Time:</label>
      <input type="time" placeholder="time" {...time} />
    </fieldset>
    <fieldset className="orderComponent--restaurantFrom__comment">
      <label>Comment:</label>
      <textarea type="textarea" placeholder="comment" {...comment} />
    </fieldset>
    <input className="orderComponent--restaurantFrom__submit" type="submit" value="Submit"/>
  </form>
)

OrderForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'order',
  fields
})(OrderForm)
