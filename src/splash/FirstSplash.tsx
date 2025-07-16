import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PaginationDots from '../components/PaginationDots.tsx';
import ReusableButton from '../components/ReusableButton';
import { StepIndicator } from '../components/StepIndicator.tsx';
import { RootStackParamList } from '../navigations/NavigationTypes.ts';
import styles from './SplashStyles.ts';

export default function FirstSplash() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'FirstSplash'>>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topRow}>
        <StepIndicator step={1} />
        <ReusableButton
          title="Skip"
          backgroundColor="clear"
          textColor="#000"
          fontSize={17}
          onPress={() => navigation.replace('Main')} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../images/splash1.png')}
          style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Choose Products</Text>
        <Text style={styles.subtitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit.
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomRow}>
          <ReusableButton
            backgroundColor='clear'
            title=''
            onPress={() => navigation.navigate('FirstSplash')} />
          <View style={styles.pagination}>
            <PaginationDots activeIndex={0} />
          </View>
          <ReusableButton
            title="Next"
            backgroundColor='clear'
            textColor="#F83758"
            fontSize={17}
            onPress={() => navigation.navigate('SecondSplash')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

