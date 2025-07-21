import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { InputForms } from '../components/InputForms';
import ReusableButton from '../components/ReusableButton';
import { SocialButtons } from '../components/SocialButtons';
import { RootStackParamList } from '../navigations/NavigationTypes';
import styles from './AuthStyles';

export default function SignInPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const socialIcons = [
    { name: 'google', source: require('../images/google.png') },
    { name: 'apple', source: require('../images/apple.png') },
    { name: 'facebook', source: require('../images/facebook.png') },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base1}>
        <View style={styles.textToInput}>
          <View>
            <Text style={styles.header}>Welcome</Text>
            <Text style={styles.header}>Back!</Text>
          </View>
          <InputForms
            placeholder="Username or Email"
            value={email}
            leftIcon={<Image source={require('../images/user.png')} style={styles.inputImage} />}
            onChangeText={setEmail} />
          <InputForms
            placeholder="Password"
            value={password}
            leftIcon={<Image source={require('../images/passwordLock.png')} style={styles.inputPassImage} />}
            onChangeText={setPassword}
            bottomRightButtonText='Forgot Password?' />
        </View>
        <ReusableButton
          title="Login"
          fontSize={20}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('SignUpPage')} />
      </View>
      <View style={styles.base2}>
        <View style={styles.social}>
          <Text style={styles.or}>- OR Continue with -</Text>
          <SocialButtons icons={socialIcons} />
          <Text style={styles.footer}>
            Create An Account <Text style={styles.link}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

