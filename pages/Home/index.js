import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Title, PlayerNameInput } from './styles'
import Button from '../../components/Button'
import { SafeAreaView } from '../../components/styles'

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
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <Container>
          <StatusBar style="light" animated />
          <View><Title>Jogo da Memória</Title></View>
          <View>
            <PlayerNameInput onChangeText={playerName => setPlayerName(playerName)} value={playerName} />
            <Button onPress={newGame} disabled={playerName.length == 0}>INICIAR</Button>
          </View>
          <Button onPress={() => navigation.navigate('Ranking')}>RANKING</Button>
        </Container>
      </KeyboardAvoidingView >
    </SafeAreaView>
  )
}
