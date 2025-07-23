import { StyleSheet, View } from 'react-native'
import React from 'react'

type PaginationDotsProps = {
  activeIndex: number;
  total?: number;
};

const PaginationDots = ({ activeIndex, total = 3 }: PaginationDotsProps) => {
  const dots = Array.from({ length: total }, (_, i) => (
    <View key={i} style={[styles.dot, i === activeIndex && styles.activeDot]} />
  ));
  return <View style={styles.pagination}>{dots}</View>;
};

export default PaginationDots;

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C4C4C4',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
    width: 40,
    height: 8,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
})