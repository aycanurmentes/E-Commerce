import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from '@rneui/base';

const SpecialOfferComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/offer.png')} style={styles.image} />
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Special Offers</Text>
          <Text style={styles.emoji}> 😱 </Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>We make sure you get the</Text>
          <Text style={styles.subtitle}>offer you need at best prices</Text>
        </View>
      </View>
    </View>
  );
};

export default SpecialOfferComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 6,
    gap: 10,
    right: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,
    marginBottom: 15,
  },
  image: {
    width: 75,
    height: 60,
    resizeMode: 'contain',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  emoji: {
    fontSize: 16,
  },
  subtitleContainer: {
    gap: 4,
    flexDirection: 'column',
    marginTop: 9,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Montserrat',
    color: '#000',
  },
});
