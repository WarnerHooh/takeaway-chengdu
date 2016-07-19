export default function historyReducer(state = [], action) {
  if (action.type === 'GET_HISTORY') {
    return action.payload
  }
  return state
}
