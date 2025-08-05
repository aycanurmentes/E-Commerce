import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet, ViewStyle, ImageStyle } from 'react-native';
import HomePage from '../screens/HomePage';
import SearchPage from '../screens/SearchPage';
import BasketPage from '../screens/BasketPage';
import Wishlistpage from '../screens/Wishlistpage';
import SettingPage from '../screens/SettingPage';

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

const basketIconContainer = (focused: boolean): ViewStyle => ({
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: focused ? '#EB3030' : '#fff',
  marginTop: -22,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
});
const basketIconImage = (focused: boolean): ImageStyle => ({
  width: 26,
  height: 26,
  tintColor: focused ? '#fff' : '#000',
  resizeMode: 'contain',
});

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#EB3030',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          height: 76,
          paddingBottom: 8,
          paddingTop: 8,
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, focused }) => {
          const icon = getTabIcon(route.name);

          if (route.name === 'Basket') {
            return (
              <View style={basketIconContainer(focused)}>
                <Image source={icon} style={basketIconImage(focused)} />
              </View>
            );
          }

          return <Image source={icon} style={[styles.tabIcon, { tintColor: color }]} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Wishlist" component={Wishlistpage} />
      <Tab.Screen
        name="Basket"
        component={BasketPage}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen name="Search" component={SearchPage} />
      <Tab.Screen name="Settings" component={SettingPage} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
