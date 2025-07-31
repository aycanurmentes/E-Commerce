import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const sizes = ['6 UK', '7 UK', '8 UK', '9 UK', '10 UK'];

const SizeButtons = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.selectedText}>Size: {sizes[activeIndex]}</Text>
      <View style={styles.rowCont}>
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
    </View>
  );
};

export default SizeButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 8,
    padding: 12,
  },
  selectedText: {
    fontSize: 14,
    fontWeight: '600',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  rowCont: {
    flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 8,
  justifyContent: 'flex-start',
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
