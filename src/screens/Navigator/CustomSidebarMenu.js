import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import imagePaths from '../../constants/imagePath';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import imagePath from '../../constants/imagePath';
import colors from '../../constants/colors';
// import Divider from './Divider';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: '#444444'
        // backgroundColor: colors.darkBg3,
        backgroundColor: colors.darkBg3,
      }}>
      {/*Top Large Image */}
      <View style={styles.circularAvtar}>
        <Image
          style={styles.appAvtarImage}
          // source={{uri: BASE_PATH + proileImage}}
          // source={imagePaths.personIcon}
          source={imagePaths.personIcon}
        />
      </View>
      {/* <Divider /> */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://aboutreact.com/')}
        /> */}
      </DrawerContentScrollView>
      {/* <Divider /> */}
      <Text
        style={{
          fontSize: 13,
          marginTop: 20,
          marginBottom: 20,
          textAlign: 'center',
          color: 'white',
        }}>
        {/* www.aboutreact.com */}
        www.react-navigation.com
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  circularAvtar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: 'white',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 8,
  },
  appAvtarImage: {
    resizeMode: 'center',
    // width: 100,
    // height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginTop: 5,
    marginLeft: -10,
    height: 85,
    width: 96,
    // alignSelf: 'center',
    // borderRadius: 50,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
