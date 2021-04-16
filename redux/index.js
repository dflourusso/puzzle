import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import counter from './reducers/counter'
import game from './reducers/game'

import rootSaga from './sagas'

const reducers = combineReducers({
  counter,
  game,
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export { store }
