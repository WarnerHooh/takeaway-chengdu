import React, { Component, PropTypes } from 'react'

class LoginComponent extends Component {
  login(event) {
    // console.log(this.props)
    // console.log(this.props.login)
    event.preventDefault()
    var userName = document.getElementById('userName').value
    var password = document.getElementById('password').value
    this.props.login(userName, password)
  }
  render() {
    return (
      <div className="login-body">
        <div className="login-box">
          <div className="login-title">Takeaway</div>
          <form id="loginForm" action="" method="post">
            <div className="login-input-box">
              <input id="userName" type="text" className="full-size login-input" placeholder="Username"/>
              <span className="login-icon">&#xe603;</span>
            </div>
            <div className="login-input-box">
              <input id="password" type="password" className="full-size login-input" placeholder="Password"/>
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
