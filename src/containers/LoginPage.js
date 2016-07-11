import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import LoginForm from './LoginForm'

class LoginPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  render() {
    return (
      <div>
        <div>Login Page</div>
        <LoginForm onSubmit={value => console.log(value)} />
      </div>
    )
  }
}

const mapState = (state) => ({})

export default connect(mapState)(LoginPage)
