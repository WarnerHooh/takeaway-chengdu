import { handleActions } from 'redux-actions'

import { USER_LOGIN, USER_LOGIN_VERIFY, USER_LOGOUT } from '../actions/user'

export default handleActions({
  [USER_LOGIN]: (state = {}, { payload: { token } }) => ({ ...state, token }),
  [USER_LOGIN_VERIFY]: (state = {}, { payload: { token } }) => ({ ...state, token }),
  [USER_LOGIN]: (state = {}, { payload: token }) => ({ ...state, token }),
  [USER_LOGOUT]: (state = {}) => ({ ...state, token: null })
}, {
  token: null
})
