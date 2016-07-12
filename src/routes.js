import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Base from './containers/Base'
import NoMatch from './containers/NoMatch'
import LoginPage from './containers/LoginPage'

import HomePage from './containers/HomePage'

export default (
  <Route path="/" component={Base}>
    <IndexRoute component={LoginPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/404" component={NoMatch} />
    <Redirect from="*" to="404" />
  </Route>
)
