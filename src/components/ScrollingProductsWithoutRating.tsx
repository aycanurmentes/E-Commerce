import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

interface WithoutRatingProps {
  image: any;
  title: string;
  price: string;
  discount: string;
  ratio: string;
  
}

const products: WithoutRatingProps[] = [
  {
    image: require('../images/scrollingp3.png'),
    title: 'IWC Schaffhausen 2021 Pilots Watch SIHH 2019 44mm',
    price: '₹650',
    discount: '₹1599',
    ratio: '  60%Off',
  },
  {
    image: require('../images/scrollingp4.png'),
    title: 'Labbin White Sneakers For Men and Female',
    price: '₹650',
    discount: '₹1250',
    ratio: '  70%Off',
  },
  {
    image: require('../images/scrollingp3.png'),
    title: 'IWC Schaffhausen 2021 Pilots Watch SIHH 2019 44mm',
    price: '₹650',
    discount: '₹1599',
    ratio: '  60%Off',
  },
  {
    image: require('../images/scrollingp4.png'),
    title: 'Labbin White Sneakers For Men and Female',
    price: '₹650',
    discount: '₹1250',
    ratio: '  50%Off',
  },
  {
    image: require('../images/scrollingp3.png'),
    title: 'IWC Schaffhausen 2021 Pilots Watch SIHH 2019 44mm',
    price: '₹650',
    discount: '₹1599',
    ratio: '  60%Off',
  },
];

const ProductCard: React.FC<WithoutRatingProps> = ({ image, title, price, discount, ratio }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text numberOfLines={2} style={styles.title}>{title}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>{price}</Text>
          {discount && <Text style={styles.discount}>{discount}
            <Text style={styles.ratio}>
            {ratio}</Text>
            </Text>}
        </View>
      </View>
    </View>
  );
};

const ScrollingProductsWithoutRating = () => {
  return (
    <FlatList
      horizontal
      data={products}
      renderItem={({ item }) => (
        <ProductCard
          image={item.image}
          title={item.title}
          price={item.price}
          discount={item.discount}
          ratio={item.ratio}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
    />
  );
};

export default ScrollingProductsWithoutRating;

const styles = StyleSheet.create({
  card: {
    flex:1,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    width: 142,
    height:186,
    marginTop:9,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    flex:1,
    padding: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Montserrat',
    color: '#000',
  },
  priceRow: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 6,
    marginTop: 4,
  },
  price: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    fontFamily: 'Montserrat',
  },
  discount: {
    fontSize: 12,
    fontWeight:'300',
    color: '#808488',
    textDecorationLine: 'line-through',
    fontFamily: 'Montserrat',
  },
  ratio:{
    color:'#FE735C',
     textDecorationLine: 'none',
     fontSize:10,
     fontWeight:'400',
  }
});
