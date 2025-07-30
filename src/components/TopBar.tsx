import React from 'react';
import { View, StyleSheet, ViewStyle, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';

type TopBarProps = {
  leftIcon?: ImageSourcePropType;
  onLeftPress?: () => void;
  rightIcon?: ImageSourcePropType;
  onRightPress?: () => void;
  centerText?: string;
  centerImage?: ImageSourcePropType;
  centerTextColor?: string;
  containerStyle?: ViewStyle;
};

const TopBar: React.FC<TopBarProps> = ({
  leftIcon,
  onLeftPress,
  rightIcon,
  onRightPress,
  centerText,
  centerImage,
  centerTextColor = '#000',
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.side}>
        {leftIcon && (
          <TouchableOpacity onPress={onLeftPress}>
            <Image source={leftIcon} style={styles.leftImage} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.center}>
        {centerImage && <Image source={centerImage} style={styles.centerImage} />}
        {centerText && (
          <Text style={[styles.centerText, { color: centerTextColor }]}>
            {centerText}
          </Text>
        )}
      </View>
      <View style={styles.side}>
        {rightIcon && (
          <TouchableOpacity onPress={onRightPress}>
            <Image source={rightIcon} style={styles.rightImage} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  side: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftImage: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
  },
  rightImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  centerImage: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginRight: 8,
  },
  centerText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'System',
  },
});

export default TopBar;
