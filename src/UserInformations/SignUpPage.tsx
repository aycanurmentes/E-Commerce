import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { InputForms } from '../components/InputForms';
import ReusableButton from '../components/ReusableButton';
import { SocialButtons } from '../components/SocialButtons';
import { RootStackParamList } from '../navigations/NavigationTypes';
import styles from './AuthStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function SignUpPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const socialIcons = [
    { name: 'google', source: require('../images/google.png') },
    { name: 'apple', source: require('../images/apple.png') },
    { name: 'facebook', source: require('../images/facebook.png') },
  ];

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required.'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required.'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Please confirm your password.'),
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.base1}>
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
           onSubmit={(values) => {
          if (values.email && values.password.length >= 6 && values.confirmPassword) {
            navigation.navigate('ForgotPassword');
          }
        }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
            <>
              <View style={styles.textToInput}>
                <View>
                  <Text style={styles.header}>Create an</Text>
                  <Text style={styles.header}>account</Text>
                </View>
                <InputForms
                  placeholder="Username or Email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  leftIcon={<Image source={require('../images/user.png')} style={styles.inputImage} />}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <InputForms
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  leftIcon={<Image source={require('../images/passwordLock.png')} style={styles.inputPassImage} />}
                  rightIcon={<Image source={require('../images/eye.png')} style={styles.inputImage} />}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                <InputForms
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  leftIcon={<Image source={require('../images/passwordLock.png')} style={styles.inputPassImage} />}
                  rightIcon={<Image source={require('../images/eye.png')} style={styles.inputImage} />}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </View>
              <View style={styless.bottomTxt}>
                <Text style={styless.info}>
                  By clicking the <Text style={styles.link}>Register</Text> button, you agree to the public offer.
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
            Already have an account? <Text style={styles.link}>Login</Text>
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
  bottomTxt: {
    marginTop: -32,
    alignItems: 'flex-start',
  },
});
