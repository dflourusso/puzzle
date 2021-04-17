import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Title, PlayerNameInput } from './styles'
import Button from '../../components/Button'

export default function Home({ navigation }) {
  const [playerName, setPlayerName] = useState('')
  const dispatch = useDispatch()
  const counterValue = useSelector(({ counter }) => counter.value)

  const newGame = () => {
    const params = { playerName }
    setPlayerName('')
    navigation.navigate('Game', params)
  }

  return (
    <Container>
      <StatusBar style="light" animated />
      <Title>Jogo da Memória</Title>
      <View>
        <PlayerNameInput onChangeText={playerName => setPlayerName(playerName)} value={playerName} />
        <Button onPress={newGame} disabled={playerName.length == 0}>INICIAR</Button>
      </View>
      <Button onPress={() => navigation.navigate('Ranking')}>RANKING</Button>
    </Container>
  )
}
