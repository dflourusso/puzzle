import React, { useMemo } from 'react'
import { Dimensions, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Container, Content } from './styles'
import styles from '../../constants/styles'

const ICON_SIZE = Dimensions.get('window').width / 5

export default function Card({ card, onPress }) {
  const iconColor = useMemo(() => {
    if (card.match) return styles.primaryColor
    if (card.selected) return styles.textColor
    return styles.primaryLighterColor
  }, [card])

  return <Container onPress={() => onPress(card)}>
    <Content selected={card.selected}>
      {
        card.selected || card.match ?
          <MaterialCommunityIcons name={card.name} size={ICON_SIZE} color={iconColor} /> :
          null
      }
    </Content>
  </Container>
}

