import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import StarRating from './StarRating';

interface ShoppingListProps {
  id: number;
  image: any;
  title: string;
  price: number | string;
  quantity: number;
  rating?: number;
  variations?: string[];
  oldPrice?: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onDelete?: () => void;
}

export default function ShoppingList({
  image,
  title,
  price,
  quantity,
  rating = 4.5,
  onIncrease,
  onDecrease,
  onDelete,
}: ShoppingListProps) {
  const numericPrice = typeof price === 'number' ? price : parseFloat(String(price).replace(/[^\d.-]/g, '')) || 0;
  const total = (numericPrice * quantity).toFixed(2);

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
            <Image source={require('../images/basket.png')} style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.ratingRow}>
          <StarRating rating={rating} />
          <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
        </View>
        <Text style={styles.price}>₹{numericPrice.toFixed(2)}</Text>
        <Text style={styles.totalText}>Total Order ({quantity}) : ₹ {total}</Text>
        <View style={styles.counterRow}>
          <TouchableOpacity onPress={onDecrease} style={styles.counterButton}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={onIncrease} style={styles.counterButton}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  deleteButton: {
    padding: 4,
  },
  deleteIcon: {
    width: 16,
    height: 16,
    tintColor: '#FF4444',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 12,
    marginLeft: 6,
    marginTop: 3,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  totalText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  counterButton: {
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 4,
  },
  counterText: {
    fontSize: 16,
    fontWeight: '600',
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: '500',
  },
});
