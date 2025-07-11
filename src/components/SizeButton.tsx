import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const sizes = ['6 UK', '7 UK', '8 UK', '9 UK', '10 UK'];

const SizeButtons = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      {sizes.map((title, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, index === activeIndex && styles.activeButton]}
          onPress={() => setActiveIndex(index)} >
          <Text style={[styles.text, index === activeIndex && styles.activeText]}>
            {title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SizeButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    padding: 12,
  },
  button: {
    borderWidth: 2,
    borderColor: '#FA7189',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 7,
  },
  activeButton: {
    backgroundColor: '#FA7189',
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '600',
    color: '#FA7189',
  },
  activeText: {
    color: '#fff',
  },
});
