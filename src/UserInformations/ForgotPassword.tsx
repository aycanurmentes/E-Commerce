import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { InputForms } from '../components/InputForms';
import ReusableButton from '../components/ReusableButton';
import styles from './AuthSyles';

export default function SignUpPage() {
  const [email, setEmail] = useState<string>('');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base1}>
        <View style={styles.textToInput}>
          <View>
            <Text style={styles.header}>Forgot Password?</Text>
          </View>
          <InputForms
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail} />
          <View style={styless.bottomTxt}>
            <Text style={styless.info}>
              * <Text style={styless.link}>We will send you a message to set or reset your new password</Text>
            </Text>
          </View>
          <ReusableButton
            title="Submit"
            buttonStyle={styles.button}
            onPress={() => navigation.navigate('GetStarted')} />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styless = StyleSheet.create({
  info: {
    color: '#F83758',
    textAlign: 'left',
    width: 282,
    height: 48,
    flexShrink: 0,
    fontSize: 12,
    fontWeight: 400,
    marginTop: 15,
    marginHorizontal: 40,
  },
  bottomTxt: {
    marginTop: -32,
    alignItems: 'flex-end'
  },
  link: {
    color: '#676767'
  }
});
