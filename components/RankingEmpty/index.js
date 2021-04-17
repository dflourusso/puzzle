import React, { useMemo } from 'react'
import { Dimensions, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Container, EmptyIcon, EmptyText } from './styles'

export default function Card({ playerName, bestMatch, numColumns }) {
  return <Container numColumns={numColumns}>
    <EmptyIcon />
    <EmptyText>Nenhum dado encontrado</EmptyText>
  </Container>
}

