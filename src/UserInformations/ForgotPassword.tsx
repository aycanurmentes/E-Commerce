import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { InputForms } from '../components/InputForms';
import ReusableButton from '../components/ReusableButton';
import { Formik } from 'formik';
import styles from './AuthStyles';
import Toast from 'react-native-toast-message';
import { FirebaseAuthService, AuthError } from '../services/firebaseAuth';

export default function ForgotPassword() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [isLoading, setIsLoading] = useState(false);

  const validate = (values: { email: string }) => {
    const errors: { email?: string } = {};

    const turkishChars = /[çğıöşüÇĞIİÖŞÜ]/;
    if (turkishChars.test(values.email)) {
      errors.email = 'Do not use Turkish characters in email address!';
      return errors;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(values.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    return errors;
  };

  const handleResetPassword = async (values: { email: string }) => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      await FirebaseAuthService.resetPassword(values.email);

      Toast.show({
        type: 'success',
        text1: 'Success!',
        text2: 'Password reset link has been sent to your email.',
        position: 'top',
      });

      setTimeout(() => {
        navigation.navigate('SignInPage');
      }, 2000);

    } catch (error: any) {
      const authError = error as AuthError;
      Toast.show({
        type: 'error',
        text1: 'Password Reset Error',
        text2: authError.message,
        position: 'top',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <Formik
          initialValues={{ email: '' }}
          validate={validate}
          onSubmit={handleResetPassword}>
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldTouched }) => (
            <View style={styles.base1}>
              <View style={styles.textToInput}>
                <View style={styles.headerWrapper}>
                  <Text style={styles.header}>Forgot </Text>
                  <Text style={styles.header}>Password? </Text>
                </View>
                <InputForms
                  placeholder="Enter your email address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => {
                    handleBlur('email');
                    setFieldTouched('email');
                  }}
                  errorText={touched.email && errors.email ? errors.email : ''}
                  hasError={touched.email && !!errors.email}
                  editable={!isLoading}
                  leftIcon={
                    <Image
                      source={require('../images/mail.png')}
                      style={styles.inputMailImage} />
                  }
                />
                <View style={localStyles.bottomTxt}>
                  <Text style={localStyles.info}>
                    *{' '}
                    <Text style={localStyles.link}>
                      We will send you a message to set or reset your new password
                    </Text>
                  </Text>
                </View>
                <ReusableButton
                  title={isLoading ? "Sending..." : "Send"}
                  fontSize={20}
                  buttonStyle={styles.button}
                  onPress={handleSubmit}
                  disabled={isLoading}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  link: {
    color: '#676767',
  },
  info: {
    color: '#F83758',
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '400',
    marginHorizontal: 1,
  },
  bottomTxt: {
    marginTop: -24,
    marginBottom: 10,
  },
});
