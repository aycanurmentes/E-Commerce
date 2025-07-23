import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from '@rneui/base';

const SponsoredContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sponsored</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../images/sponsored.png')} style={styles.image} />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.subtitle}>up to 50% Off</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> → </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SponsoredContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 16,
    marginBottom: 34
  },
  imageContainer: {
    width: '95%',
    height: 350,
    left: 10,
    top: 12,
    overflow: 'hidden',
    alignSelf: 'center',
    borderRadius: 8
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Montserrat',
    color: '#000',
    left: 30,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Montserrat',
    color: '#000',
    left: 20
  },
  button: {
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
    fontFamily: 'Montserrat',
    fontSize: 14,
  },
});
