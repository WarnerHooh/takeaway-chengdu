import React, { Component } from 'react'

class LoginComponent extends Component {
  render() {
    return (
      <div className="login-body">
        <div className="login-box">
          <div className="login-title">Takeaway</div>
          <form action="#" method="post">
            <div className="login-input-box">
              <input type="text" className="full-size login-input" placeholder="Username"/>
              <span className="login-icon">&#xe603;</span>
            </div>
            <div className="login-input-box">
              <input type="password" className="full-size login-input" placeholder="Password"/>
              <span className="login-icon login-password">&#xe606;</span>
            </div>
            <button className="login-input-box btn-login" type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginComponent
