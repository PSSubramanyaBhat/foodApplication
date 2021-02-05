import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
  ImageBackground,
  Platform,
} from 'react-native';

const StarredHotels = () => {
  return (
    <View
      style={{
        // alignSelf: 'center',
        marginTop: 100,
      }}>
      <Text style={{textAlign: 'center'}}>Starred Hotels</Text>
    </View>
  );
};

export default StarredHotels;
