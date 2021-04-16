import React from 'react'
import { View } from 'react-native'

import { Container } from './styles'
import Card from '../Card'

export default function Cards({ cards }) {
  return <Container>
    {cards.map((card) => <Card key={card.id} name={card.name} />)}
  </Container>
}