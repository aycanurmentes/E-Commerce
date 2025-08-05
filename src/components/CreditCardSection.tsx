import React from 'react';
import { Text, Image, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native';

interface creditCardProps {
  imageSource: ImageSourcePropType;
  text: string;
  onPress?: () => void;
  isSelected?: boolean;
}

const CreditCardSection: React.FC<creditCardProps> = ({ 
  imageSource, 
  text, 
  onPress, 
  isSelected = false 
}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.container,
        isSelected && styles.selectedContainer
      ]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
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
    marginHorizontal:0,
    marginVertical:8,
    borderRadius:8,
    padding:20,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedContainer: {
    borderColor: '#F83758',
    backgroundColor: '#FFF5F5',
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
