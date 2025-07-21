import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface creditCardProps {
  imageSource: ImageSourcePropType;
  text: string;
}

const CreditCardSection: React.FC<creditCardProps> = ({ imageSource, text }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default CreditCardSection;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingVertical: 8,
    backgroundColor:'#F4F4F4',
    marginHorizontal:25,
    marginVertical:18,
    borderRadius:8,
    padding:25,
  },
  image: {
    width: 45,
    height: 45,
    marginRight: 12,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
