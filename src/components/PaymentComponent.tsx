import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  shipping: number;
};

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: any;
  quantity: number;
  rating: number;
  variatios?: string[];
  oldPrice?: number;
}

export default function PaymentComponent({ shipping }: Props) {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      if (cartData) {
        const items: CartItem[] = JSON.parse(cartData);
        const total = items.reduce((sum, item) => {
          const p = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^\d.-]/g, '')) || 0;
          return sum + p * item.quantity;
        }, 0);
        setSubtotal(total);
      }
    } catch (error) {
      console.error('PaymentComponent - Failed to load cart', error);
    }
  };

  const total = subtotal + shipping;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Order</Text>
        <Text style={styles.label}>₹ {subtotal.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Shipping</Text>
        <Text style={styles.label}>₹ {shipping}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>₹ {total.toFixed(2)}</Text>
      </View>
      <View style={styles.divider} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: '#FDFDFD',
    borderRadius: 12,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#A8A8A9',
    fontWeight: '500'
  },
  total: {
    color: '#4C5059',
    fontSize: 16,
    fontWeight: '500'
  },
  divider: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#C4C4C4',
    marginVertical: 8,
  },
});
