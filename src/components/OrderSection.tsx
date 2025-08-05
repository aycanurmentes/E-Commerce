import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type OrderProps = {
  price: string;
};

export default function OrderSection({ price }: OrderProps) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.rowDirection}>
          <View style={styles.rowDirection}>
            <Image source={require('../images/coupon.png')} />
            <Text style={styles.title}>Apply Coupons</Text>
          </View>
          <Text style={styles.redText}>Select</Text>
        </View>
        <View style={styles.separator} />
        <Text style={styles.title}>Order Payment Details</Text>
        <View style={styles.rowDirection}>
          <Text style={styles.text}>Order Amounts</Text>
          <Text style={styles.title}>₹{price}</Text>
        </View>
        <View style={styles.rowDirection}>
          <View style={styles.rowDirection}>
            <Text style={styles.text}>Convenience</Text>
            <Text style={styles.redText}>Know more</Text>
          </View>
          <Text style={styles.redText}>Apply Coupon</Text>
        </View>
        <View style={styles.rowDirection}>
          <Text>Delivery Fee</Text>
          <Text style={styles.redText}>Free</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.rowDirection}>
          <Text style={styles.title}>Order Total</Text>
          <Text style={styles.title}>₹{price}</Text>
        </View>
        <View style={styles.rowDirection}>
          <Text style={styles.text}>EMI Available</Text>
          <Text style={styles.redText}>Details</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    margin: 16,
    marginBottom: 10,
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  columnDirection: {
    flexDirection: 'column',
    gap: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
  },
  redText: {
    color: '#F83758',
    fontSize: 13,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: '#BBBBBB',
    width: '95%',
    alignSelf: 'center',
    margin: 20
  }
});
