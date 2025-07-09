import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import ProductCard from '../components/ProductCard';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import HeaderWithSortFilter from '../components/HeaderWithSortFilter';
import { wishlistProducts } from '../data/products';

//TODO:cardların alt kısmına gölge ekle  #BBB;

export default function Wishlistpage() {
  const leftColumn = wishlistProducts.filter((_, index) => index % 2 === 0);
  const rightColumn = wishlistProducts.filter((_, index) => index % 2 !== 0);

  return (
    <SafeAreaView style={styles.container}>
      <TopBar
        left={
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../images/openup.png')} />
          </TouchableOpacity>
        }
        center={
          <View style={styles.center}>
            <Image source={require('../images/logoItem.png')} />
            <Text style={styles.logoText}>Stylish</Text>
          </View>
        }
        right={
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('../images/profilePicture.png')}
              style={styles.profilePic}
            />
          </TouchableOpacity>
        }
      />

      <SearchBar />

      <HeaderWithSortFilter
        title="52,082+ Items"
        onSortPress={() => console.log('Sort')}
        onFilterPress={() => console.log('Filter')}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.columnsWrapper}>
          <View style={styles.column}>
            {leftColumn.map((item) => (
              <ProductCard
                key={item.id}
                {...item}
                style={[styles.card, { height: item.cardHeight }]}
              />
            ))}
          </View>
          <View style={styles.column}>
            {rightColumn.map((item) => (
              <ProductCard
                key={item.id}
                {...item}
                style={[styles.card, { height: item.cardHeight }]}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
   // overflow: 'hidden',
    margin: 8,
    backgroundColor: '#F9F9F9',
    flex: 1,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontWeight: '700',
    fontSize: 18,
    color: '#4392F9',
    fontFamily: 'Libre Caslon Text',
    marginLeft: 6,
  },
  profilePic: {
    width: 40,
    height: 40,
  },
  scrollContainer: {
    paddingHorizontal: 12,
    paddingBottom: 24,
    
  },
  columnsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  column: {
    flex: 1,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
});
