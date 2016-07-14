export default function orderAction(state = [], action) {
  if (action.type === 'GET_ORDERS') {
    return [...state, ...action.payload]
  }
  return state
}
