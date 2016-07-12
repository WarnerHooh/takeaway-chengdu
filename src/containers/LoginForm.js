import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'

export const fields = ['username', 'password']

const LoginForm = ({ fields: { username, password }, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <fieldset>
      <label>Username:</label>
      <input type="text" placeholder="username" {...username} />
    </fieldset>
    <fieldset>
      <label>Password:</label>
      <input type="text" placeholder="password" {...password} />
    </fieldset>
    <input type="submit" value="Login"/>
  </form>
)

LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'login',
  fields
})(LoginForm)
