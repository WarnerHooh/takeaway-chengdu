import { createAction } from 'redux-actions'
import userApi from '../api/user'

export const GET_ORDERS = 'GET_ORDERS'
export const orders = createAction(GET_ORDERS, userApi.orders)
