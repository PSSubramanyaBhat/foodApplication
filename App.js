/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import colors from './src/constants/colors';
import OTPScreen from './src/screens/ForgotPassword/OTPScreen';
import SignUp from './src/screens/SignUp/SignUp';
import ChangeForgotPassword from './src/screens/ChangePassword/ChangeForgotPassword';
import ChangePassword from './src/screens/ChangePassword/ChangePassword';
import LandingPage from './src/screens/LandingPage/LandingPage';
import FoodDisplayPage from './src/screens/FoodDisplayPage/FoodDisplayPage';
import SearchPage from './src/screens/SearchPage/SearchPage';
import MyOrdersPage from './src/screens/MyOrdersPage/MyOrdersPage';

import StackScreens from './src/screens/Navigator/StackNavigator';
import HomePageDrawerNavigation from './src/screens/Navigator/DrawerNavigator';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackScreens /> */}
      <HomePageDrawerNavigation />
    </NavigationContainer>
  );
};

export default App;
