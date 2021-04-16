const initialState = {
  cards: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'game/setCards':
      return { ...state, cards: action.payload }

    default:
      return state
  }
}
