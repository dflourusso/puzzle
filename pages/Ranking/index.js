import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Container } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RankingCard from '../../components/RankingCard'
import RankingEmpty from '../../components/RankingEmpty'
import Link from '../../components/Link'


export default function Ranking({ navigation }) {
  const [ranking, setRanking] = useState([])

  const loadRanking = () => {
    AsyncStorage.getItem('ranking')
      .then(ranking => {
        if (ranking) setRanking(JSON.parse(ranking))
      })
  }

  const resetRanking = () => {
    Alert.alert('Redefinir o ranking?', 'Todo o histórico será perdido', [
      { text: 'Agora não' },
      {
        text: 'Redefinir',
        style: 'destructive',
        onPress: () => {
          AsyncStorage.removeItem('ranking').then(() => {
            setRanking([])
          })
            .catch(() => {
              Alert.alert('Ocorreu um problema ao redefinir o ranking')
            })
        }
      },
    ])
  }

  useEffect(() => {
    loadRanking()
  }, [])

  const renderItem = ({ item, index }) => (
    <RankingCard playerName={item.playerName} bestMatch={item.bestMatch} position={index + 1} />
  );

  return (
    <Container>
      <StatusBar style="light" animated />
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={ranking.length === 0 && { justifyContent: 'center', flex: 1 }}
        data={ranking}
        keyExtractor={item => item.playerName}
        renderItem={renderItem}
        ListEmptyComponent={<RankingEmpty />}
        ListFooterComponent={<Link onPress={resetRanking}>Redefinir ranking</Link>}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
