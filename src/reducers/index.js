import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import cardsReducer from './cardsReducer.js'

import app from './app'

const sharedDataReducer = combineReducers({
  app
})

const rootReducer = combineReducers({
  shared: sharedDataReducer,
  form: formReducer,
  cardsReducer,
  routing
})

export default rootReducer
