import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ReusableButton from '../components/ReusableButton';
import { RootStackParamList } from '../navigations/NavigationTypes.ts';

export default function GetStarted() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'SecondSplash'>>();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/getStarted.png')}
        style={styles.background}
        resizeMode='cover'>
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.cap}>You want </Text>
            <Text style={styles.cap}>Authentic, here </Text>
            <Text style={styles.cap}>you go!</Text>
            <Text style={styles.txt}> Find it here,buy it now!</Text>
          </View>
          <ReusableButton
            title="Get Started"
            titleStyle={styles.title}
            buttonStyle={styles.button}
            onPress={() => navigation.replace('TabNavigation')} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 24,
    paddingBottom: 60,
  },
  content: {
    marginBottom: 40,
  },
  cap: {
    fontSize: 34,
    fontWeight: 600,
    color: '#fff',
    fontFamily: 'Montserrat',
    textAlign: 'center',
  },
  txt: {
    fontSize: 14,
    color: '#F2F2F2',
    textAlign: 'center',
    fontWeight: 400,
    marginTop: 12,
    fontFamily: 'Montserrat',
  },
  title: {
    fontSize: 23,
    fontWeight: 600,
    fontFamily: 'Montserrat',
  },
  button: {
    padding: 21,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
