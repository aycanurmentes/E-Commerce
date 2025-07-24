import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { InputForms } from '../components/InputForms';
import ReusableButton from '../components/ReusableButton';
import { SocialButtons } from '../components/SocialButtons';
import { RootStackParamList } from '../navigations/NavigationTypes';
import styles from './AuthStyles';
import { Formik } from 'formik';

export default function SignUpPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(prev => !prev);

  const socialIcons = [
    { name: 'google', source: require('../images/google.png') },
    { name: 'apple', source: require('../images/apple.png') },
    { name: 'facebook', source: require('../images/facebook.png') },
  ];

  const validate = (values: { email: string; password: string; confirmPassword: string }) => {
    const errors: { email?: string; password?: string; confirmPassword?: string } = {};
    if (!values.email.includes('@') || !values.email.includes('.com')) {
      errors.email = 'Enter a valid email.';
    }
    if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match.';
    }
    return errors;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.base1}>
          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            validate={validate}
            onSubmit={() => {
              navigation.navigate('ForgotPassword');
            }}
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
                    <Text style={styles.header}>Create an</Text>
                    <Text style={styles.header}>account</Text>
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
                    leftIcon={
                      <Image
                        source={require('../images/passwordLock.png')}
                        style={styles.inputPassImage}
                      />
                    }
                    rightIcon={
                      <TouchableOpacity onPress={togglePasswordVisibility}>
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
                    leftIcon={
                      <Image
                        source={require('../images/passwordLock.png')}
                        style={styles.inputPassImage}
                      />
                    }
                    rightIcon={
                      <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
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
                    By clicking the <Text style={styles.link}>Register</Text> button, you agree
                    to the public offer.
                  </Text>
                </View>
                <ReusableButton
                  title="Create Account"
                  buttonStyle={styles.button}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>
        <View style={styles.base2}>
          <View style={styles.social}>
            <Text style={styles.or}>- OR Continue with -</Text>
            <SocialButtons icons={socialIcons} />
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
