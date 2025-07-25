import { StyleSheet, SafeAreaView, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
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

const Details = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const id = route?.params?.id

  let product = wishlistProducts[0]
  if (id) {
    const numericId = parseInt(id, 10)
    const foundProduct = wishlistProducts.find((item) => parseInt(item.id, 10) === numericId)
    if (foundProduct) {
      product = foundProduct
    }
  }

  const similarProducts = wishlistProducts.filter(
    (item) => item.groupId === product.groupId && item.id !== product.id
  )

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopBar
          left={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../images/back.png')} style={styles.backImage} />
            </TouchableOpacity>
          }
          right={
            <TouchableOpacity onPress={() => navigation.navigate('BasketPage')}>
              <Image source={require('../images/baskett.png')} style={styles.basketImage} />
            </TouchableOpacity>
          }
        />
        <ImageSlider
          slides={product.images.map((image) => ({
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
            <CartAndBuyButtons />
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
            <ScrollingProductsWithRating products={similarProducts} fixedCardHeight={305}/>
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
})
