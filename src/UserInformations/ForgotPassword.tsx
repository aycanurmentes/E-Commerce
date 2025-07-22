import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { InputForms } from '../components/InputForms';
import ReusableButton from '../components/ReusableButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './AuthStyles';

export default function ForgotPassword() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Enter a valid email.')
      .required('Email is required.'),
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            navigation.navigate('GetStarted');
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.base1}>
                <View style={styles.textToInput}>
                  <Text style={styles.header}>Forgot Password?</Text>

                  <InputForms
                    placeholder="Enter your email address"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    leftIcon={
                      <Image
                        source={require('../images/mail.png')}
                        style={styles.inputMailImage}
                      />
                    }
                  />
                  {touched.email && errors.email && (
                    <Text style={{ color: 'red', marginLeft: 8 }}>{errors.email}</Text>
                  )}
                  <View style={styles.bottomTxt}>
                    <Text style={styless.info}>
                      *{' '}
                      <Text style={styless.link}>
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
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}

const styless = StyleSheet.create({
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
});
