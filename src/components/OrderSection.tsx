import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
type OrderProps = {
  title: string;
  price: number;
};

export default function ShoppingList({
  title,
  price,
}: OrderProps) {
  export default function OrderSection() {
    return (
      <View style={styles.container}>

      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  })