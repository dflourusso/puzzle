import AsyncStorage from '@react-native-async-storage/async-storage';
import { takeEvery, put, select, call } from 'redux-saga/effects'

function* onGameEnd(action) {
  const { playerName, rounds } = action.payload
  const lastMatch = yield call(AsyncStorage.getItem, playerName)
  const bestMatch = lastMatch ? Math.min(lastMatch, rounds) : rounds
  yield call(AsyncStorage.setItem, playerName, rounds)
}

export default function* helloSaga() {
  yield takeEvery('game/end', onGameEnd)
}
