import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const ScrollingProductsWithRating = () => {
  const products = [
    {
      id: '1',
      image: require('../images/scrollingp1.png'),
      title: 'Women Printed Kurta',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      price: '₹1500',
      discount: '₹2499',
      rating: 4.0,
      voteCount: 56890,
      ratio: '  40%Off',
    },
    {
      id: '2',
      image: require('../images/scrollingp2.png'),
      title: 'HRX by Hrithik Roshan',
      description: 'Comfortable and stylish daily wear',
      price: '₹2499',
      discount: '₹4999',
      rating: 4.0,
      voteCount: 344567,
      ratio: '  50%Off',
    },
    {
      id: '3',
      image: require('../images/scrollingp1.png'),
      title: 'Women Printed Kurta',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      price: '₹1500',
      discount: '₹2499',
      rating: 5,
      voteCount: 56890,
      ratio: '  60%Off',
    },
    {
      id: '4',
      image: require('../images/scrollingp2.png'),
      title: 'HRX by Hrithik Roshan',
      description: 'Comfortable and stylish daily wear',
      price: '₹2499',
      discount: '₹4999',
      rating: 4,
      voteCount: 344567,
      ratio: '  60%Off',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <ProductCard {...item} />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ScrollingProductsWithRating;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginBottom: 20,
    marginTop: 15,
  },
  cardWrapper: {
    marginRight: 25,
    width: 160,
  },
});
