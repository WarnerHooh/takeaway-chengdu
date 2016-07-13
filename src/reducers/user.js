import { handleActions } from 'redux-actions'

import { USER_LOGIN, USER_LOGOUT } from '../actions/user'

export default handleActions({
  [USER_LOGIN]: (state = {}, { token }) => ({ ...state, token }),
  [USER_LOGOUT]: (state = {}) => ({ ...state, token: null })
}, {
  token: null
})

