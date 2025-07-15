import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import OrderSection from '../components/OrderSection'
import ShoppingDetailCard from '../components/ShoppingDetailCard'

export default function PlaceOrder() {
  return (
    <SafeAreaView style={styles.container}>
      <ShoppingDetailCard />
      <OrderSection price={'7,000.00'} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    gap: 54
  },
})