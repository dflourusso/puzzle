import { all } from 'redux-saga/effects'

import counter from './counter'
import game from './game'

function* rootSaga() {
  yield all([
    counter(),
    game(),
  ])
}

export default rootSaga
