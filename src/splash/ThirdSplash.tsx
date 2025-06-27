import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes.ts';
import { GetStartedButton, PaginationDots, PrevButton, SkipButton, StepIndicator } from './SplashControl.tsx';


export default function ThirdSplash() {
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList,'SecondSplash'>>();


  return (
    <View style={[styles.container]}>
    <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
    <View style={styles.header}>
           <StepIndicator step={3} />
           <SkipButton onPress={() => navigation.navigate('HomePage')} />
    </View>
    
    <Image
        source={require('../images/splash3.png')}
        style={{ width: 300, height: 300, marginTop: 115, left:30, }}/>

     <Text style={styles.textCap}>Get Your Order</Text>
     <Text style={styles.text}> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
      
      <View style={styles.pagination}>
              <PaginationDots activeIndex={2} />
            </View>
      
      
      <View style={styles.footer}>
             <PrevButton  onPress={() => navigation.navigate('SecondSplash')} />
             <GetStartedButton  onPress={() => navigation.navigate('SignInPage')} />
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
    marginTop: 75,
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
    marginBottom: 50,
  },
    pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});
