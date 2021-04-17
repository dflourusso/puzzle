import React, { useCallback, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'

import { Container, RoundsText } from './styles'
import Cards from '../../components/Cards'

export default function Game({ navigation }) {
  const route = useRoute()
  const dispatch = useDispatch()
  const cards = useSelector((state) => state.game.cards)
  const rounds = useSelector((state) => state.game.rounds)
  const ended = useSelector((state) => state.game.ended)
  const playerName = useSelector((state) => state.game.playerName)

  const selectCard = (card) => {
    dispatch({ type: 'game/selectCard', payload: card })
  }

  useEffect(() => {
    dispatch({ type: 'game/new', payload: { playerName: route.params.playerName } })
  }, [])

  useEffect(() => {
    if (ended) navigation.replace('Success', { playerName, rounds })
  }, [ended])

  return (
    <Container>
      <StatusBar style="light" animated />
      <RoundsText>Rodadas: {rounds}</RoundsText>
      <Cards cards={cards} onPressCard={selectCard} />
    </Container>
  )
}
