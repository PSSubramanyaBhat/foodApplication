/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomePageDrawerNavigation from './src/screens/Navigator/DrawerNavigator';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <HomePageDrawerNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
