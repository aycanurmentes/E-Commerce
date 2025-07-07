import { StyleSheet, Text, View, ViewStyle, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

interface SliderProps {
  image: any;
  title: string;
  description: string;
  style?: ViewStyle;
  onPress: () => void;
  buttonLabel: string;
}
const Slider: React.FC<SliderProps> = ({
  image,
  title,
  description,
  style,
  onPress,
  buttonLabel,
}) => {
  return (
    <ImageBackground source={image} style={styles.background} imageStyle={styles.image}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{description}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    width: '100%',
    aspectRatio: 1.6, 
    justifyContent: 'flex-end',
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 16,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#F83758',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
