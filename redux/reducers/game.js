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
    case 'game/matchCards': {
      let cards = updateListItem(state.cards, { ...action.payload[0], selected: false, match: true })
      cards = updateListItem(cards, { ...action.payload[1], selected: false, match: true })
      return { ...state, cards }
    }
    case 'game/removeCardsSelection': {
      let cards = updateListItem(state.cards, { ...action.payload[0], selected: false })
      cards = updateListItem(cards, { ...action.payload[1], selected: false })
      return { ...state, cards }
    }

    default:
      return state
  }
}
