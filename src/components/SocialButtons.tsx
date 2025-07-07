import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from '@rneui/base';

export const SocialButtons = ({ icons }) => (
  <View style={styles.iconContainer}>
    {icons.map((icon, i) => (
      <TouchableOpacity key={i} style={styles.iconWrapper}>
        <Image source={icon.source} style={styles.iconImage} resizeMode="contain" />
      </TouchableOpacity>
    ))}
  </View>
);
export const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  iconWrapper: {
    width: 49,
    height: 49,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ff5e78',
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff5f8',
  },
  iconImage: {
    width: 24,
    height: 24,
  },
});
