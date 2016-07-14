import React, { Component, PropTypes } from 'react'

class LoginComponent extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  handleUserNameChange(event) {
    this.setState({
      username: event.target.value
    })
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }
  login(event) {
    event.preventDefault()
    this.props.login(this.state)
  }
  render() {
    return (
      <div className="login-body">
        <div className="login-box">
          <div className="login-title">Takeaway</div>
          <form id="loginForm" action="" method="post">
            <div className="login-input-box">
              <input type="text" className="full-size login-input" placeholder="Username" onChange={this.handleUserNameChange.bind(this)} />
              <span className="login-icon">&#xe603;</span>
            </div>
            <div className="login-input-box">
              <input type="password" className="full-size login-input" placeholder="Password" onChange={this.handlePasswordChange.bind(this)} />
              <span className="login-icon login-password">&#xe606;</span>
            </div>
            <button type="button" className="login-input-box btn-login" onClick={e => this.login(e)} >Login</button>
          </form>
        </div>
      </div>
    )
  }
}
LoginComponent.propTypes = {
  login: PropTypes.func.isRequired
}

export default LoginComponent
