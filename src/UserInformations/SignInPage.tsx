import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState, useRef } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { InputForms } from '../components/InputForms';
import ReusableButton from '../components/ReusableButton';
import { SocialButtons } from '../components/SocialButtons';
import { RootStackParamList } from '../navigations/NavigationTypes';
import styles from './AuthStyles';
import { Formik } from 'formik';
import Toast from 'react-native-toast-message';
import { FirebaseAuthService, AuthError } from '../services/firebaseAuth';

export default function SignInPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const passwordRef = useRef<TextInput>(null);

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

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
        navigation.navigate('TabNavigation');
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

  const handleSocialLogin = (platform: string) => {
    Toast.show({
      type: 'info',
      text1: `Login with ${platform.charAt(0).toUpperCase() + platform.slice(1)}`,
      text2: '.',
      position: 'top',
    });
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
            setFieldTouched
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
                      <Image
                        source={require('../images/user.png')}
                        style={styles.inputImage} />
                    } />
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
                        style={styles.inputPassImage} />
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
                    onBottomRightPress={() => navigation.navigate('ForgotPassword')} />
                </View>
                <ReusableButton
                  title={isLoading ? "Signing In..." : "Sign In"}
                  fontSize={20}
                  buttonStyle={styles.button}
                  onPress={handleSubmit}
                  disabled={isLoading} />
              </View>
            </>
          )}
        </Formik>
        <View style={styles.base2}>
          <View style={styles.social}>
            <Text style={styles.or}>- OR CONTINUE WITH -</Text>
            <SocialButtons 
              icons={socialIcons} 
              onSocialPress={handleSocialLogin}
            />
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
