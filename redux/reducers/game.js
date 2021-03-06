import { updateListItem } from "../helpers"

const initialState = {
  playerName: '',
  cards: [],
  rounds: 0,
  selectDisabled: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'game/new':
      return { ...initialState, playerName: action.payload.playerName }
    case 'game/setCards':
      return { ...state, cards: action.payload }
    case 'game/incrementRound':
      return { ...state, rounds: state.rounds + 1 }
    case 'game/disableSelection':
      return { ...state, selectDisabled: true }
    case 'game/enableSelection':
      return { ...state, selectDisabled: false }
    case 'game/selectCard': {
      if (state.selectDisabled) {
        return state
      } else {
        const cards = updateListItem(state.cards, { ...action.payload, selected: true })
        return { ...state, cards }
      }
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
