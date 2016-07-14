import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
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
  componentDidUpdate() {
    if (this.props.token !== null) {
      this.context.router.push('/home')
    }
  }
  login(user) {
    this.props.login(user)
  }
  render() {
    // console.log(this.props.token)
    return (
      <LoginComponent login={this.login} />
    )
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object
}

// var mapStateToProps = (state) => {}
var mapStateToProps = (state) => {
  // console.log(state.shared.user)
  return {
    token: state.shared.user.token
  }
}

export default connect(mapStateToProps, userActions)(LoginPage)
