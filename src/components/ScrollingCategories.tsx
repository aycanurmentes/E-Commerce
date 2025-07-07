import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const categories = ['beauty', 'fashion', 'kids', 'mens', 'womens','gift'];
const categoryImages: Record<string, any> = {
  beauty: require('../images/beauty.png'),
  fashion: require('../images/fashion.png'),
  kids: require('../images/kids.png'),
  mens: require('../images/mens.png'),
  womens: require('../images/womens.png'),
  gift: require('../images/beauty.png'),
};
const ScrollingCategories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.categories}
    >
      {categories.map((item, index) => (
        <View style={styles.categoryItem} key={index}>
          <Image
            source={categoryImages[item]}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};
export default ScrollingCategories;
const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fff',
  },
  categoryText: {
    fontSize: 13,
    color: '#222',
    marginTop: 4,
  },
});
