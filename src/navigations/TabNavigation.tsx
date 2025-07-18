import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import SearchPage from '../screens/SearchPage';
import BasketPage from '../screens/BasketPage';
import Wishlistpage from '../screens/Wishlistpage';
import SettingPage from '../screens/SettingPage';
import { Image, ViewStyle, ImageStyle } from 'react-native';

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName: string): any => {
  switch (routeName) {
    case 'Home':
      return require('../images/home1.png');
    case 'Search':
      return require('../images/search.png');
    case 'Basket':
      return require('../images/basket.png');
    case 'Wishlist':
      return require('../images/wishlist.png');
    case 'Settings':
      return require('../images/settings.png');
    default:
      return null;
  }
};

const getIconStyle = (
  routeName: string,
  color: string,
  focused: boolean
): ImageStyle => {
  if (routeName === 'Basket') {
    return {
      width: 53,
      height: 56,
      tintColor: focused ? '#fff' : '#000',
      borderRadius: 50,
      backgroundColor: focused ? '#EB3030' : '#fff',
      marginTop: -20,
      padding: 10,
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      //  elevation: 5,
      resizeMode: 'contain',
    };
  }

  return {
    width: 24,
    height: 24,
    tintColor: color,
    resizeMode: 'stretch',
  };
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#EB3030',
          tabBarInactiveTintColor: '#000',
          tabBarStyle: {
            height: 76,
            paddingBottom: 8,
            paddingTop: 8,
          } as ViewStyle,
          tabBarIcon: ({ color, focused }) => {
            const icon = getTabIcon(route.name);
            return icon ? (
              <Image
                source={icon}
                style={getIconStyle(route.name, color, focused)}
              />
            ) : null;
          }
        };
      }}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Search" component={SearchPage} />
      <Tab.Screen name="Basket" component={BasketPage} options={{ tabBarLabel: () => null }} />
      <Tab.Screen name="Wishlist" component={Wishlistpage} />
      <Tab.Screen name="Settings" component={SettingPage} />
    </Tab.Navigator>
  );
}
