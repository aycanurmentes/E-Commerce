import { Image } from '@rneui/base';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  onCartPress?: () => void;
  onBuyPress?: () => void;
}

const CartAndBuyButtons: React.FC<Props> = ({ onCartPress, onBuyPress }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.blueButton} onPress={onCartPress}>
          <TouchableOpacity style={styles.circleBlueButton}>
            <Image source={require('../images/basketButton.png')} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Go to cart</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.greenButton} onPress={onBuyPress}>
          <TouchableOpacity style={styles.circleGreenButton}>
            <Image source={require('../images/click.png')} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartAndBuyButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 30,
    padding: 16
  },
  blueButton: {
    backgroundColor: '#3F92FF',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    width: 136,
    height: 36
  },
  greenButton: {
    backgroundColor: '#71F9A9',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    width: 136,
    height: 36
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  circleBlueButton: {
    //backgroundColor: '#0B3689',
    backgroundColor: '#3F92FF',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: -18
  },
  circleGreenButton: {
    // backgroundColor: '#31B769',
    backgroundColor: '#71F9A9',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: -18
  },
  image: {
    width: 24,
    height: 24
  }
});
