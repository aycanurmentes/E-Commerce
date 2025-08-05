import { SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopBar from '../components/TopBar'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import OrderSection from '../components/OrderSection'
import ShoppingDetailCard from '../components/ShoppingDetailCard'

interface CartItem {
  id: number;
  title: string;
  price: number | string;
  image: any;
  quantity: number;
  rating: number;
  oldPrice?: number;
}

export default function PlaceOrder() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [totalAmount, setTotalAmount] = useState('0.00');

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = await AsyncStorage.getItem('cart');
        const cart: CartItem[] = token ? JSON.parse(token) : [];
        const parsed = cart.map(item => ({
          ...item,
          price: typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^\d.-]/g, '')) || 0,
        }));
        
        const total = parsed.reduce((sum, item) => {
          const p = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^\d.-]/g, '')) || 0;
          return sum + p * item.quantity;
        }, 0).toFixed(2);
        setTotalAmount(total);
      } catch (error) {
        console.error('Failed to load cart', error);
      }
    };

    fetchCart();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopBar
        leftIcon={require('../images/back.png')}
        onLeftPress={() => navigation.goBack()}
        centerText="Shopping Bag"
      />
      <View style={styles.line} />
      <SafeAreaView style={styles.mainContent}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <ShoppingDetailCard />
          <View style={styles.orderSectionContainer}>
            <OrderSection price={totalAmount} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.fixedBottom}>
        <View style={styles.bottomContent}>
          <View style={styles.priceSection}>
            <Text style={styles.priceText}>₹{totalAmount}</Text>
            <Text style={styles.viewDetailsText}>View Details</Text>
          </View>
          <TouchableOpacity 
            style={styles.proceedButton}
            onPress={() => navigation.navigate('Shipping')}
          >
            <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    width: '100%',
    height: 0.5
  },
  mainContent: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  orderSectionContainer: {
    paddingBottom: 80, 
  },
  fixedBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F8F8F8',
    borderWidth: 2,
    borderRadius:20,
    borderColor: '#eee',
    paddingBottom: 40,
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  priceSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  viewDetailsText: {
    fontSize: 12,
    color: '#F83758',
    marginTop: 2,
  },
  proceedButton: {
    backgroundColor: '#F83758',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  proceedButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
})
