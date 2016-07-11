import React, { Component, PropTypes } from 'react'

class RestaurantList extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired
    };
    render() {
      return (<div>
        <ul>
          <li>
            <img src={"./assets/images/nobapehok.jpg"} alt=""/>
            <p>123</p>
            <p>
              <img src="" alt=""/>
              <img src="" alt=""/>
              <img src="" alt=""/>
              <img src="" alt=""/>
              <img src="" alt=""/>
            </p>
            <p>jieshao</p>
          </li>
        </ul>
      </div>)
    }
}

export default RestaurantList
