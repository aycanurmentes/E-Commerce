import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes';
import { Input, FormButton, SocialButtons } from './Forms/AuthInput';
import { Icon } from '@rneui/themed';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const socialIcons = [
    { name: 'google', source: require('../images/google.png') },
    { name: 'apple', source: require('../images/apple.png') },
    { name: 'facebook', source: require('../images/facebook.png') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back!</Text>

      
      
      <Input placeholder="Username or Email" value={email} onChangeText={setEmail} leftIcon={{ type: 'font-awesome', name: 'user', color: '#aaa' }} style={{ marginTop: 30 }}/>
      <Input placeholder="Password" value={password} onChangeText={setPassword} style={{ marginTop: 30 }} />

      <Text style={styles.forget} > Forgot Password?</Text>

      <FormButton title="Login" onPress={() => navigation.navigate('SignUpPage')} />

      <Text style={styles.or}>- OR Continue with -</Text>
      <SocialButtons icons={socialIcons} />

      <Text style={styles.footer}>
        Create An Account <Text style={styles.link}>Sign Up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    paddingTop: 60,
    backgroundColor:'#ffff'
},
  header: { 
    fontSize: 34,
    fontWeight: '700', 
    marginLeft: 32, 
    fontFamily: 'Montserrat', 
    width:185,
    height:83,
    flexWrap:'wrap',
    flexShrink:0,
},
  notice: { 
    textAlign: 'center', 
    marginTop: 40, 
    marginHorizontal: 20, 
    color: '#575757'
 },
 icon: {
    marginRight: 10,
  },
  
  or: { 
    textAlign: 'center', 
    marginTop:85,
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
   forget:{
    color:'#F83758',
    top:79,
    marginRight:49,
    textAlign:'right',
    fontFamily: 'Montserrat',
    fontSize:12,
  },
});
