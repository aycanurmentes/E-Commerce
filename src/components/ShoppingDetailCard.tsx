import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import DropDownMenu from '../components/DropDownMenu'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface CartItem {
  id: number;
  title: string;
  price: number | string;
  image: any;
  quantity: number;
  rating: number;
  oldPrice?: number;
  variations?: string[];
}

export default function ShoppingDetailCard() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = await AsyncStorage.getItem('cart');
        const cart: CartItem[] = token ? JSON.parse(token) : [];
        const parsed = cart.map(item => ({
          ...item,
          price: typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^\d.-]/g, '')) || 0,
        }));
        setCartItems(parsed);
      } catch (error) {
        console.error('Failed to load cart', error);
      }
    };

    fetchCart();
  }, []);

  const renderProductCard = ({ item }: { item: CartItem }) => (
    <View style={styles.productCard}>
      <View style={styles.leftCorner}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.rightCorner}>
        <Text style={styles.boldText}>{item.title}</Text>
        <Text style={styles.regularText}>{item.title}</Text>
        <View style={styles.dropDown}>
          <DropDownMenu
            defaultValue={item.variations?.[0] || '32'}
            data={item.variations || ['32']}
            onSelect={(_val) => {}}
            disabled={true} />
          <DropDownMenu
            defaultValue={item.quantity.toString()}
            data={Array.from({ length: 10 }, (_, i) => (1 + i).toString())}
            onSelect={(_val) => {}}
            title={'Qty'}
            disabled={true} />
        </View>
        <View style={styles.rowDirection}>
          <Text style={styles.regularText}>Delivery by </Text>
          <Text style={styles.boldText}>10 May 2XXX</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.map((item, index) => (
        <View key={`${item.id}-${index}`}>
          {renderProductCard({ item })}
          {index < cartItems.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  productCard: {
    backgroundColor: '#FDFDFD',
    flexDirection: 'row',
    gap: 15,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  separator: {
    height: 8,
  },
  leftCorner: {
    marginLeft: 5,
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 4,
  },
  rightCorner: {
    gap: 6,
    margin: 8,
    flex: 1,
  },
  rowDirection: {
    flexDirection: 'row'
  },
  boldText: {
    fontSize: 14,
    fontWeight: '600'
  },
  regularText: {
    fontSize: 12,
    fontWeight: '400'
  },
  dropDown: {
    flexDirection: 'row'
  }
})