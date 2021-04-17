import { takeEvery, put, select, delay } from 'redux-saga/effects'

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
    yield delay(1000)
    const matchingCards = selectedCards[0].name === selectedCards[1].name
    if (matchingCards) {
      yield put({ type: 'game/matchCards', payload: selectedCards })
    } else {
      yield put({ type: 'game/removeCardsSelection', payload: selectedCards })
    }
    yield put({ type: 'game/incrementRound' })
    
  }
}

export default function* helloSaga() {
  yield takeEvery('game/new', setCards)
  yield takeEvery('game/selectCard', onCardSelection)
}
