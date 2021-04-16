import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { Container, RoundsText } from './styles'
import Cards from '../../components/Cards'

export default function Game({ navigation }) {
  return (
    <Container>
      <StatusBar style="auto" />
      <RoundsText>Rodadas: 0</RoundsText>
      <Cards />
    </Container>
  )
}
