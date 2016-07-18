import { createAction } from 'redux-actions'
import orderApi from '../api/user'

export const SUBMIT_ORDER = 'SUBMIT_ORDER'
export const submitOrder = createAction(SUBMIT_ORDER, orderApi.postOrder)
