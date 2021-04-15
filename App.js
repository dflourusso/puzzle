import React from 'react'
import AppNavigation from './navigation/AppNavigation'
import { Provider } from 'react-redux'
import { store } from './redux'

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}