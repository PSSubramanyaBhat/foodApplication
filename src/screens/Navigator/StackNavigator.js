import * as React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import colors from '../../constants/colors';
import SignUp from '../SignUp/SignUp';
import OTPScreen from '../ForgotPassword/OTPScreen';
import ChangePassword from '../ChangePassword/ChangePassword';
import ChangeForgotPassword from '../ChangePassword/ChangeForgotPassword';
import LandingPage from '../LandingPage/LandingPage';
import FoodDisplayPage from '../FoodDisplayPage/FoodDisplayPage';
import SearchPage from '../SearchPage/SearchPage';
import MyOrdersPage from '../MyOrdersPage/MyOrdersPage';
import Rating from '../Rating/Rating';
import Feedback from '../Feedback/Feedback';
import SampleDrawerPage from '../Feedback/SampleDrawerPage';
import StarredHotels from '../StarredHotels/StarredHotels';

const Stack = createStackNavigator();

const StackScreens = () => {
  return (
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
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyOrdersPage"
        component={MyOrdersPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Rating"
        component={Rating}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StarredHotels"
        component={StarredHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SampleDrawerPage"
        component={SampleDrawerPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <Stack.Navigator>
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
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyOrdersPage"
        component={MyOrdersPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Rating"
        component={Rating}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StarredHotels"
        component={StarredHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SampleDrawerPage"
        component={SampleDrawerPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const RatingScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rating"
        component={Rating}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StarredHotels"
        component={StarredHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SampleDrawerPage"
        component={SampleDrawerPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const FeedbackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Rating"
        component={Rating}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StarredHotels"
        component={StarredHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SampleDrawerPage"
        component={SampleDrawerPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const StarredHotelScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StarredHotels"
        component={StarredHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Rating"
        component={Rating}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SampleDrawerPage"
        component={SampleDrawerPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const SampleScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SampleDrawerPage"
        component={SampleDrawerPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StarredHotels"
        component={StarredHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Rating"
        component={Rating}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {
  StackScreens,
  HomeScreen,
  RatingScreen,
  FeedbackScreen,
  StarredHotelScreen,
  SampleScreen,
};
