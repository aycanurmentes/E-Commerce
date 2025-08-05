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
  NativeScrollEvent,
  ViewStyle,
  TextStyle
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes';

const { width } = Dimensions.get('window');


interface SlideData {
  image: any;
  title: string;
  subtitle: string;
  subtitle2: string;
  buttonText: string;
  onPress: () => void;
}

interface SliderProps {
  slides: SlideData[];
  sliderHeight?: number;
  activeDotColor?: string;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  showOverlay?: boolean;
}

const ImageSlider: React.FC<SliderProps> = ({
  slides,
  sliderHeight,
  activeDotColor,
  buttonStyle,
  buttonTextStyle,
  showOverlay = true,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.wrapper}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {slides.map((slide, index) => (
          <ImageBackground
            key={index}
            source={slide.image}
            style={[styles.slide, { height: sliderHeight ?? 200 }]}
            imageStyle={styles.image}
            resizeMode="cover">
            {showOverlay && (
              <View style={styles.overlay}>
                <Text style={styles.title}>{slide.title}</Text>
                <Text style={styles.subtitle}>{slide.subtitle}</Text>
                <Text style={styles.subtitle2}>{slide.subtitle2}</Text>
                <TouchableOpacity
                  style={[styles.button, buttonStyle]}
                  onPress={() =>
                    navigation.navigate('TabNavigation' as any, { screen: 'Search' } as any)
                  }>
                  <Text style={[styles.buttonText, buttonTextStyle]}>
                    {slide.buttonText}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </ImageBackground>
        ))}
      </ScrollView>
      <View style={styles.dots}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              activeIndex === i && {
                backgroundColor: activeDotColor ?? '#FFA3B3'
              }
            ]}
          />
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
    marginBottom: 15,
  },
  scrollView: {
    flexGrow: 0,
  },
  slide: {
    width: width * 0.9,
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
    fontWeight: '400',
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'Montserrat',
  },
  subtitle2: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
    marginBottom: 13,
    fontFamily: 'Montserrat',
  },
  button: {
    backgroundColor: 'clear',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
  dots: {
    flexDirection: 'row',
    marginTop: 18,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 4,
    backgroundColor: '#DEDBDB',
    marginHorizontal: 4,
  },
});
