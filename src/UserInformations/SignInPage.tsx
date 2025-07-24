import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { InputForms } from '../components/InputForms';
import ReusableButton from '../components/ReusableButton';
import { SocialButtons } from '../components/SocialButtons';
import { RootStackParamList } from '../navigations/NavigationTypes';
import styles from './AuthStyles';
import { Formik } from 'formik';

export default function SignInPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  const socialIcons = [
    { name: 'google', source: require('../images/google.png') },
    { name: 'apple', source: require('../images/apple.png') },
    { name: 'facebook', source: require('../images/facebook.png') },
  ];

  const validate = (values: { email: string; password: string }) => {
    const errors: Partial<typeof values> = {};
    if (!values.email.includes('@') || !values.email.includes('.')) {
      errors.email = 'Enter a valid email.';
    }
    if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }
    return errors;
  };

  const handleLogin = () => {
    navigation.navigate('SignUpPage');
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
                    leftIcon={
                      <Image
                        source={require('../images/passwordLock.png')}
                        style={styles.inputPassImage} />
                    }
                   rightIcon={
                      <TouchableOpacity onPress={togglePasswordVisibility}>
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
                  title="Login"
                  fontSize={20}
                  buttonStyle={styles.button}
                  onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
        <View style={styles.base2}>
          <View style={styles.social}>
            <Text style={styles.or}>- OR Continue with -</Text>
            <SocialButtons icons={socialIcons} />
            <Text style={styles.footer}>
              Create An Account{' '}
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
