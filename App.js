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

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  // return <SignUp />;
  // return <OTPScreen />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangeForgotPassword"
          component={ChangeForgotPassword}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FoodDisplayPage"
          component={FoodDisplayPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
