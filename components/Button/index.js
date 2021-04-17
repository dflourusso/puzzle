import React from 'react'
import { View } from 'react-native'

import { Container, Text } from './styles'

const Button = ({ onPress, children, disabled }) => {
  return <Container onPress={onPress} disabled={disabled}>
    <Text>{children}</Text>
  </Container>
}

export default Button