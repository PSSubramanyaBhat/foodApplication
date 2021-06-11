import * as React from 'react';
import {Image} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../constants/colors';
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
import CustomSidebarMenu from './CustomSidebarMenu';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import {color} from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const HomePageDrawerNavigation = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContentOptions={{
        // activeTintColor: 'red',
        // activeBackgroundColor: 'grey',
        inactiveTintColor: 'white',
        // inactiveBackgroundColor: 'white',
        labelStyle: {
          // marginLeft: 5,
        },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      // drawerStyle={{backgroundColor: colors.darkBg2}}
      drawerStyle={{backgroundColor: colors.darkBg3}}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          // drawerLabel: () => {},
          drawerIcon: () => (
            <Image
              style={{
                height: 25,
                width: 25,
                // marginTop: 4,
                alignSelf: 'center',
              }}
              source={imagePath.homeFilled}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="RatingScreen"
        component={RatingScreen}
        options={{
          title: 'Rating',
          drawerIcon: () => (
            <Image
              style={{
                height: 25,
                width: 25,
                // marginTop: 4,
                alignSelf: 'center',
              }}
              source={imagePath.startIcon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="FeedbackScreen"
        component={FeedbackScreen}
        options={{
          title: 'Feedback',
          drawerIcon: () => (
            <Image
              style={{
                height: 25,
                width: 25,
                // marginTop: 4,
                alignSelf: 'center',
              }}
              source={imagePath.feedBackYellow}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="StarredHotelScreen"
        component={StarredHotelScreen}
        options={{
          title: 'Starred Hotel',
          drawerIcon: () => (
            <Image
              style={{
                height: 25,
                width: 25,
                // marginTop: 4,
                alignSelf: 'center',
              }}
              source={imagePath.hotelOutline}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="SampleScreen"
        component={SampleScreen}
        options={{
          title: 'Logout',
          drawerIcon: () => (
            <Image
              style={{
                height: 25,
                width: 25,
                // marginTop: 4,
                alignSelf: 'center',
              }}
              source={imagePath.logOutFilled}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomePageDrawerNavigation;
