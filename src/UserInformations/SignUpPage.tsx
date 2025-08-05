import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { InputForms } from '../components/InputForms';
import ReusableButton from '../components/ReusableButton';
import { SocialButtons } from '../components/SocialButtons';
import { RootStackParamList } from '../navigations/NavigationTypes';
import styles from './AuthStyles';
import { Formik } from 'formik';
import Toast from 'react-native-toast-message';
import { FirebaseAuthService, AuthError } from '../services/firebaseAuth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

export default function SignUpPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
useEffect(() => {
    GoogleSignin.configure({
      webClientId: '433633667752-fsa7mj49b4iuu3b22pchmlc49u6q0sl6.apps.googleusercontent.com', //env içinde yaz
    });
  }, []);
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(prev => !prev);

  const socialIcons = [
    { name: 'google', source: require('../images/google.png') },
    { name: 'apple', source: require('../images/apple.png') },
    { name: 'facebook', source: require('../images/facebook.png') },
  ];

  const validate = (values: { email: string; password: string; confirmPassword: string }) => {
    const errors: { email?: string; password?: string; confirmPassword?: string } = {};
    
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

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    return errors;
  };

  const handleSignUp = async (values: { email: string; password: string; confirmPassword: string }) => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      await FirebaseAuthService.signUpWithEmail(values.email, values.password);
      
      Toast.show({
        type: 'success',
        text1: 'Success!',
        text2: 'Your account has been created.',
        position: 'top',
      });
      
      setTimeout(() => {
        navigation.navigate('SignInPage');
      }, 1500);
      
    } catch (error: any) {
      const authError = error as AuthError;
      Toast.show({
        type: 'error',
        text1: 'Registration Error',
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
    navigation.navigate('GetStarted');
  } catch (error: any) {
    console.log(error.message)
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
        <View style={styles.base1}>
          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            validate={validate}
            onSubmit={handleSignUp}
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
                <View style={styles.textToInput}>
                  <View style={styles.headerWrapper}>
                    <Text style={styles.header}>Create</Text>
                    <Text style={styles.header}>Account</Text>
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
                      <Image
                        source={require('../images/user.png')}
                        style={styles.inputImage}
                      />
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
                    returnKeyType="next"
                    onSubmitEditing={() => confirmPasswordRef.current?.focus()}
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
                  />
                  <InputForms
                    placeholder="Confirm Password"
                    secureTextEntry={!showConfirmPassword}
                    value={values.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={() => {
                      handleBlur('confirmPassword');
                      setFieldTouched('confirmPassword');
                    }}
                    errorText={
                      touched.confirmPassword && errors.confirmPassword
                        ? errors.confirmPassword
                        : ''
                    }
                    hasError={touched.confirmPassword && !!errors.confirmPassword}
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
                      <TouchableOpacity onPress={toggleConfirmPasswordVisibility} disabled={isLoading}>
                        <Image
                          source={require('../images/eye.png')}
                          style={styles.inputImage}
                        />
                      </TouchableOpacity>
                    }
                  />
                </View>
                <View style={styles.bottomTxt}>
                  <Text style={styless.info}>
                    By clicking the <Text style={styles.link}>Register</Text> button, you agree to the public offer
                  </Text>
                </View>
                <ReusableButton
                  title={isLoading ? "Creating Account..." : "Create Account"}
                  buttonStyle={styles.button}
                  onPress={handleSubmit}
                  disabled={isLoading}
                />
              </>
            )}
          </Formik>
        </View>
        <View style={styles.base2}>
          <View style={styles.social}>
            <Text style={styles.or}>- OR Continue with -</Text>
            <SocialButtons 
              icons={socialIcons} 
              onSocialPress={handleSocialLogin}
            />
            <Text style={styles.footer}>
              Already have an account?{' '}
              <Text style={styles.link} onPress={() => navigation.navigate('SignInPage')}>
                Login
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styless = StyleSheet.create({
  info: {
    fontSize: 12,
    fontWeight: '400',
    color: '#575757',
  },
});
