export default function cardsReducer(state = [], action) {
  if (action.type === 'GET_RESTS') {
    console.log([...action.payload])
    return [...state, ...action.payload]
  }

  if (action.type === 'GOTO_REST') {
    console.log([...action.payload])
  }
  return state
}
