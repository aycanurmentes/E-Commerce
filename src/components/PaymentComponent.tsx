import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  price: number;
  shipping: number;
};

export default function PaymentComponent({ price, shipping }: Props) {
  const total = price + shipping;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Order</Text>
        <Text style={styles.label}>₹ {price}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Shipping</Text>
        <Text style={styles.label}>₹ {shipping}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>₹ {total}</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: '#FDFDFD',
    borderRadius: 12,
    elevation: 2,
    marginBottom:5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  label: {
    fontSize: 18,
    color: '#A8A8A9',
    fontWeight: '500'
  },
  total: {
    color: '#4C5059',
    fontSize: 18,
    fontWeight: '500'
  },
  divider: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#C4C4C4',
    marginVertical: 10,
  },
});
