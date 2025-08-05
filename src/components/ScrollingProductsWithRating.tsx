import React, { useCallback } from 'react';
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
  const renderItem = useCallback(({ item }: { item: Product }) => (
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
  ), [fixedCardHeight]);

  const keyExtractor = useCallback((item: Product) => item.id, []);

  const ItemSeparator = useCallback(() => <View style={styles.item} />, []);

  return (
    <FlatList
      data={products}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={ItemSeparator}
      removeClippedSubviews={true}
      maxToRenderPerBatch={5}
      windowSize={5}
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
