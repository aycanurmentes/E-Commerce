import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeliveryAddressSection from '../components/DeliveryAddressSection';
import ShoppingList from '../components/ShoppingList';
import TopBar from '../components/TopBar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes';

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

export default function BasketPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const updateQuantity = (id: number, change: number) => {
    const updatedCart = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    );

    const filteredCart = updatedCart.filter(item => item.quantity > 0);

    setCartItems(filteredCart);
    AsyncStorage.setItem('cart', JSON.stringify(filteredCart));
  };

  const deleteItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

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
      } finally {
        setLoading(false);
      }
    };

    const unsubscribe = navigation.addListener('focus', fetchCart);
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = await AsyncStorage.getItem('cart');
        const cart: CartItem[] = token ? JSON.parse(token) : [];

        const uniqueCart: CartItem[] = [];

        cart.forEach(item => {
          const existing = uniqueCart.find(i => i.id === item.id);
          if (existing) {
            existing.quantity += item.quantity;
          } else {
            uniqueCart.push({ ...item });
          }
        });

        const parsed = uniqueCart.map(item => ({
          ...item,
          price: typeof item.price === 'number'
            ? item.price
            : parseFloat(String(item.price).replace(/[^\d.-]/g, '')) || 0,
        }));

        setCartItems(parsed);
        await AsyncStorage.setItem('cart', JSON.stringify(parsed));
      } catch (error) {
        console.error('Failed to load cart', error);
      } finally {
        setLoading(false);
      }
    };

    const unsubscribe = navigation.addListener('focus', fetchCart);
    return unsubscribe;
  }, [navigation]);


  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => {
      const p = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^\d.-]/g, '')) || 0;
      return sum + p * item.quantity;
    }, 0).toFixed(2);
  };

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

      {loading ? (
        <ActivityIndicator size="large" color="#000" style={styles.activityIndicator} />
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item }) => (
              <ShoppingList
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                quantity={item.quantity}
                rating={item.rating}
                variations={item.variations || []}
                oldPrice={item.oldPrice}
                onIncrease={() => updateQuantity(item.id, 1)}
                onDecrease={() => updateQuantity(item.id, -1)}
                onDelete={() => deleteItem(item.id)}
              />
            )}
            contentContainerStyle={styles.list}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalValue}>₹{getTotalPrice()}</Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
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
  },
  list: {
    paddingBottom: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    width: '100%',
    height: 0.5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  activityIndicator: {
    margin: 20
  }
});
