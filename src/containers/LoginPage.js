import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginComponent from '../components/LoginComponent'

import * as userActions from '../actions/user'

class LoginPage extends Component {
  static propTypes = {
    user: PropTypes.Object,
    token: PropTypes.String,
    loginVerify: PropTypes.func
  }

  constructor() {
    super()
    this.login = this.login.bind(this)
  }
  componentDidUpdate() {
    if (this.props.token !== null) {
      this.context.router.push('/home')
    }
  }
  login(user) {
    console.log(this.props)
    if (user.username && user.password) {
      this.props.loginVerify(user)
    }
  }
  render() {
    return (
      <LoginComponent login={this.login} />
    )
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object
}

var mapStateToProps = (state) => {
  return {
    token: state.shared.user.token
  }
}

export default connect(mapStateToProps, userActions)(LoginPage)
