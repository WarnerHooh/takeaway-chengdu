/**
 * Created by yinzhaoshu on 7/10/16.
 */
import React, { Component, PropTypes } from 'react'
import Rating from './Rating'
import { bindActionCreators } from 'redux'
import * as Rests from '../actions/Rests'
import { connect } from 'react-redux'

class RestaurantCard extends Component {
  constructor() {
    super()
  }
  getIdx(e) {
    var Idx = e.currentTarget.getAttribute('data-key')
    this.props.actions.chooseRest(Idx)
    this.context.router.push('/order')
  }
  render() {
    return (
      <div className="restaurant-container">
        {(() => {
          if (this.props.cardsReducer.restaurants !== undefined) {
            return this.props.cardsReducer.restaurants.map((n, i) => {
              return (
                <div className="restaurant" key={i} data-key={i} id={n.id} onClick={this.getIdx.bind(this)}>
                  <div className="restaurant-pic">
                    <img src={'../assets/images/' + n.pic}/>
                  </div>
                  <div className="restarant-name">{n.name}</div>
                  <Rating rate={n.score}/>
                  <div className="restarant-summary">{n.summary}</div>
                </div>
              )
            })
          }
        })()}
      </div>
    )
  }
}

export default RestaurantCard

RestaurantCard.propTypes = {
  cardsReducer: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

RestaurantCard.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    cardsReducer: state.cardsReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Rests, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantCard)
