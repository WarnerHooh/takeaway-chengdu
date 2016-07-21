import { createAction } from 'redux-actions'
import orderApi from '../api/order'

export const GET_RESTS = 'GET_RESTS'
export const getRestaurants = createAction(GET_RESTS, orderApi.getRestaurants)

export function chooseRest(idx) {
  return { type: 'CHOOSE_RESTS', idx }
}
