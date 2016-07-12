import React, { Component } from 'react'

class ResListComponent extends Component {
  render() {
    return (
      <div className="res-box">
        <div className="res-img">
          <img className="full-size" src="../assets/images/food-2.jpg" />
        </div>
        <div className="res-info-box">
          <div className="res-title">restaurant-1</div>
          <div>这里是评分</div>
          <div>some description here some description here some description here some description here </div>
        </div>
      </div>
    )
  }
}
export default ResListComponent
