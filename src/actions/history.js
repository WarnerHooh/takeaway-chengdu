import { createAction } from 'redux-actions'
import orderApi from '../api/order'

export const GET_HISTORY = 'GET_HISTORY'
export const getHistory = createAction(GET_HISTORY, orderApi.history)
