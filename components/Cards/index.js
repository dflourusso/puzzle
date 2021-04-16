import React from 'react'
import { View } from 'react-native'

import { Container } from './styles'
import Card from '../Card'

export default function Cards() {
  return <Container>
    {Array(20).fill(1).map((_, i) => <Card key={i} />)}
  </Container>
}