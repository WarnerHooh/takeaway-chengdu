import { createAction } from 'redux-actions'
import historyApi from '../api/historyApi'

export const GET_HISTORY = 'GET_HISTORY'
export const getHistory = createAction(GET_HISTORY, historyApi.history)
