import { createAction } from 'redux-actions'
import userApi from '../api/user'

export const GET_RESTS = 'GET_RESTS'
export const logItems = createAction(GET_RESTS, userApi.logItems)
