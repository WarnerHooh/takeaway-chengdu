import 'isomorphic-fetch'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'

import './assets/styles/login.css'
import './navigation.css'
import './restaurant.css'
import './assets/styles/reset.css'
import './index.scss'
import './history.css'

export default (store = {}, routes = {}, reducers = {}) => {
  global.React = React
  render(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        { routes }
      </Router>
    </Provider>,
    document.getElementById('root')
  )

  if (process.env.NODE_ENV === 'development') {
    const devTool = require('./utils/openDevTool')
    devTool.default(store)
  }
}
