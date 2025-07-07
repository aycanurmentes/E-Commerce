import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface TopBarProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  containerStyle?: ViewStyle;
}
const TopBar: React.FC<TopBarProps> = ({ left, center, right, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.leftSide}>{left}</View>
      <View style={styles.center}>{center}</View>
      <View style={styles.rightSide}>{right}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '##F9F9F9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  leftSide: {
    width: 24,
    height:24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightSide:{
    alignItems: 'center',
    justifyContent: 'center',
    width:40,
    height:40
  }
});
export default TopBar;
