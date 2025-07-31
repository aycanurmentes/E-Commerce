import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'

export default function DeliveryAddressSection() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../images/location.png')} style={styles.image} />
        <Text style={styles.title}>Delivery Address</Text>
      </View>
      <View style={styles.sections}>
        <View style={styles.cardContainer}>
          <View style={styles.first}>
            <Text style={styles.caption}>Address:</Text>
            <Image source={require('../images/editAddress.png')} style={styles.image} />
          </View>
          <View style={styles.address}>
            <Text style={styles.addressText}>216 St Paul's Rd, London N1 2LL, UK</Text>
            <Text style={styles.addressText}>Contact : +44-784232</Text>
          </View>
        </View>
        <View style={styles.addContainer}>
          <Image source={require('../images/plus.png')} style={styles.plusIcon} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 16,
    marginBottom: 24,
    marginTop: 18
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 1,
    paddingLeft: 22,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Montserrat',
    marginLeft: 8,
  },
  image: {
    width: 16,
    height: 16,
    tintColor: '#000',
  },
  sections: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    padding: 22
  },
  cardContainer: {
    flex: 1,
    width: 241,
    height: 79,
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 22,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    justifyContent: 'center'
  },
  first: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  caption: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
  address: {
    gap: 4,
    lineHeight: 14
  },
  addressText: {
    fontSize: 12,
    fontWeight: '400',
  },
  addContainer: {
    backgroundColor: '#fff',
    width: 78,
    height: 79,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  plusIcon: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
});
