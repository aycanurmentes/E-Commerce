import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { wishlistProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../components/TopBar'

const SettingsPage = () => {
  const [favorites, setFavorites] = useState<string[]>([])
  const [leftColumn, setLeftColumn] = useState<any[]>([])
  const [rightColumn, setRightColumn] = useState<any[]>([])
  const navigation = useNavigation()

  const fetchFavorites = async () => {
    const token = await AsyncStorage.getItem('favorites')
    const res = token ? JSON.parse(token) : []
    setFavorites(res)
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchFavorites()
    }, [])
  )

  useEffect(() => {
    const favoriteProducts = wishlistProducts.filter(p => favorites.includes(p.id))

    const left: any[] = []
    const right: any[] = []

    favoriteProducts.forEach((item, index) => {
      const withIndex = { ...item, index }
      if (index % 2 === 0) {
        left.push(withIndex)
      } else {
        right.push(withIndex)
      }
    })

    setLeftColumn(left)
    setRightColumn(right)
  }, [favorites])

  const getHeightForIndex = (index: number) => {
    return index % 3 === 0 ? 305 : 250
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar
       left={
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image source={require('../images/openup.png')} />
                </TouchableOpacity>
              }
        center={
          <View style={styles.center}>
            <Text style={styles.logoText}>Favorites</Text>
          </View>
        }
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.columnsWrapper}>
          <View style={styles.column}>
            {leftColumn.map((item) => (
              <ProductCard
                key={item.id}
                {...item}
                style={[styles.card, { height: getHeightForIndex(item.index) }]}
                cardHeight={getHeightForIndex(item.index)}
                onPress={() =>
                  navigation.navigate('Details', { id: String(item.id) })
                }
              />
            ))}
          </View>
          <View style={styles.column}>
            {rightColumn.map((item) => (
              <ProductCard
                key={item.id}
                {...item}
                style={[styles.card, { height: getHeightForIndex(item.index) }]}
                cardHeight={getHeightForIndex(item.index)}
                onPress={() =>
                  navigation.navigate('Details', { id: String(item.id) })
                }
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SettingsPage
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#EB3030'
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingTop: 16,
    paddingBottom: 30,
  },
  columnsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    gap: 16,
  },
  card: {
    marginHorizontal: 5,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000',
    fontFamily: 'Libre Caslon Text',
    marginLeft: 6,
  },
})
