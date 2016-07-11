/**
 * Created by yinzhaoshu on 7/10/16.
 */
import { createStore } from 'redux'

import rootReducer from '../reducers/index.js'

const store = createStore(
  rootReducer
)

export default store
