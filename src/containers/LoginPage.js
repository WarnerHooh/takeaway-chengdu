import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import user from '../api/user'
import LoginComponent from '../components/LoginComponent'

import * as userActions from '../actions/user'

class LoginPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    login: PropTypes.func,
    user: PropTypes.Object,
    token: PropTypes.String
  }

  constructor() {
    super()
    this.login = this.login.bind(this)
  }
  login(username, password) {
    this.props.login({username, password})
  }
  render() {
    console.log(this.props.token)
    return (
      <LoginComponent login={this.login} />
    )
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object
}

var mapStateToProps = (state) => state.shared.user

export default connect(mapStateToProps, userActions)(LoginPage)
