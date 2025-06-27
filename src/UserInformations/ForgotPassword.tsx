import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/NavigationTypes';
import { Input, FormButton} from './Forms/AuthInput';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forgot Password?</Text>

      <Input placeholder="Enter your email address" value={email} onChangeText={setEmail} style={{ marginTop: 30 }}/>
     
      <Text style={styles.info}>
        * <Text style={styles.link}>We will send you a message to set or reset your new password</Text>
      </Text>

      <FormButton title="Submit" onPress={() => navigation.navigate('GetStarted')} />

    
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
   color: '#F83758',
   textAlign: 'left', 
    width:282,
    height:48,
    flexShrink:0,
    fontSize:12,
    fontWeight:400,
    marginTop: 15, 
    marginHorizontal: 40,  

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
    
    color: '#676767',
 },
});
