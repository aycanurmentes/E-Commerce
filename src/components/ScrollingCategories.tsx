import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const categories = ['beauty', 'fashion', 'kids', 'mens', 'womens', 'gift'];

const categoryImages: Record<string, any> = {
  beauty: require('../images/beauty.png'),
  fashion: require('../images/fashion.png'),
  kids: require('../images/kids.png'),
  mens: require('../images/mens.png'),
  womens: require('../images/womens.png'),
  gift: require('../images/beauty.png'),
};

const ScrollingCategories = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.categories}  >
      {categories.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate('Search', { selectedCategory: item })}>
          <View style={styles.categoryItem} >
            <Image
              source={categoryImages[item]}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Text>
          </View>
        </TouchableOpacity>
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
