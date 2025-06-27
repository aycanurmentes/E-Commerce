import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes.ts';
import { NextButton, PaginationDots, SkipButton, StepIndicator } from './SplashControl.tsx';

export default function FirstSplash() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList,'FirstSplash'>>();

  return (
    <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
      
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

    <View style={styles.header}>
       <StepIndicator step={1} />
       <SkipButton onPress={() => navigation.navigate('HomePage')} />
    </View>

      <Image
  source={require('../images/splash1.png')}
  style={{ width: 300, height: 300, marginTop: 117, marginLeft:37 }}/>
      <Text style={styles.textCap}>Choose Products</Text>
      <Text style={styles.text} > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
      
      
      <View style={styles.pagination}>
        <PaginationDots activeIndex={0} />
      </View>

           
       <View style={styles.footer}>
      <NextButton  onPress={() => navigation.navigate('SecondSplash')} />
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCap: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '800',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    color: '#A8A8A9',
    fontWeight: '600',
    fontFamily: 'Montserrat',
    lineHeight: 24,
    marginTop: 10,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footer: {
  marginRight:-300,
  bottom:-120,
  },
  
 
});
