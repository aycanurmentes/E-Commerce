import { StyleSheet, SafeAreaView, Text, FlatList, View } from 'react-native'
import React from 'react'
import DeliveryAddressSection from '../components/DeliveryAddressSection'
import ShoppingList from '../components/ShoppingList'
import { shoppingList } from '../data/shoppingList'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes'
import TopBar from '../components/TopBar'


export default function Checkout() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
     <TopBar
          leftIcon={require('../images/back.png')}
          onLeftPress={() => navigation.goBack()}
          centerText="Checkout"
        />
      <View style={styles.line} />
      <DeliveryAddressSection />
      <Text style={styles.header}>Shopping List</Text>
      <FlatList
        data={shoppingList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ShoppingList {...item} />}
        contentContainerStyle={styles.list} />
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
    marginTop: 64
  },
  list: {
    paddingBottom: 20,
  },
  center: {
    flexDirection: 'row',
  },
  logoText: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    width: '100%',
    height: 0.5
  },
  backImage: {
    width: 9.5,
    height: 19
  },
})