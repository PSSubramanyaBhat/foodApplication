import React, {useState} from 'react';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/strings';

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
  ImageBackground,
  Platform,
} from 'react-native';

const TITLE_PADDING_TOP = Platform.OS === 'ios' ? 60 : 0;

const ChangeForgotPassword = () => {
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [username, setUsername] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [phoneNumber, setPhoneNumber] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [warningvalue, setWarningValue] = useState(0);
  //   const [warningvalue2, setWarningValue2] = useState(0);
  //   const [warningvalue3, setWarningValue3] = useState(0);
  //   const [warningvalue4, setWarningValue4] = useState(0);
  //   const passwordTextDisplayStatus = showPassword ? false : true;

  const renderPageTitle = () => {
    return (
      <View style={styles.pageTitleSection}>
        <Text style={styles.pageTitle}>{strings.changePassword}</Text>
        <Text style={styles.descriptionText}>
          {strings.changePasswordText2}
        </Text>
      </View>
    );
  };

  const renderTextField1 = () => {
    return (
      <View style={styles.inputField}>
        <Image style={styles.icons} source={imagePath.lockIcon}></Image>
        <TextInput
          style={styles.inputSection}
          placeholder={strings.changePasswordText2}
          placeholderTextColor={colors.darkGrey}
          secureTextEntry={true}
          onChangeText={(text) => {
            // setUsername(text);
            // setWarningValue(0);
          }}></TextInput>
      </View>
    );
  };

  const signUpButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          //   validateUsername();
          //   validateEmail(email);
          //   validatePhoneNumber(phoneNumber);
          //   validatePassword();
        }}>
        <View style={styles.signUpButton}>
          <Text style={styles.buttonText}>{strings.next}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderBodySection = () => {
    return (
      <View>
        <View style={styles.pageBodySection}>
          {/* TextFields */}
          {renderTextField1()}

          {/* TextFields */}
          {signUpButton()}
        </View>
      </View>
    );
  };

  const renderTopSection = () => {
    return (
      <View>
        {/* Title */}
        {renderPageTitle()}
        {/* Title */}

        {/* Body */}
        {renderBodySection()}
        {/* Body */}
      </View>
    );
  };

  return (
    <>
      <StatusBar
        backgroundColor={colors.transparentBackgroundColor}
        barStyle="light-content"
      />
      <SafeAreaView backgroundColor={colors.transparentBackgroundColor} />
      <View style={styles.mainConatiner} backgroundColor={colors.primaryColor}>
        {/* Page top section */}
        {renderTopSection()}
        {/* Page top section */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pageTitleSection: {
    height: 140,
    marginTop: TITLE_PADDING_TOP,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  descriptionText: {
    fontSize: 13,
    marginLeft: 35,
    marginTop: 60,
    color: colors.darkGrey,
  },
  pageBodySection: {
    // height: 140,
    marginTop: -40,
    flexDirection: 'column',
    // backgroundColor: colors.red,
  },
  pageTitle: {
    marginLeft: 35,
    fontSize: 28,
  },
  inputField: {
    height: 50,
    backgroundColor: colors.white,
    marginTop: 30,
    marginHorizontal: 30,
    borderColor: colors.white,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputField2: {
    height: 50,
    backgroundColor: colors.white,
    marginTop: 30,
    marginHorizontal: 30,
    borderColor: colors.deepred,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputSection: {
    marginLeft: 10,
    paddingLeft: 5,
    width: '70%',
  },
  icons: {
    marginLeft: 5,
    height: 30,
    width: 30,
  },
  signUpButton: {
    height: 60,
    marginTop: 30,
    marginHorizontal: 30,
    borderStyle: 'solid',
    borderColor: colors.gold,
    borderRadius: 30,
    backgroundColor: colors.gold,
  },
  buttonText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 22,
  },
});
export default ChangeForgotPassword;
