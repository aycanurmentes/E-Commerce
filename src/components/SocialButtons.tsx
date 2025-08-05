import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from '@rneui/base';

interface IconButtonProps {
  name: 'google' | 'facebook' | 'apple';
  source: any;
}

interface SocialButtonsProps {
  icons: IconButtonProps[];
  onSocialPress: (platform: 'google' | 'facebook' | 'apple') => void;
}

export const SocialButtons: React.FC<SocialButtonsProps> = ({ icons, onSocialPress }) => (
  <View style={styles.iconContainer}>
    {icons.map((icon, i) => (
      <TouchableOpacity
        key={i}
        style={styles.iconWrapper}
        onPress={() => onSocialPress(icon.name)}
      >
        <Image source={icon.source} style={styles.iconImage} resizeMode="contain" />
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
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
