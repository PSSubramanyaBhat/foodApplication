import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  StackScreens,
  HomeScreen,
  RatingScreen,
  FeedbackScreen,
  StarredHotelScreen,
  SampleScreen,
} from './StackNavigator';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';

const Drawer = createDrawerNavigator();

const HomePageDrawerNavigation = ({navigation}) => {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="RatingScreen"
        component={RatingScreen}
        options={{
          title: 'Rating',
        }}
      />
      <Drawer.Screen
        name="FeedbackScreen"
        component={FeedbackScreen}
        options={{
          title: 'Feedback',
        }}
      />
      <Drawer.Screen
        name="StarredHotelScreen"
        component={StarredHotelScreen}
        options={{
          title: 'Starred Hotel',
        }}
      />
      <Drawer.Screen
        name="SampleScreen"
        component={SampleScreen}
        options={{
          title: 'Sample Screen',
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomePageDrawerNavigation;
