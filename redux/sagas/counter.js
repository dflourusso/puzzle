import { takeEvery, put } from 'redux-saga/effects'

function* tick(action) {
  yield put({ type: 'increment' })
}

export default function* gameSaga() {
  yield takeEvery('tick', tick)
}
