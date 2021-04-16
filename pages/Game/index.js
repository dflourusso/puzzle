import React, { useCallback, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Container, RoundsText } from './styles'
import Cards from '../../components/Cards'

export default function Game({ navigation }) {
  const dispatch = useDispatch()
  const cards = useSelector((state) => state.game.cards)

  const selectCard = (card) => {
    dispatch({ type: 'game/selectCard', payload: card })

  }

  useEffect(() => {
    dispatch({ type: 'game/new' })
  }, [])

  return (
    <Container>
      <StatusBar style="auto" />
      <RoundsText>Rodadas: 0</RoundsText>
      <Cards cards={cards} onPressCard={selectCard} />
    </Container>
  )
}
