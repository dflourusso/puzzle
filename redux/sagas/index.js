import { all } from 'redux-saga/effects'

import game from './game'
import ranking from './ranking'

function* rootSaga() {
  yield all([
    game(),
    ranking(),
  ])
}

export default rootSaga
