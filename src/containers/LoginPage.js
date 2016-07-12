import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginComponent from '../components/LoginComponent'

class LoginPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  render() {
    return (
      <LoginComponent />
    )
  }
}

var mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(LoginPage)
