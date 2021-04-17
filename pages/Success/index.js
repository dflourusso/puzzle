import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, TouchableOpacity, View } from 'react-native'
import { StackActions, useRoute } from '@react-navigation/native'
import { Container, Row, Title, Rounds, RoundsLabel, Divider } from './styles'
import Button from '../../components/Button'
import Link from '../../components/Link'
import { SafeAreaView } from '../../components/styles'

export default function Success({ navigation }) {
  const route = useRoute()
  const { playerName, rounds } = route.params
  return (
    <SafeAreaView>
      <Container>
        <StatusBar style="light" animated />
        <Title>Parabéns {playerName}</Title>
        <View>
          <Rounds>{rounds}</Rounds>
          <RoundsLabel>RODADAS</RoundsLabel>
        </View>
        <View>
          <Button onPress={() => navigation.dispatch(StackActions.replace('Game', { playerName }))}>JOGAR NOVAMENTE</Button>
          <Link style={{ marginTop: 20 }} onPress={() => navigation.dispatch(StackActions.popToTop())}>Início</Link>
        </View>
      </Container>
    </SafeAreaView>
  )
}
