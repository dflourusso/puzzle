import React, { useCallback, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'

import { Container, Text, Row } from './styles'
import Cards from '../../components/Cards'
import { SafeAreaView } from '../../components/styles'

export default function Game({ navigation }) {
  const route = useRoute()
  const dispatch = useDispatch()
  const cards = useSelector((state) => state.game.cards)
  const rounds = useSelector((state) => state.game.rounds)
  const playerName = useSelector((state) => state.game.playerName)

  const selectCard = (card) => {
    dispatch({ type: 'game/selectCard', payload: card })
  }

  useEffect(() => {
    dispatch({ type: 'game/new', payload: { playerName: route.params.playerName } })
  }, [])

  return (
    <SafeAreaView>
      <Container>
        <StatusBar style="light" animated />
        <Row>
          <Text>Bom jogo {playerName}</Text>
          <Text>Rodadas: {rounds}</Text>
        </Row>
        <Cards cards={cards} onPressCard={selectCard} />
      </Container>
    </SafeAreaView>
  )
}
