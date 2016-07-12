import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ResListComponent from '../components/ResListComponent'

class ResListPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  render() {
    return (
      <ResListComponent />
    )
  }
}

const mapState = (state) => ({})

export default connect(mapState)(ResListPage)
