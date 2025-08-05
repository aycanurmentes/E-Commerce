import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import { InputForms } from '../components/InputForms';
import ReusableButton from '../components/ReusableButton';
import { SocialButtons } from '../components/SocialButtons';
import styles from './AuthStyles';
import { RootStackParamList } from '../navigations/NavigationTypes';
import { FirebaseAuthService, AuthError } from '../services/firebaseAuth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

export default function SignInPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const passwordRef = useRef<TextInput>(null);

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '433633667752-fsa7mj49b4iuu3b22pchmlc49u6q0sl6.apps.googleusercontent.com', //env içinde yaz
    });
  }, []);

  const socialIcons = [
    { name: 'google', source: require('../images/google.png') },
    { name: 'apple', source: require('../images/apple.png') },
    { name: 'facebook', source: require('../images/facebook.png') },
  ];

  const validate = (values: { email: string; password: string }) => {
    const errors: Partial<typeof values> = {};
    const turkishChars = /[çğıöşüÇĞIİÖŞÜ]/;
    if (turkishChars.test(values.email)) {
      errors.email = 'Do not use Turkish characters in email address!';
      return errors;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(values.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }
    return errors;
  };

  const handleLogin = async (values: { email: string; password: string }) => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      await FirebaseAuthService.signInWithEmail(values.email, values.password);

      Toast.show({
        type: 'success',
        text1: 'Success!',
        text2: 'Login successful.',
        position: 'top',
      });

      setTimeout(() => {
        navigation.navigate('GetStarted');
      }, 500);
    } catch (error: any) {
      const authError = error as AuthError;
      Toast.show({
        type: 'error',
        text1: 'Login Error',
        text2: authError.message,
        position: 'top',
      });
    } finally {
      setIsLoading(false);
    }
  };

 const handleSocialLogin = async (platform: 'google' | 'facebook' | 'apple') => {
  if (platform === 'google') {
  try {
    await GoogleSignin.hasPlayServices();
    const { idToken } = await GoogleSignin.signIn();

    if (!idToken) throw new Error('No ID token returned from Google');

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);

    Toast.show({
      type: 'success',
      text1: 'Google Login Successful',
      position: 'top',
    });

    navigation.navigate('TabNavigation');
  } catch (error: any) {
    Toast.show({
      type: 'error',
      text1: 'Google Sign-In Error',
      text2: error.message || 'An error occurred during Google login.',
      position: 'top',
    });
    }
  } else if (platform === 'facebook') {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        throw new Error('Facebook login was cancelled');
      }

      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw new Error('Failed to get Facebook access token');
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      await auth().signInWithCredential(facebookCredential);

      Toast.show({
        type: 'success',
        text1: 'Facebook Login Successful',
        position: 'top',
      });

      navigation.navigate('TabNavigation');
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Facebook Login Error',
        text2: error.message,
        position: 'top',
      });
    }
  } else {
    Toast.show({
      type: 'info',
      text1: `Login with ${platform.charAt(0).toUpperCase() + platform.slice(1)}`,
      text2: 'Not implemented yet.',
      position: 'top',
    });
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={validate}
          onSubmit={handleLogin}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldTouched,
          }) => (
            <>
              <View style={styles.base1}>
                <View style={styles.textToInput}>
                  <View style={styles.headerWrapper}>
                    <Text style={styles.header}>Welcome</Text>
                    <Text style={styles.header}>Back!</Text>
                  </View>

                  <InputForms
                    placeholder="Username or Email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => {
                      handleBlur('email');
                      setFieldTouched('email');
                    }}
                    errorText={touched.email && errors.email ? errors.email : ''}
                    hasError={touched.email && !!errors.email}
                    returnKeyType="next"
                    onSubmitEditing={() => passwordRef.current?.focus()}
                    editable={!isLoading}
                    leftIcon={
                      <Image source={require('../images/user.png')} style={styles.inputImage} />
                    }
                  />

                  <InputForms
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={() => {
                      handleBlur('password');
                      setFieldTouched('password');
                    }}
                    errorText={touched.password && errors.password ? errors.password : ''}
                    hasError={touched.password && !!errors.password}
                    returnKeyType="done"
                    onSubmitEditing={() => handleSubmit()}
                    editable={!isLoading}
                    leftIcon={
                      <Image
                        source={require('../images/passwordLock.png')}
                        style={styles.inputPassImage}
                      />
                    }
                    rightIcon={
                      <TouchableOpacity onPress={togglePasswordVisibility} disabled={isLoading}>
                        <Image
                          source={require('../images/eye.png')}
                          style={styles.inputImage}
                        />
                      </TouchableOpacity>
                    }
                    bottomRightButtonText="Forgot Password?"
                    onBottomRightPress={() => navigation.navigate('ForgotPassword')}
                  />
                </View>

                <ReusableButton
                  title={isLoading ? 'Signing In...' : 'Sign In'}
                  fontSize={20}
                  buttonStyle={styles.button}
                  onPress={handleSubmit}
                  disabled={isLoading}
                />
              </View>
            </>
          )}
        </Formik>

        <View style={styles.base2}>
          <View style={styles.social}>
            <Text style={styles.or}>- OR CONTINUE WITH -</Text>
            <SocialButtons icons={socialIcons} onSocialPress={handleSocialLogin} />
            <Text style={styles.footer}>
              Create an account{' '}
              <Text style={styles.link} onPress={() => navigation.navigate('SignUpPage')}>
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
