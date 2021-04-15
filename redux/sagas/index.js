import { all } from 'redux-saga/effects'

import counter from './counter'

function* rootSaga() {
  yield all([
    counter(),
  ])
}

export default rootSaga
