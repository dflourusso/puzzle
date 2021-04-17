import { all } from 'redux-saga/effects'

import counter from './counter'
import game from './game'
import ranking from './ranking'

function* rootSaga() {
  yield all([
    counter(),
    game(),
    ranking(),
  ])
}

export default rootSaga
