import React, { useMemo } from 'react'
import { Dimensions, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Container, PlayerName, BestMatch, BestMatchLabel, Content, Position } from './styles'

export default function Card({ playerName, bestMatch, position }) {
  return <Container>
    <Content>
      <PlayerName>{playerName}</PlayerName>
      <BestMatch>{bestMatch}</BestMatch>
      <BestMatchLabel>MELHOR RODADA</BestMatchLabel>
      <Position>{position}º</Position>
    </Content>
  </Container>
}

