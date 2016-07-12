import React, { Component, PropTypes } from 'react'

class Navigation extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired
    };
    render() {
      return (
        <nav className="navigation">
          <div className="navigation_logo">Takeaway</div>
          <div className="navigation_search">
            <input type="text" placeholder="Search restaurant"/>
            <span>&#xe600;</span>
          </div>
          <div className="navigation_content">
            <ul>
              <li>&#xe601;</li>
              <li>&#xe602;</li>
              <li>&#xe603;</li>
              <li>&#xe605;</li>
            </ul>
          </div>
        </nav>
      )
    }
}

export default Navigation
