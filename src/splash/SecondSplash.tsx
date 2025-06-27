/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SkipButton, StepIndicator,NextButton,PrevButton, PaginationDots } from './SplashControl.tsx';


export default function SecondSplash() {
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'SecondSplash'>>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
       <StepIndicator step={2} />
       <SkipButton onPress={() => navigation.navigate('HomePage')} />
      </View>

      
      <Image
        source={require('../images/splash2.png')}
        style={{ width: 300, height: 300, marginTop: 125, left:30, alignSelf: 'center' }}
      />

      
      <Text style={styles.textCap}>Make Payment</Text>
      <Text style={styles.text}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit.
      </Text>

      
    <View style={styles.pagination}>
        <PaginationDots activeIndex={1} />
      </View>

     
      <View style={styles.footer}>
       <PrevButton  onPress={() => navigation.navigate('FirstSplash')} />
       <NextButton  onPress={() => navigation.navigate('ThirdSplash')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 10,
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
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
   pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
 
});
