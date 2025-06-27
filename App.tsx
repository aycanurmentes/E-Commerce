import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstSplash from './src/splash/FirstSplash';
import SecondSplash from './src/splash/SecondSplash';
import ThirdSplash from './src/splash/ThirdSplash';
import HomePage from './src/screens/HomePage';
import SignInPage from './src/UserInformations/SignInPage';
import SignUpPage from './src/UserInformations/SignUpPage';
import ForgotPassword from './src/UserInformations/ForgotPassword';
import GetStarted from './src/splash/GetStarted';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstSplash" component={FirstSplash} />
        <Stack.Screen name="SecondSplash" component={SecondSplash} />
        <Stack.Screen name="ThirdSplash" component={ThirdSplash} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name='GetStarted' component={GetStarted}/>
    
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}
