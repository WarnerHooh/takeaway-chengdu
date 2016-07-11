import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Base from './containers/Base'
import NoMatch from './containers/NoMatch'

import HomePage from './containers/HomePage'
import RestaurantsListPage from './containers/RestaurantsListPage'

export default (
  <Route path="/" component={Base}>
    /*<IndexRoute component={HomePage} />*/
    <IndexRoute component={RestaurantsListPage}/>
    <Route path="404" component={NoMatch} />
    <Redirect from="*" to="404" />
  </Route>
)
