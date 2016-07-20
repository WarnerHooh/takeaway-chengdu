import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loading } from '../actions/app'
import Navigation from '../components/Navigation'

export default class Base extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
    shared: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired
  };
  constructor() {
    super()
  }

  render() {
    return (
      <div style={ styles.container }>
        {(() => {
          if (this.props.routes[1].path !== '/login' && this.props.routes[1].path !== undefined) {
            return <Navigation />
          }
        })()}
        { this.props.children }
      </div>
    )
  }
}

const styles = {
  container: {
    height: '100%'
  }
}

const AppAction = { loading }
const mapState = state => {
  return { shared: state.shared }
}
const mapAction = dispatch => ({
  actions: bindActionCreators(AppAction, dispatch)
})

export default connect(mapState, mapAction)(Base)
