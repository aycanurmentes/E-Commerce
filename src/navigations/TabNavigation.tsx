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
                tabBarActiveTintColor: '#F83758',
                tabBarInactiveTintColor: '#A8A8A9',
                tabBarStyle: { height: 70, paddingBottom: 8, paddingTop: 8 },
                tabBarIcon: ({ color }) => {
                    let icon;
                    if (route.name === 'Home') icon = require('../images/home.png');
                    else if (route.name === 'Search') icon = require('../images/search.png');
                    else if (route.name === 'Basket') icon = require('../images/basket.png');
                    else if (route.name === 'Wishlist') icon = require('../images/wishlist.png');
                    else if (route.name === 'Settings') icon = require('../images/settings.png');
                    return <Image source={icon} style={{ width: 28, height: 28, tintColor: color }} />;
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