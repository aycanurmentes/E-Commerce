import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute, RouteProp, useIsFocused } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import HeaderWithSortFilter from '../components/HeaderWithSortFilter';
import ProductCard from '../components/ProductCard';
import { wishlistProducts } from '../data/products';

type RouteParams = {
  selectedCategory?: string;
};

function getHeightForIndex(index: number): number {
  const pattern = [245, 305, 305, 245];
  return pattern[index % pattern.length];
}

export default function WishlistPage() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const isFocused = useIsFocused();

  const [visibleProducts, setVisibleProducts] = useState(wishlistProducts);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [lastCategoryParam, setLastCategoryParam] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (isFocused) {
      const currentCategoryParam = route.params?.selectedCategory;
      if (currentCategoryParam && currentCategoryParam !== lastCategoryParam) {
        const filtered = wishlistProducts.filter(
          (item) => item.category === currentCategoryParam
        );
        setVisibleProducts(filtered);
        setSelectedCategory(currentCategoryParam);
        setLastCategoryParam(currentCategoryParam);
      } else if (!currentCategoryParam) {
        setVisibleProducts(wishlistProducts);
        setSelectedCategory(undefined);
        setLastCategoryParam(undefined);
      }
    } else {
      setVisibleProducts(wishlistProducts);
      setSelectedCategory(undefined);
      setLastCategoryParam(undefined);
      navigation.setParams({ selectedCategory: undefined });
    }
  }, [isFocused, route.params?.selectedCategory, lastCategoryParam, navigation]);

  const leftColumn = visibleProducts
    .map((item, index) => ({ ...item, index }))
    .filter((_, index) => index % 2 === 0);

  const rightColumn = visibleProducts
    .map((item, index) => ({ ...item, index }))
    .filter((_, index) => index % 2 !== 0);

  const [search, setSearch] = useState('');
  useEffect(() => {
    let filtered = wishlistProducts;

    if (selectedCategory) {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (search.trim() !== '') {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setVisibleProducts(filtered);
  }, [search, selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <TopBar
        leftIcon={require('../images/openup.png')}
        onLeftPress={() => { }}
        centerImage={require('../images/logoItem.png')}
        centerText="Stylish"
        centerTextColor="#4392F9"
        rightIcon={require('../images/profilePicture.png')}
        onRightPress={() => navigation.navigate('ProfileSection')}
      />
      <SearchBar
        leftIcon={<Image source={require('../images/searchInput.png')} />}
        rightIcon={<Image source={require('../images/voice.png')} />}
        value={search}
        onChangeText={setSearch}
      />
      <HeaderWithSortFilter
        title={`${visibleProducts.length}+ Items`}
        onSortPress={() => console.log('Sort')}
        onFilterPress={() => console.log('Filter')}
      />
      {selectedCategory && (
        <Text style={styles.categoryHeader}>
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
        </Text>
      )}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.columnsWrapper}>
          <View style={styles.column}>
            {leftColumn.map((item) => (
              <ProductCard
                key={item.id}
                {...item}
                style={[styles.card, { height: getHeightForIndex(item.index) }]}
                cardHeight={getHeightForIndex(item.index)}
                onPress={() =>
                  navigation.navigate('Details', { id: String(item.id) })
                }
              />
            ))}
          </View>
          <View style={styles.column}>
            {rightColumn.map((item) => (
              <ProductCard
                key={item.id}
                {...item}
                style={[styles.card, { height: getHeightForIndex(item.index) }]}
                cardHeight={getHeightForIndex(item.index)}
                onPress={() =>
                  navigation.navigate('Details', { id: String(item.id) })
                }
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
    margin: 8,
    backgroundColor: '#F9F9F9',
    flex: 1,
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
    shadowColor: '#BBB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 12,
  },
});
