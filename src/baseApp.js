import 'isomorphic-fetch'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'

<<<<<<< HEAD
import './reset.css'
import './index.css'
import './restaurant.css'
=======
import './assets/styles/reset.css'
import './index.scss'
>>>>>>> c602d051a4b68db48b3051d705a6201f38aa0ef0

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
