import { StyleSheet, SafeAreaView, View, Text, ScrollView } from 'react-native'
import React from 'react'
import SizeButtons from '../components/SizeButton'
import SimilarAndCompareButtons from '../components/SimilarAndCompareButtons.tsx'
import ImageSlider from '../components/ImageSlider'
import { basketSliderData } from '../data/sliders'
import StarRating from '../components/StarRating'
import HeaderWithSortFilter from '../components/HeaderWithSortFilter'
import ScrollingProductsWithRating from '../components/ScrollingProductsWithRating'
import { basketProducts } from '../data/basketPageProducts';
import CartAndBuyButtons from '../components/CartAndBuyButtons'
import InfoButtons from '../components/InfoButtons.tsx'

export default function BasketPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageSlider
          slides={basketSliderData}
          sliderHeight={250}
          activeDotColor="#F83758"
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle} />
        <SizeButtons />
        <View style={styles.detailsContainer}>
          <View style={styles.topTitle}>
            <Text style={styles.title}>
              Nike Sneakers
            </Text>
            <Text style={styles.subtitle}>
              Vision Alta Men’s Shoes Size (All Colours)
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.starComment}>
              <StarRating rating={4.3} />
              <Text style={styles.comment}>56,890</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.discount}>
                ₹2,999
                <Text style={styles.price}>   ₹1,500</Text>
                <Text style={styles.ratio}>   50% Off</Text>
              </Text>
            </View>
            <View style={styles.productDetails}>
              <Text style={styles.productTitle}>Product Details</Text>
              <Text style={styles.productSubtitle}>Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the
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
              title="282+ Iteams"
              onSortPress={() => console.log('Sort')}
              onFilterPress={() => console.log('Filter')} />
            <ScrollingProductsWithRating products={basketProducts} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
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
  }
})

