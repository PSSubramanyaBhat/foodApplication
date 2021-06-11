import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import imagePaths from '../../constants/imagePath';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import imagePath from '../../constants/imagePath';
import colors from '../../constants/colors';
import Divider from '../../components/Divider';
// import Divider from './Divider';
import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

const CustomSidebarMenu = (props) => {
  const [filepath, setFilePath] = useState({
    data: '',
    uri: '',
  });
  const [fileData, setFileData] = useState('');
  const [fileUri, setFileUri] = useState('');

  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  const openPicker = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        setFilePath(response);
        setFileData(response.data);
        setFileUri(response.uri);
      }
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: '#444444'
        // backgroundColor: colors.darkBg3,
        backgroundColor: colors.darkBg3,
      }}>
      {/*Top Large Image */}
      <TouchableOpacity
        onPress={() => {
          openPicker();
        }}>
        <View style={styles.circularAvtar}>
          <Image
            style={styles.appAvtarImage}
            // source={{uri: BASE_PATH + proileImage}}
            // source={imagePaths.personIcon}
            source={imagePaths.personIcon}
          />
        </View>
      </TouchableOpacity>
      <Text style={{color: colors.white, textAlign: 'center', marginTop: 10}}>
        SUBRAMANYA BHAT PS
      </Text>
      <Text style={{color: colors.white, textAlign: 'center', marginTop: 5}}>
        FoodCourt App
      </Text>
      <Divider dividerColor={colors.white} />
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
