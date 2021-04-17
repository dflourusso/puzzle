import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import Game from '../pages/Game'
import Success from '../pages/Success'
import Ranking from '../pages/Ranking'

const Stack = createStackNavigator()

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ header: () => null }} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Ranking" component={Ranking} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
