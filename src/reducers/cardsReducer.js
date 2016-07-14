export default function cardsReducer(state = [], action) {
  if (action.type === 'GET_RESTS') {
    return [...state, ...action.payload]
  }

  if (action.type === 'CHOOSE_RESTS') {
    var index = action.idx
    var choosed = state[index]
    return (Object.assign({}, [state], {choosed}))
  }

  return state
}
