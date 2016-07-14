import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import cardsReducer from './cardsReducer.js'
import orderAction from './orders'

import app from './app'
import user from './user'

const sharedDataReducer = combineReducers({
  app,
  user
})

const rootReducer = combineReducers({
  shared: sharedDataReducer,
  form: formReducer,
  cardsReducer,
  orderAction,
  routing
})

export default rootReducer
