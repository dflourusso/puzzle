import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Title, PlayerNameInput } from './styles'
import Button from '../../components/Button'

export default function Home({ navigation }) {
  const dispatch = useDispatch()
  const counterValue = useSelector(({ counter }) => counter.value)

  return (
    <Container>
      <Title>Jogo da Memória</Title>
      <View>
        <PlayerNameInput/>
        <Button onPress={() => navigation.navigate('Game')}>INICIAR</Button>
      </View>
      <Button onPress={() => navigation.navigate('Ranking')}>RANKING</Button>
      <StatusBar style="light" animated />
    </Container>
  )
}
