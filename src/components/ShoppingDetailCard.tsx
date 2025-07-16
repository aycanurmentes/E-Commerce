import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DropDownMenu from '../components/DropDownMenu'


export default function ShoppingDetailCard() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftCorner}>
        <Image source={require('../images/shoppingList1.png')} style={styles.image} />
      </View>
      <View style={styles.rightCorner}>
        <Text style={styles.boldText}>Women’s Casual Wear</Text>
        <Text style={styles.regularText}>Checked Single-Breasted</Text>
        <Text style={styles.regularText}>Blazer</Text>
        <View style={styles.dropDown}>
          <DropDownMenu
            defaultValue='32'
            data={Array.from({ length: 8 }, (_, i) => (32 + i * 2).toString())}
            onSelect={(val) => console.log("Selected size:", val)} />
          <DropDownMenu
            defaultValue='1'
            data={Array.from({ length: 8 }, (_, i) => (1 + i++).toString())}
            onSelect={(val) => console.log("Selected quantity:", val)}
            title={'Qty'} />
        </View>
        <View style={styles.rowDirection}>
          <Text style={styles.regularText}>Delivery by </Text>
          <Text style={styles.boldText}>10 May 2XXX</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFDFD',
    flexDirection: 'row',
    gap: 21,
    bottom: -85
  },
  dropDown: {
    flexDirection: 'row'
  },
  leftCorner: {
    marginLeft: 21,
  },
  image: {
    width: 123,
    height: 153,
    borderRadius: 4,
  },
  rightCorner: {
    gap: 8,
    margin: 12,
  },
  rowDirection: {
    flexDirection: 'row'
  },
  boldText: {
    fontSize: 16,
    fontWeight: '600'
  },
  regularText: {
    fontSize: 13,
    fontWeight: '400'
  }
})