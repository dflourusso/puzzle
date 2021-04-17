import React from 'react'
import { View } from 'react-native'

import { Container, Text } from './styles'

const Link = ({onPress, children, style}) => {
  return <Container style={style} onPress={onPress}>
    <Text>{children}</Text>
  </Container>
}

export default Link