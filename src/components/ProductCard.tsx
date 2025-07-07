import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';
import StarRating from './StarRating'; 
interface ProductCardProps {
  image: any;
  title: string;
  description: string;
  price: string;
  rating: number;
  style?: ViewStyle;
}
const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  rating,
  style
}) => {
  return (
    <View style={[styles.card, style]}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        <Text numberOfLines={2} style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
        <StarRating rating={rating} />
      </View>
    </View>
  );
};
export default ProductCard;
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    flex: 1,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  image: {
    width: '100%',
    aspectRatio: 1.2,
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Montserrat',
    color: '#000',
  },
  description: {
    fontSize: 10,
    color: '#000',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    marginVertical: 4,
  },
  price: {
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
    fontFamily: 'Montserrat',
    marginBottom: 4,
  },
});
