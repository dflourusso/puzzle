import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Container } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RankingCard from '../../components/RankingCard'
import RankingEmpty from '../../components/RankingEmpty'


export default function Ranking({ navigation }) {
  const [ranking, setRanking] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('ranking')
      .then(ranking => {
        if (ranking) setRanking(JSON.parse(ranking))
      })
  }, [])

  const renderItem = ({ item, index }) => (
    <RankingCard playerName={item.playerName} bestMatch={item.bestMatch} position={index + 1} />
  );

  return (
    <Container>
      <StatusBar style="light" animated />
      <FlatList
        style={{ flex: 1, }}
        contentContainerStyle={ranking.length === 0 && { justifyContent: 'center', flex: 1 }}
        data={ranking}
        keyExtractor={item => item.playerName}
        renderItem={renderItem}
        ListEmptyComponent={<RankingEmpty />}
      />
    </Container>
  )
}
