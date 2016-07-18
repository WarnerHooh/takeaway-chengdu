export default function cardsReducer(state = {}, action) {
  if (action.type === 'GET_RESTS') {
    return Object.assign({}, state, action.payload)
  }

  if (action.type === 'CHOOSE_RESTS') {
    var index = action.idx
    var choosed = state.restaurants[index]
    return (Object.assign({}, state, {choosed}))
  }

  if (action.type === 'SUBMIT_ORDER') {
    // console.log(action.payload)
    // var originOrder = action.pa  yload.allOrder
    // originOrder.push(action.orderData)
    // console.log(Object.assign({}, state, {allOrder: originOrder}))
    console.log(Object.assign({}, state, action.payload))
    return Object.assign({}, state, action.payload)
  }
  return state
}
