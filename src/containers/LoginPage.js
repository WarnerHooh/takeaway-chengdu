import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginComponent from '../components/LoginComponent'

import * as userActions from '../actions/user'
import Popup from '../components/popup'

class LoginPage extends Component {
  static propTypes = {
    token: PropTypes.String,
    loginVerify: PropTypes.func
  }

  constructor() {
    super()
    this.login = this.login.bind(this)
    this.state = {
      show: false
    }
  }
  componentDidUpdate() {
    if (this.props.token !== null) {
      this.context.router.push('/home')
    }
  }
  login(user) {
    if (user.username && user.password) {
      this.props.loginVerify(user)
    }
  }
  handleShowChange() {
    const self = this
    this.setState({
      show: !self.state.show
    })
  }
  render() {
    return (
      <div>
        <LoginComponent login={this.login} />
        <Popup open={this.state.show} component={null} changeShow={this.handleShowChange.bind(this)}/>
      </div>
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
