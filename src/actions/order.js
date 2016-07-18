import { createAction } from 'redux-actions'
import userApi from '../api/user'

export const POST_ORDER = 'POST_ORDER'
export const postOrder = createAction(POST_ORDER, userApi.postOrder)
