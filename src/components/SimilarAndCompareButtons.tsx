import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

interface Props {
  onComparePress?: () => void;
  onSimilarPress?: () => void;
}

const SimilarAndCompareButtons: React.FC<Props> = ({ onComparePress, onSimilarPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onSimilarPress}>
        <Image source={require('../images/eye.png')} />
        <Text style={styles.buttonText}>View Similar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onComparePress}>
        <Image source={require('../images/compare.png')} />
        <Text style={styles.buttonText}>Add to Compare</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SimilarAndCompareButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
    paddingHorizontal: 6,
    marginTop: 8,
    marginRight: 30,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  buttonText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
});
