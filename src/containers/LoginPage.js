import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginComponent from '../components/LoginComponent'

import * as userActions from '../actions/user'

class LoginPage extends Component {
  static propTypes = {
    login: PropTypes.func,
    user: PropTypes.Object,
    token: PropTypes.String
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
    this.props.login(user)
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
