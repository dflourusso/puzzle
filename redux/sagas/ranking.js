import AsyncStorage from '@react-native-async-storage/async-storage';
import { takeEvery, put, select, call } from 'redux-saga/effects'
import { updateListItem } from '../helpers';

function* onGameEnd(action) {
  const { playerName, rounds } = action.payload

  let ranking = JSON.parse(yield call(AsyncStorage.getItem, 'ranking')) || []
  const lastGame = ranking.find(item => item.playerName === playerName)

  if (lastGame) {
    const bestMatch = lastGame ? Math.min(Number(lastGame.bestMatch), rounds) : rounds
    ranking = updateListItem(ranking, { playerName, bestMatch }, 'playerName')
  } else {
    ranking = [...ranking, { playerName, bestMatch: rounds }]
  }

  const value = JSON.stringify(ranking.sort((a, b) => (a.bestMatch > b.bestMatch) ? 1 : -1))
  yield call(AsyncStorage.setItem, 'ranking', value)
}

export default function* helloSaga() {
  yield takeEvery('game/end', onGameEnd)
}
