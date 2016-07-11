import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Base from './containers/Base'
import NoMatch from './containers/NoMatch'
import ResListPage from './containers/ResListPage'
import LoginPage from './containers/LoginPage'

import HomePage from './containers/HomePage'

export default (
  <Route path="/" component={Base}>
    <IndexRoute component={LoginPage} />
    <Route path="list" component={ResListPage} />
    <Route path="home" component={HomePage} />
    <Route path="404" component={NoMatch} />
    <Redirect from="*" to="404" />
  </Route>
)
