import { hashHistory } from 'react-router'
import baseApp from './baseApp'
import routes from './routes'
import configureStore from './store/configureStore'
const state = {
  shared: {
    app: {}
  }
}

// state.shared.app = fetchMock.mock(`${apiServer}/me/profile`, 'GET', user[0]).routes[0].response

if (process.env.NODE_ENV !== 'production') {
  require('./api/mocks')
}

// user12.login('xas', 'aasd').then(function (res) {
//   console.log(res);
// })

const initialState = Object.assign(state, global.__INITIAL_STATE__ || {})
const store = configureStore(initialState, hashHistory)

baseApp(store, routes)
