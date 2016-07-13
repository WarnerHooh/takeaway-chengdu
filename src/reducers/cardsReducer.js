export default function cardsReducer(state = [], action) {
  if (action.type === 'GET_RESTS') {
    return [...state, ...action.payload]
  }
  return state
}
