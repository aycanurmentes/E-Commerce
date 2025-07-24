import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  image: any;
  title: string;
  description: string;
  price: string;
  discount?: string;
  rating: number;
  voteCount: number;
  ratio?: string;
}

interface Props {
  products: Product[];
  fixedCardHeight?: number;
}

const ScrollingProductsWithRating: React.FC<Props> = ({ products, fixedCardHeight }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductCard
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
          rating={item.rating}
          voteCount={item.voteCount}
          discount={item.discount}
          ratio={item.ratio}
          style={fixedCardHeight ? { height: fixedCardHeight } : undefined}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={() => <View style={styles.item} />}
    />
  );
};

export default ScrollingProductsWithRating;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 12,
    paddingTop: 15,
    paddingBottom: 20,
  },
  item: {
    width: 20,
  },
});
