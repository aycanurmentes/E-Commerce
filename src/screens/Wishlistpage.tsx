import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { wishlistProducts } from '../data/products'
import WishlistItem from '../components/WishlistItem'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../components/TopBar'
import SearchBar from '../components/SearchBar'
import HeaderWithSortFilter from '../components/HeaderWithSortFilter'

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

type SortOption = 'name' | 'price-low' | 'price-high' | 'rating' | 'category';
type FilterOption = 'all' | 'mens' | 'womens' | 'kids' | 'gift' | 'beauty' | 'fashion';

const WishlistPage = () => {
  const [favorites, setFavorites] = useState<string[]>([])
  const [favoriteProducts, setFavoriteProducts] = useState<any[]>([])
  const [filteredProducts, setFilteredProducts] = useState<any[]>([])
  const [search, setSearch] = useState('')
  const [currentSort, setCurrentSort] = useState<SortOption>('name');
  const [currentFilter, setCurrentFilter] = useState<FilterOption>('all');
  const navigation = useNavigation()

  const fetchFavorites = async () => {
    const token = await AsyncStorage.getItem('favorites')
    const res = token ? JSON.parse(token) : []
    setFavorites(res)
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchFavorites()
    }, [])
  )

  useEffect(() => {
    const products = favorites
      .map(favId => wishlistProducts.find(p => p.id === favId))
      .filter(Boolean)
    setFavoriteProducts(products)
  }, [favorites])

  useEffect(() => {
    let filtered = favoriteProducts.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )

    if (currentFilter !== 'all') {
      filtered = filtered.filter(item => item.category === currentFilter);
    }

    switch (currentSort) {
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = parseFloat(String(a.price).replace(/[^\d.-]/g, ''));
          const priceB = parseFloat(String(b.price).replace(/[^\d.-]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = parseFloat(String(a.price).replace(/[^\d.-]/g, ''));
          const priceB = parseFloat(String(b.price).replace(/[^\d.-]/g, ''));
          return priceB - priceA;
        });
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'category':
        filtered.sort((a, b) => a.category.localeCompare(b.category));
        break;
    }

    setFilteredProducts(filtered)
  }, [search, favoriteProducts, currentSort, currentFilter])

  const addToCart = async (product: any) => {
    try {
      const token = await AsyncStorage.getItem('cart');
      const cart: CartItem[] = token ? JSON.parse(token) : [];

      const parsedPrice = parseFloat(String(product.price).replace(/[^\d.-]/g, '').replace(',', ''));

      const existingIndex = cart.findIndex(item => item.id === parseInt(product.id));
      if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
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
      }
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Cart add failed', error);
    }
  };

  const removeFromWishlist = async (productId: string) => {
    try {
      const token = await AsyncStorage.getItem('favorites')
      const res = token ? JSON.parse(token) : []
      const updated = res.filter((val: string) => val !== productId)
      await AsyncStorage.setItem('favorites', JSON.stringify(updated))
      setFavorites(updated)
    } catch (err) {
      console.error('Remove from wishlist failed', err)
    }
  }

  const handleSortChange = (sortOption: SortOption) => {
    setCurrentSort(sortOption);
  };

  const handleFilterChange = (filterOption: FilterOption) => {
    setCurrentFilter(filterOption);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBar
        leftIcon={require('../images/openup.png')}
        onLeftPress={() => navigation.goBack()}
        centerText="Favorites"
      />
      <SearchBar
        leftIcon={<Image source={require('../images/searchInput.png')} />}
        rightIcon={<Image source={require('../images/voice.png')} />}
        value={search}
        onChangeText={setSearch}
      />
      <HeaderWithSortFilter
        title={`${filteredProducts.length}+ Items`}
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
        currentSort={currentSort}
        currentFilter={currentFilter}
      />
      {filteredProducts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>There is no product</Text>
        </View>
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <WishlistItem
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.images[0]}
              rating={item.rating}
              onAddToCart={() => addToCart(item)}
              onRemoveFromWishlist={() => removeFromWishlist(item.id)}
              onPress={() => (navigation as any).navigate('Details', { id: String(item.id) })}
            />
          )}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  )
}

export default WishlistPage

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    margin: 8,
    backgroundColor: '#F9F9F9',
    flex: 1,
  },
  list: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
})
