import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const InfoButton = ({
  imageSource,
  label,
}: {
  imageSource: any;
  label: string;
}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={imageSource} style={styles.icon} resizeMode="contain" />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function InfoButtonGroup() {
  return (
    <View style={styles.container}>
      <InfoButton imageSource={require('../images/location.png')} label="Nearest Store" />
      <InfoButton imageSource={require('../images/lock.png')} label="VIP" />
      <InfoButton imageSource={require('../images/return.png')} label="Return policy" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#828282',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#F9F9F9',
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: '#777',
  },
  label: {
    marginLeft: 6,
    color: '#828282',
    fontSize: 10,
    fontWeight: '500'
  },
});
