export default function cardsReducer(state = [], action) {
  if (action.type === 'GET_RESTS') {
    console.log([...state, ...action.payload]);
    return [...state, ...action.payload]
  }
  return state
}
