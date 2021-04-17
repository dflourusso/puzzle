import { takeEvery, put, select, delay } from 'redux-saga/effects'
import * as AppNavigation from '../../navigation/AppNavigation';

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function* setCards(action) {
  const icons = [
    'fish',
    'food-apple',
    'rocket',
    'bus-side',
    'airplane',
    'bike',
    'heart',
    'dog-side',
    'airballoon',
    'baby-carriage'
  ]
  const cards = shuffle([...icons, ...icons]).map((name, index) => ({ id: index, name }))
  yield put({ type: 'game/setCards', payload: cards })
}

function* onCardSelection(action) {
  const cards = yield select(state => state.game.cards)
  const selectedCards = cards.filter(card => card.selected)

  if (selectedCards.length === 2) {
    yield delay(10)
    const matchingCards = selectedCards[0].name === selectedCards[1].name
    yield put({ type: 'game/incrementRound' })
    if (matchingCards) {
      yield put({ type: 'game/matchCards', payload: selectedCards })
    } else {
      yield put({ type: 'game/removeCardsSelection', payload: selectedCards })
    }
  }
}

function* onMatchCards(action) {
  const game = yield select(state => state.game)
  const selectedCards = game.cards.filter(card => !card.match)

  if (selectedCards.length === 0) {
    yield put({ type: 'game/end', payload: game })
    AppNavigation.replace('Success', { playerName: game.playerName, rounds: game.rounds });
  }
}

export default function* helloSaga() {
  yield takeEvery('game/new', setCards)
  yield takeEvery('game/selectCard', onCardSelection)
  yield takeEvery('game/matchCards', onMatchCards)
}
