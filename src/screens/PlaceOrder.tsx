import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import OrderSection from '../components/OrderSection'
import ShoppingDetailCard from '../components/ShoppingDetailCard'
import TopBar from '../components/TopBar'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes'


export default function PlaceOrder() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopBar
          left={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../images/back.png')} style={styles.backImage} />
            </TouchableOpacity>}
          center={
            <View style={styles.center}>
              <Text style={styles.logoText}>Shopping Bag</Text>
            </View>}
          right={
            <TouchableOpacity onPress={() => navigation.navigate('ProfileSection')}>
              <Image source={require('../images/favorite.png')} style={styles.heartPic} />
            </TouchableOpacity>} />
        <View style={styles.top}>
          <ShoppingDetailCard />
        </View>
        <OrderSection price={'7,000.00'} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    gap: 54
  },
  top: {
    top: -55
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
  heartPic: {
    width: 20,
    height: 16
  }
})
