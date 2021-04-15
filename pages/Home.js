import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <Text>INICIAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ranking')}>
        <Text>RANKING</Text>
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
