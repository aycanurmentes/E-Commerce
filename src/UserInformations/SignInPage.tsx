import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { InputForms } from '../components/InputForms';
import ReusableButton from '../components/ReusableButton';
import { SocialButtons } from '../components/SocialButtons';
import { RootStackParamList } from '../navigations/NavigationTypes';
import styles from './AuthStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function SignInPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const socialIcons = [
    { name: 'google', source: require('../images/google.png') },
    { name: 'apple', source: require('../images/apple.png') },
    { name: 'facebook', source: require('../images/facebook.png') },
  ];

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Enter a valid email.')
      .required('Email is required.'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 character')
      .required('Password is required.'),
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (values.email && values.password.length >= 6) {
            navigation.navigate('SignUpPage');
          }
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
                <View>
                  <Text style={styles.header}>Welcome</Text>
                  <Text style={styles.header}>Back!</Text>
                </View>
                <InputForms
                  placeholder="Username or Email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  leftIcon={<Image source={require('../images/user.png')} style={styles.inputImage} />}
                />
                {touched.email && errors.email && (
                  <Text style={{ color: 'red', marginLeft: 8 }}>{errors.email}</Text>
                )}
                <InputForms
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  leftIcon={<Image source={require('../images/passwordLock.png')} style={styles.inputPassImage} />}
                  bottomRightButtonText='Forgot Password?'
                />
                {touched.password && errors.password && (
                  <Text style={{ color: 'red', marginLeft: 8 }}>{errors.password}</Text>
                )}
              </View>
              <ReusableButton
                title="Login"
                fontSize={20}
                buttonStyle={styles.button}
                onPress={handleSubmit}
              />
            </View>
            <View style={styles.base2}>
              <View style={styles.social}>
                <Text style={styles.or}>- OR Continue with -</Text>
                <SocialButtons icons={socialIcons} />
                <Text style={styles.footer}>
                  Create An Account{' '}
                  <Text
                    style={styles.link}
                    onPress={() => navigation.navigate('SignUpPage')}
                  >
                    Sign Up
                  </Text>
                </Text>
              </View>
            </View>
          </>
        )}
      </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}
