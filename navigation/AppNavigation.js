import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import Game from '../pages/Game'
import Success from '../pages/Success'
import Ranking from '../pages/Ranking'
import styles from '../constants/styles'

const Stack = createStackNavigator()

export const navigationRef = React.createRef()

export function replace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params))
}

export default function AppNavigation() {
  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: styles.primaryDarkColor,
          shadowColor: 'transparent', // ios
          elevation: 0  // android
        },
        headerTintColor: styles.textColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        gestureEnabled: false,
      }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Início', header: () => null }} />
        <Stack.Screen name="Game" component={Game} options={{ header: () => null }} />
        <Stack.Screen name="Success" component={Success} options={{ header: () => null }} />
        <Stack.Screen name="Ranking" component={Ranking} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
