import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import StarRating from './StarRating';
import DropDownMenu from './DropDownMenu';

interface WishlistItemProps {
  id: number;
  image: any;
  title: string;
  price: number | string;
  rating?: number;
  onAddToCart?: () => void;
  onRemoveFromWishlist?: () => void;
  onPress?: () => void;
}

export default function WishlistItem({
  image,
  title,
  price,
  rating = 4.5,
  onAddToCart,
  onRemoveFromWishlist,
  onPress,
}: WishlistItemProps) {
  const numericPrice = typeof price === 'number' ? price : parseFloat(String(price).replace(/[^\d.-]/g, '')) || 0;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text numberOfLines={2} style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={onRemoveFromWishlist} style={styles.deleteButton}>
            <Image source={require('../images/heart-filled.png')} style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.ratingRow}>
          <StarRating rating={rating} />
          <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
        </View>
        <Text style={styles.price}>₹{numericPrice.toFixed(2)}</Text>
        <View style={styles.buttons}>
          <View style={styles.dropDown}>
            <DropDownMenu
              defaultValue='32'
              data={Array.from({ length: 8 }, (_, i) => (32 + i * 2).toString())}
              onSelect={(val) => console.log("Selected size:", val)} />
          </View>
          <TouchableOpacity onPress={onAddToCart} style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 8,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
    color: '#333',
  },
  deleteButton: {
    padding: 4,
  },
  deleteIcon: {
    width: 18,
    height: 18,
    tintColor: '#FF4444',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 12,
    marginLeft: 6,
    marginTop: 1,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    color: '#333',
  },
  addToCartButton: {
    backgroundColor: '#F83758',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 100,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  dropDown: {
    zIndex: 10,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  }
}); 