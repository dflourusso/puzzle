import { updateListItem } from "../helpers"

const initialState = {
  cards: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'game/setCards':
      return { ...state, cards: action.payload }
    case 'game/selectCard': {
      return { ...state, cards: updateListItem(state.cards, { ...action.payload, selected: true }) }
    }

    default:
      return state
  }
}
