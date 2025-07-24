import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { InputForms } from '../components/InputForms';
import ReusableButton from '../components/ReusableButton';
import { Formik } from 'formik';
import styles from './AuthStyles';

export default function ForgotPassword() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const validate = (values: { email: string }) => {
    const errors: { email?: string } = {};
    if (!values.email.includes('@') || !values.email.includes('.com')) {
      errors.email = 'Enter a valid email.';
    }
    return errors;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <Formik
          initialValues={{ email: '' }}
          validate={validate}
          onSubmit={() => {
            navigation.navigate('GetStarted');
          }}>
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
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
                  onBlur={handleBlur('email')}
                   errorText={touched.email && errors.email ? errors.email : ''}
                  leftIcon={
                    <Image
                      source={require('../images/mail.png')}
                      style={styles.inputMailImage}  />
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
                  title="Submit"
                  fontSize={20}
                  buttonStyle={styles.button}
                  onPress={handleSubmit}
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
