import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import FirstSplash from './src/splash/FirstSplash';
import SecondSplash from './src/splash/SecondSplash';
import ThirdSplash from './src/splash/ThirdSplash';
import SignInPage from './src/UserInformations/SignInPage';
import SignUpPage from './src/UserInformations/SignUpPage';
import ForgotPassword from './src/UserInformations/ForgotPassword';
import GetStarted from './src/splash/GetStarted';
import ProfileSection from './src/screens/ProfileSection';
import TabNavigation from './src/navigations/TabNavigation';
import Checkout from './src/screens/Checkout';
import Shipping from './src/screens/Shipping';
import PlaceOrder from './src/screens/PlaceOrder';
import Details from './src/screens/Details';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='FirstSplash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstSplash" component={FirstSplash} />
        <Stack.Screen name="SecondSplash" component={SecondSplash} />
        <Stack.Screen name="ThirdSplash" component={ThirdSplash} />
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="ProfileSection" component={ProfileSection} />
        <Stack.Screen name='Checkout' component={Checkout} />
        <Stack.Screen name='Shipping' component={Shipping} />
        <Stack.Screen name='PlaceOrder' component={PlaceOrder} />
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
