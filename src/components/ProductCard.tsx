import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle, TouchableOpacity, StyleProp } from 'react-native';
import StarRating from './StarRating';

interface ProductCardProps {
  image: any;
  title: string;
  description: string;
  price: string;
  discount?: string;
  ratio?: string;
  rating: number;
  voteCount?: number;
  productDetails?: string;
  style?: StyleProp<ViewStyle>;
  cardHeight?: number;
  onPress?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  discount,
  ratio,
  rating,
  voteCount,
  style,
  onPress,
  cardHeight = 245, 
}) => {
  const imageHeight = cardHeight === 305 ? '62%' : '55%';

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, style]}>
        <Image source={image} style={[styles.image, { height: imageHeight }]} />
        <View style={styles.infoContainer}>
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
          <Text numberOfLines={2} style={styles.description}>{description}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>{price}</Text>
            {discount && <Text style={styles.discount}>{discount}
              <Text style={styles.ratio}>
                {ratio}
              </Text>
            </Text>}
          </View>
          <View style={styles.ratingRow}>
            <StarRating rating={rating} />
            <Text style={styles.voteCount}>{voteCount}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    flex: 1,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 4,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 12,
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
    lineHeight: 16
  },
  priceRow: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    gap: 2,
    alignItems: 'center',
    flex: 1,
  },
  price: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
    fontFamily: 'Montserrat',
    alignSelf: 'flex-start',
  },
  discount: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
    fontFamily: 'Montserrat',
  },
  ratingRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  voteCount: {
    fontSize: 10,
    color: '#777',
    fontWeight: '400',
    marginLeft: 2,
    fontFamily: 'Montserrat',
  },
  ratio: {
    color: '#FE735C',
    textDecorationLine: 'none',
    fontSize: 10,
    fontWeight: '400',
  }
});
