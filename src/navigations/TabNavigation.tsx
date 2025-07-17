import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import SearchPage from '../screens/SearchPage';
import BasketPage from '../screens/BasketPage';
import Wishlistpage from '../screens/Wishlistpage';
import SettingPage from '../screens/SettingPage';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#EB3030',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: { height: 76, paddingBottom: 8, paddingTop: 8 },
        tabBarIcon: ({ color }) => {
          let icon;
          if (route.name === 'HomePage') icon = require('../images/home1.png');
          else if (route.name === 'WishlistPage') icon = require('../images/wishlist.png');
          else if (route.name === 'BasketPage') icon = require('../images/basket.png');
          else if (route.name === 'SearchPage') icon = require('../images/search.png');
          else if (route.name === 'SettingPage') icon = require('../images/settings.png');
          return <Image source={icon} style={{ width: 24, height: 24, tintColor: color, resizeMode: 'contain' }} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Search" component={SearchPage} />
      <Tab.Screen name="Basket" component={BasketPage} />
      <Tab.Screen name="Wishlist" component={Wishlistpage} />
      <Tab.Screen name="Settings" component={SettingPage} />
    </Tab.Navigator>
  );
}