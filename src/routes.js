import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Base from './containers/Base'
import NoMatch from './containers/NoMatch'
import LoginPage from './containers/LoginPage'

import HomePage from './containers/HomePage'
import OrderPage from './containers/OrderPage'

export default (
  <Route path="/" component={Base}>
    <IndexRoute component={OrderPage} />
    <Route path="/login" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/order" component={OrderPage} />
    <Route path="/404" component={NoMatch} />
    <Redirect from="*" to="404" />
  </Route>
)
