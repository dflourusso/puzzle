import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

export default function Home({ navigation }) {
  const dispatch = useDispatch()
  const counterValue = useSelector(({counter}) => counter.value)

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <Text>INICIAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ranking')}>
        <Text>RANKING</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch({type: 'tick'})}>
        <Text>Increment {counterValue}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
