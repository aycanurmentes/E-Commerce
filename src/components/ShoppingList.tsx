import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import StarRating from './StarRating';

//TODO:Price ortaya gelmedi onu ayarla, header navigation kısmı eksik.
type ProductProps = {
  title: string;
  image: any;
  variations: string[];
  rating: number;
  price: number;
  originalPrice: number;
  discount: string;
};

export default function ShoppingList({
  title,
  image,
  variations,
  rating,
  price,
  originalPrice,
  discount,
}: ProductProps) {
  return (
    <View style={styles.container}>
      <View style={styles.cardTop}>
        <Image source={image} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.variations}>
            <Text>Variations:</Text>
            {variations.map((variation, index) => (
              <Text key={index} style={styles.colorText}>{variation}</Text>
            ))}
          </View>
          <View style={styles.starRating}>
            <StarRating rating={rating} />
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.price}>${price.toFixed(2)}</Text>
            <View style={styles.priceRight}>
              <View style={styles.discountRow}>
                <Text style={styles.discount}>{discount}</Text>
                <Text style={styles.strike}>${originalPrice.toFixed(2)}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.total}>
        <Text style={styles.totalPrice}>Total Order (1):</Text>
        <Text style={styles.totalPrice}>${price.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 22,
    marginTop: 20,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardTop: {
    flexDirection: 'row',
    padding: 22,
  },
  card: {
    flexDirection: 'row',
    margin: 22,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
  },
  image: {
    width: 168,
    height: 165,
    borderRadius: 6,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  starRating: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  variations: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
    alignItems: 'center',
  },
  colorText: {
    fontSize: 10,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: '#0E0808',
    paddingHorizontal: 6,
    borderRadius: 2,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#CACACA',
    width: 84,
    height: 29,
  },
  discount: {
    fontSize: 10,
    color: '#EB3030',
    fontWeight: '500'
  },
  discountRow: {
    flexDirection: 'column'
  },
  strike: {
    fontSize: 12,
    fontWeight: '500',
    textDecorationLine: 'line-through',
    color: '#A7A7A7',
  },
  priceRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    width: 360,
    height: 0.5
  },
  separator: {
    height: 1,
    backgroundColor: '#BBBBBB',
    width: '90%',
    marginLeft: 19
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  totalPrice: {
    fontSize: 12,
    fontWeight: '600'
  }
});
