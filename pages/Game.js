import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Game({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Game</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Success')}>
        <Text>SUCCESS</Text>
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
