import { createAction } from 'redux-actions'
import userApi from '../api/user'

export const GET_HISTORY = 'GET_HISTORY'
export const getHistory = createAction(GET_HISTORY, userApi.history)
