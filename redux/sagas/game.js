import { takeEvery, put } from 'redux-saga/effects'

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

export default function* helloSaga() {
  yield takeEvery('game/new', setCards)
}
