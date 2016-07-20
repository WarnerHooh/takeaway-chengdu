export default function historyReducer(state = [], action) {
  if (action.type === 'GET_HISTORY') {
    return Object.assign([], state, action.payload)
  }

  if (action.type === 'LIGHT_STAR') {
    var orderId = action.orderId
    var score = action.score
    console.log(state)
    var newState = state
    newState.map((item, idx) => {
      if (item.orderId === orderId) {
        item.score = score
      }
    })
    return Object.assign([], state, newState)
  }
  return state
}
