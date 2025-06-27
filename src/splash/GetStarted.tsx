import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes.ts';
import { Button } from '@rneui/base';
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
            <Button
            title="Get Started"
            type="clear"
            onPress={() => navigation.navigate('HomePage')}
            titleStyle={styles.nextBtnText}/>
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
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Montserrat',
    lineHeight: 40,
    textAlign:'center',
  },
  txt: {
    fontSize: 14,
    color: '#F2F2F2',
    textAlign:'center',
    fontWeight: '400',
    marginTop: 12,
    fontFamily: 'Montserrat',

  },
  nextBtnText: {
    width:279,
    height:55,
    fontSize: 23,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#F83758',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    overflow: 'hidden',
    textAlign: 'center',
  },
});
