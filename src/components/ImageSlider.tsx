import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent
} from 'react-native';

const { width } = Dimensions.get('window');
interface SlideData {
  image: any;
  title: string;
  subtitle: string;
  buttonText: string;
  onPress: () => void;
}
interface SliderProps {
  slides: SlideData[];
}
const ImageSlider: React.FC<SliderProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollRef = useRef<ScrollView>(null);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };
  return (
    <View style={styles.wrapper}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {slides.map((slide, index) => (
          <ImageBackground
            key={index}
            source={slide.image}
            style={styles.slide}
            imageStyle={styles.image}
            resizeMode="cover">
            <View style={styles.overlay}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.subtitle}>{slide.subtitle}</Text>
              <TouchableOpacity style={styles.button} onPress={slide.onPress}>
                <Text style={styles.buttonText}>{slide.buttonText}</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
      <View style={styles.dots}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, activeIndex === i && styles.activeDot]}/>
        ))}
      </View>
    </View>
  );
};
export default ImageSlider;
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 0,
  },
  slide: {
    width: width * 0.9,
    height: 200,
    marginHorizontal: width * 0.05,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 16,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
    fontFamily: 'Montserrat',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    fontWeight:'400',
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'Montserrat',
  },
  button: {
    backgroundColor: 'clear',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize:12,
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
  dots: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 4,
    backgroundColor: '#DEDBDB',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFA3B3',
  },
});
