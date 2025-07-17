import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ReusableButton from './ReusableButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes';

type OrderProps = {
  price: string;
};

export default function OrderSection({ price }: OrderProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'HomePage'>>();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.rowDirection}>
          <View style={styles.rowDirection}>
            <Image source={require('../images/coupon.png')} />
            <Text style={styles.title}>Apply Coupons</Text>
          </View>
          <Text style={styles.redText}>Select</Text>
        </View>
        <View style={styles.separator} />
        <Text style={styles.title}>Order Payment Details</Text>
        <View style={styles.rowDirection}>
          <Text style={styles.text}>Order Amounts</Text>
          <Text style={styles.title}>₹{price}</Text>
        </View>
        <View style={styles.rowDirection}>
          <View style={styles.rowDirection}>
            <Text style={styles.text}>Convenience</Text>
            <Text style={styles.redText}>Know more</Text>
          </View>
          <Text style={styles.redText}>Apply Coupon</Text>
        </View>
        <View style={styles.rowDirection}>
          <Text>Delivery Fee</Text>
          <Text style={styles.redText}>Free</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.rowDirection}>
          <Text style={styles.title}>Order Total</Text>
          <Text style={styles.title}>₹{price}</Text>
        </View>
        <View style={styles.rowDirection}>
          <Text style={styles.text}>EMI Available</Text>
          <Text style={styles.redText}>Details</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.rowDirection}>
          <View style={styles.columnDirection}>
            <Text style={styles.title}>₹{price}</Text>
            <Text style={styles.redText}>View Details</Text>
          </View>
          <ReusableButton
            title="Proceed to Payment"
            backgroundColor="#F83758"
            textColor="#fff"
            borderRadius={5}
            fontSize={17}
            onPress={() => navigation.navigate('Shipping')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    margin: 22,
    bottom: -60
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  columnDirection: {
    flexDirection: 'column',
    gap: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
  redText: {
    color: '#F83758',
    fontSize: 14,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: '#BBBBBB',
    width: '95%',
    alignSelf: 'center',
    margin: 35
  },
  bottom: {
    backgroundColor: '#F8F8F8',
    width: '100%',
    height: 146,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 22,
    borderWidth: 1,
    borderColor: '#B7B7B7',
    bottom: -90
  }
});
