import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes';
import { Input, FormButton, SocialButtons } from './Forms/AuthInput';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const socialIcons = [
    { name: 'google', source: require('../images/google.png') },
    { name: 'apple', source: require('../images/apple.png') },
    { name: 'facebook', source: require('../images/facebook.png') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create an Account</Text>

      <Input placeholder="Username or Email" value={email} onChangeText={setEmail} style={{ marginTop: 30 }}/>
      <Input placeholder="Password" value={password} onChangeText={setPassword} style={{ marginTop: 30 }} />
      <Input placeholder="Confirm Password" value={password} onChangeText={setPassword} style={{ marginTop: 30 }} />

      <Text style={styles.info}>
        By clicking the <Text style={styles.link}>Register</Text> button, you agree to the public offer.
      </Text>

      <FormButton title="Create Account" onPress={() => navigation.navigate('ForgotPassword')} />

      <Text style={styles.or}>- OR Continue with -</Text>
      <SocialButtons icons={socialIcons} />

      <Text style={styles.footer}>
        Already have an account? <Text style={styles.link}>Login</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    paddingTop: 60
},
  header: { 
    fontSize: 32,
    fontWeight: '700', 
    marginLeft: 32, 
    fontFamily: 'Montserrat', 
    width:185,
    height:83,
    flexWrap:'wrap',
    flexShrink:0,
},
  info: { 
    textAlign: 'left', 
    width:258,
    fontSize:12,
    fontWeight:400,
    marginTop: 15, 
    marginHorizontal: 40, 
    color: '#575757',

 },
  or: { 
    textAlign: 'center', 
    marginTop:55,
    color: '#575757' 
},
  footer: { 
    textAlign: 'center', 
    marginTop: 25, 
    color: '#575757' 
},
  link: { 
    color: '#F83758', 
    textDecorationLine: 'underline'
 },
});
