import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import {InputForms} from '../components/InputForms';
import { SocialButtons } from '../components/SocialButtons';
import ReusableButton from '../components/ReusableButton';
import styles from '../UserInformations/AuthSyles';

export default function SignUpPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const socialIcons = [
    { name: 'google', source: require('../images/google.png') },
    { name: 'apple', source: require('../images/apple.png') },
    { name: 'facebook', source: require('../images/facebook.png') }, ];
  return (
  <SafeAreaView style={styles.container}>
   <View style={styles.base1}>
        <View style={{
          gap: 36
        }}>
          <View>
            <Text style={styles.header}>Create an</Text>
            <Text style={styles.header}>account</Text>
          </View>
    <InputForms 
    placeholder="Username or Email" 
    value={email} 
    onChangeText={setEmail} 
    />
    <InputForms 
    placeholder="Password" 
    value={password} 
    onChangeText={setPassword} 
    />
    <InputForms 
    placeholder="Confirm Password" 
    value={password} 
    onChangeText={setPassword} 
    />
   </View>
   <View style={styless.bottomTxt}>
    <Text style={styless.info}>
      By clicking the 
      <Text style={styles.link}>
      Register
      </Text> 
      button, you agree to the public offer.
    </Text>
    </View>
      <ReusableButton 
    title="Create Account" 
    buttonStyle={styles.button}
    onPress={() => navigation.navigate('ForgotPassword')} />
    </View>
  <View style={styles.base2}>
     <View style={styles.social}> 
    <Text style={styles.or}>- OR Continue with -</Text>
    <SocialButtons icons={socialIcons} />
    <Text style={styles.footer}>
     Already have an account?<Text style={styles.link}>Login</Text>
    </Text>
    </View>
    </View>
    </SafeAreaView>
  );
}
const styless = StyleSheet.create({
 
  info: { 
    fontSize:12,
    fontWeight:400,
    color: '#575757',
 },
 bottomTxt:{
    marginTop:-32,
    alignItems: 'flex-end'
 }

});
