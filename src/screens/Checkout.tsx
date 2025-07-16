import { StyleSheet, SafeAreaView, Text, FlatList } from 'react-native'
import React from 'react'
import DeliveryAddressSection from '../components/DeliveryAddressSection'
import ShoppingList from '../components/ShoppingList'
import { shoppingList } from '../data/shoppingList'

export default function Checkout() {
  return (
    <SafeAreaView style={styles.container}>
      <DeliveryAddressSection />
      <Text style={styles.header}>Shopping List</Text>
      <FlatList
        data={shoppingList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ShoppingList {...item} />}
        contentContainerStyle={styles.list}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  header: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 22,
    padding: 2,
    marginTop: 24
  },
  list: {
    paddingBottom: 20,
  },
})