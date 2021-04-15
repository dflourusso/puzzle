import React from 'react'
import { View } from 'react-native'

import { Container, Text } from './styles'

const Button = ({onPress, children}) => {
  return <Container onPress={onPress}>
    <Text>{children}</Text>
  </Container>
}

export default Button