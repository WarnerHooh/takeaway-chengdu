import { createAction } from 'redux-actions'
import userApi from '../api/user'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export const login = createAction(USER_LOGIN, userApi.login)
export const logout = createAction(USER_LOGOUT, userApi.logout)
