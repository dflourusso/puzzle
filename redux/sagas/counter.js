import { takeEvery, put } from 'redux-saga/effects'

function* tick(action) {
  yield put({ type: 'increment' })
}

export default function* helloSaga() {
  yield takeEvery('tick', tick)
}
