import React from 'react'
import { Dimensions, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Container, Content } from './styles'
import styles from '../../constants/styles'

const ICON_SIZE = Dimensions.get('window').width / 5

export default function Card({name}) {
  return <Container>
    <Content>
      <MaterialCommunityIcons name={name} size={ICON_SIZE} color={styles.textColor} />
    </Content>
  </Container>
}

