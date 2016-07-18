import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as userActions from '../actions/user'

class Navigation extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      logout: PropTypes.func
    };
    loginOut() {
      this.props.logout(0)
      this.context.router.push('/login')
    }
    restaurant() {
      this.context.router.push('/home')
    }
    history() {
      this.context.router.push('/history')
    }
    render() {
      return (
        <nav className="navigation">
          <div className="navigation_logo" onClick={e => this.restaurant(e)}>Takeaway</div>
          <div className="navigation_content">
            <ul>
              <li onClick={e => this.history(e)}>&#xe602;</li>
              <li onClick={e => this.loginOut(e)}>&#xe605;</li>
            </ul>
          </div>
        </nav>
      )
    }
}
Navigation.contextTypes = {
  router: React.PropTypes.object
}

var mapStateToProps = (state) => ({})

export default connect(mapStateToProps, userActions)(Navigation)
