import { StyleSheet, SafeAreaView, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import SizeButtons from '../components/SizeButton'
import SimilarAndCompareButtons from '../components/SimilarAndCompareButtons.tsx'
import ImageSlider from '../components/ImageSlider'
import StarRating from '../components/StarRating'
import HeaderWithSortFilter from '../components/HeaderWithSortFilter'
import ScrollingProductsWithRating from '../components/ScrollingProductsWithRating'
import CartAndBuyButtons from '../components/CartAndBuyButtons'
import InfoButtons from '../components/InfoButtons.tsx'
import TopBar from '../components/TopBar.tsx'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { wishlistProducts } from '../data/products.ts'
import { RootStackParamList } from '../navigations/NavigationTypes.ts'
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

const Details = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const id = route?.params?.id
  const [isFavorite, setIsFavorite] = useState(false)

  let product = wishlistProducts[0]
  if (id) {
    const numericId = parseInt(id, 10)
    const foundProduct = wishlistProducts.find((item) => parseInt(item.id, 10) === numericId)
    if (foundProduct) {
      product = foundProduct
    }
  }

  useEffect(() => {
    const fetchFavorites = async () => {
      if (product?.id) {
        await renderFavorites(product.id)
      }
    }
    fetchFavorites()
  }, [product?.id])

  const similarProducts = wishlistProducts.filter(
    (item) => item.groupId === product.groupId && item.id !== product.id
  )

  const saveFavorites = async (itemId: string) => {
    try {
      const token = await AsyncStorage.getItem('favorites')
      let res = token ? JSON.parse(token) : []
      res = res.filter((id: string) => id !== itemId)
      res.unshift(itemId)
      await AsyncStorage.setItem('favorites', JSON.stringify(res))
      setIsFavorite(true)
    } catch (err) {
      console.error('Save failed', err)
    }
  }

  const removeFavorites = async (itemId: string) => {
    try {
      const token = await AsyncStorage.getItem('favorites')
      const res = token ? JSON.parse(token) : []
      const updated = res.filter((val: string) => val !== itemId)
      await AsyncStorage.setItem('favorites', JSON.stringify(updated))
      setIsFavorite(false)
    } catch (err) {
      console.error('Remove failed', err)
    }
  }
  const renderFavorites = async (itemId: string) => {
    try {
      const token = await AsyncStorage.getItem('favorites')
      const res = token ? JSON.parse(token) : []
      setIsFavorite(res.includes(itemId))
    } catch (err) {
      console.error('Render failed', err)
    }
  }
  const addToCart = async () => {
    try {
      console.log('🛒 Sepete ekleniyor:', product.title);
      const token = await AsyncStorage.getItem('cart');
      const cart: CartItem[] = token ? JSON.parse(token) : [];

      const parsedPrice = parseFloat(String(product.price).replace(/[^\d.-]/g, '').replace(',', ''));
      console.log('💰 Fiyat:', parsedPrice);

      const existingIndex = cart.findIndex(item => item.id === parseInt(product.id));
      if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
        console.log('➕ Mevcut ürün miktarı artırıldı:', cart[existingIndex].quantity);
      } else {
        cart.push({
          id: parseInt(product.id),
          title: product.title,
          price: parsedPrice,
          image: product.images[0],
          quantity: 1,
          rating: product.rating,
          oldPrice: parsedPrice * 1.5,
          variations: ['Black', 'Red'],
        });
        console.log('🆕 Yeni ürün sepete eklendi');
      }

      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      console.log('💾 Sepet kaydedildi, toplam ürün sayısı:', cart.length);
    } catch (error) {
      console.error('❌ Cart add failed', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopBar
          leftIcon={require('../images/back.png')}
          onLeftPress={() => navigation.goBack()}
          rightIcon={require('../images/baskett.png')}
          onRightPress={() => navigation.navigate('TabNavigation' as any, { screen: 'Basket' } as any)}
        />
        <ImageSlider
          slides={product.images.map((image, index) => ({
            key: `${product.id}-${index}`, 
            image: image,
            title: '',
            subtitle: '',
            subtitle2: '',
            buttonText: '',
            onPress: () => { },
          }))}
          sliderHeight={250}
          activeDotColor="#F83758"
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
          showOverlay={false}
        />

        <View style={styles.heartIconContainer}>
          <TouchableOpacity onPress={() => {
            isFavorite ? removeFavorites(product.id) : saveFavorites(product.id)
          }}>
            <Image
              source={
                isFavorite
                  ? require('../images/heart-filled.png')
                  : require('../images/heart-outlined.png')
              }
              style={styles.heartIcon}
            />
          </TouchableOpacity>
        </View>
        <SizeButtons />
        <View style={styles.detailsContainer}>
          <View style={styles.topTitle}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.subtitle}>{product.description}</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.starComment}>
              <StarRating rating={product.rating} />
              <Text style={styles.comment}>{product.voteCount.toLocaleString()}</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.price}>{product.price}</Text>
            </View>
            <View style={styles.productDetails}>
              <Text style={styles.productTitle}>Product Details</Text>
              <Text style={styles.productSubtitle}>
                {product.details}
                <Text style={styles.innerSubtitle}> ...More</Text>
              </Text>
            </View>
            <InfoButtons />
            <CartAndBuyButtons
              onCartPress={addToCart}
              onBuyPress={async () => {
                await addToCart();
                navigation.navigate('TabNavigation' as any, { screen: 'Basket' } as any);
              }}
            />
            <View style={styles.pinkContainer}>
              <Text style={styles.productTitle}>Delivery in </Text>
              <Text style={styles.title}>1 within Hour </Text>
            </View>
            <SimilarAndCompareButtons />
            <Text style={styles.title}>Similar To</Text>
            <HeaderWithSortFilter
              title={`${similarProducts.length}+ Items`}
              onSortPress={() => console.log('Sort')}
              onFilterPress={() => console.log('Filter')}
            />
            <ScrollingProductsWithRating products={similarProducts} fixedCardHeight={305} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonStyle: {
    backgroundColor: '#BBBBBB',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: '#000'
  },
  detailsContainer: {
    flex: 1,
    gap: 3,
    marginLeft: 16,
  },
  topTitle: {
    gap: 8
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Montserrat'
  },
  infoContainer: {
    flex: 1,
    gap: 3
  },
  starComment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  comment: {
    color: '#828282',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5
  },
  priceRow: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    fontFamily: 'Montserrat',
    textDecorationLine: 'none'
  },
  discount: {
    fontSize: 14,
    fontWeight: '500',
    color: '#808488',
    textDecorationLine: 'line-through',
    fontFamily: 'Montserrat',
  },
  ratio: {
    color: '#FA7189',
    textDecorationLine: 'none',
    fontSize: 14,
    fontWeight: '600',
  },
  productDetails: {
    gap: 4,
    marginRight: 20
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '500'
  },
  productSubtitle: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16
  },
  innerSubtitle: {
    color: '#FA7189'
  },
  pinkContainer: {
    backgroundColor: '#FFCCD5',
    width: 350,
    height: 60,
    justifyContent: 'center',
    padding: 20,
    borderRadius: 5,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF0000',
    textAlign: 'center',
  },
  basketImage: {
    width: 20,
    height: 20,
    color: '#000'
  },
  backImage: {
    width: 9.5,
    height: 19,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 90,
    right: 30,
    zIndex: 10,
  },
  heartIcon: {
    width: 30,
    height: 30,
    tintColor: '#EB3030',
  },
})
