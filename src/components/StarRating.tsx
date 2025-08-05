import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
}

const { width: screenWidth } = Dimensions.get('window');

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5, size }) => {
  const starSize = size || Math.max(12, Math.min(16, screenWidth * 0.04));
  const starSpacing = Math.max(1, starSize * 0.1);

  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    const fill = Math.min(Math.max(rating - i, 0), 1);

    stars.push(
      <View key={i} style={[styles.starWrapper, { width: starSize, height: starSize, marginRight: i < maxStars - 1 ? starSpacing : 0 }]}>
        <Text style={[styles.star, styles.emptyStar, { fontSize: starSize, lineHeight: starSize }]}>★</Text>
        <View style={[styles.starOverlay, { width: `${fill * 100}%` }]}>
          <Text style={[styles.star, styles.filledStar, { fontSize: starSize, lineHeight: starSize }]}>★</Text>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  starWrapper: {
    position: 'relative',
  },
  star: {
    textAlign: 'center',
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
