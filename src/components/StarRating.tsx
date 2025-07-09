import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StarRatingProps {
  rating: number; 
  maxStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    const fill = Math.min(Math.max(rating - i, 0), 1); 

    stars.push(
      <View key={i} style={styles.starWrapper}>
        <Text style={[styles.star, styles.emptyStar]}>★</Text>
        <View style={[styles.starOverlay, { width: `${fill * 100}%` }]}>
          <Text style={[styles.star, styles.filledStar]}>★</Text>
        </View>
      </View>
    );
  }

  return <View style={styles.container}>{stars}</View>;
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  starWrapper: {
    position: 'relative',
    width: 20,
    height: 20,
    marginRight: 0,
   
  },
  star: {
    fontSize: 18,
    lineHeight: 20,
  },
  emptyStar: {
    color: '#DDD',
  },
  filledStar: {
    color: '#EDB310',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  starOverlay: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
  },
});
