import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Success({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Success</Text>
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
