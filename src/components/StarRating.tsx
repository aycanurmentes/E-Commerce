import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StarRatingProps {
  rating: number;      
  maxStars?: number;    
}
const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<Text key={i} style={styles.star}>★</Text>); 
    } else if (i - rating < 1) {
      stars.push(<Text key={i} style={styles.star}>⯨</Text>); 
    } else {
      stars.push(<Text key={i} style={[styles.star, styles.emptyStar]}>★</Text>); 
    }
  }
  return <View style={styles.container}>{stars}</View>;
};
export default StarRating;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 24,
    color: '#FFD700', 
    marginRight: 4,
  },
  emptyStar: {
    color: '#E0E0E0',
  },
});
