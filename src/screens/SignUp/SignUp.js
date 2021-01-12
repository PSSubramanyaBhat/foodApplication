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
  ImageBackground,
  Platform,
} from 'react-native';

const TITLE_PADDING_TOP = Platform.OS === 'ios' ? 60 : 0;

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordTextDisplayStatus = showPassword ? false : true;

  const renderPageTitle = () => {
    return (
      <View style={styles.pageTitleSection}>
        <Text style={styles.pageTitle}>{strings.signUp1}</Text>
      </View>
    );
  };

  const renderTextField1 = () => {
    return (
      <View style={styles.inputField}>
        <Image style={styles.icons} source={imagePath.personIcon}></Image>
        <TextInput
          style={styles.inputSection}
          placeholder={strings.username}
          placeholderTextColor={colors.darkGrey}
          onChangeText={() => {}}></TextInput>
      </View>
    );
  };

  const renderTextField2 = () => {
    return (
      <View style={styles.inputField}>
        <Image style={styles.icons} source={imagePath.mailIcon}></Image>
        <TextInput
          style={styles.inputSection}
          placeholder={strings.emailId}
          placeholderTextColor={colors.darkGrey}></TextInput>
      </View>
    );
  };

  const renderTextField3 = () => {
    return (
      <View style={styles.inputField}>
        <Image style={styles.icons} source={imagePath.callIcon}></Image>
        <TextInput
          style={styles.inputSection}
          placeholder={strings.phoneNumber}
          placeholderTextColor={colors.darkGrey}></TextInput>
      </View>
    );
  };

  const renderTextField4 = () => {
    return (
      <View style={styles.inputField}>
        <Image style={styles.icons} source={imagePath.lockIcon}></Image>
        <TextInput
          style={styles.inputSection}
          placeholder={strings.password}
          secureTextEntry={passwordTextDisplayStatus}
          placeholderTextColor={colors.darkGrey}></TextInput>
        {showPassword ? (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}>
            <Image style={styles.icons} source={imagePath.eyeOffIcon}></Image>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}>
            <Image style={styles.icons} source={imagePath.eyeOnIcon}></Image>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  const signUpButton = () => {
    return (
      <TouchableOpacity>
        <View style={styles.signUpButton}>
          <Text style={styles.buttonText}>{strings.signUp2}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const bottomNavigationTextsection = () => {
    return (
      <View style={styles.bottomSection}>
        <Text
          style={[
            styles.bottomText,
            {color: colors.darkGrey, fontWeight: '600'},
          ]}>
          Already have account?
        </Text>
        <Text
          style={[
            styles.bottomText,
            {color: colors.deepBlue, fontWeight: '600'},
          ]}>
          Log in
        </Text>
      </View>
    );
  };

  const renderBodySection = () => {
    return (
      <View>
        <View style={styles.pageBodySection}>
          {/* TextFields */}
          {renderTextField1()}
          {renderTextField2()}
          {renderTextField3()}
          {renderTextField4()}
          {/* TextFields */}
          {signUpButton()}
        </View>
        {bottomNavigationTextsection()}
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

  const renderFacebookIcon = () => {
    return (
      <ImageBackground
        style={[
          styles.roundIcons,
          {backgroundColor: colors.deepBlue, borderRadius: 30},
        ]}>
        <Image
          style={styles.iconDimension2}
          source={imagePath.facebookIcon}></Image>
      </ImageBackground>
    );
  };

  const renderGoogleIcon = () => {
    return (
      <ImageBackground
        style={[
          styles.roundIcons,
          {backgroundColor: colors.vermillion, borderRadius: 30},
        ]}>
        <Image
          style={styles.iconDimension}
          source={imagePath.googleIcon}></Image>
      </ImageBackground>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.pageFooterSection}>
        <View style={styles.iconDisplaySection}>
          {renderFacebookIcon()}
          {renderGoogleIcon()}
        </View>
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

        {/* Footer Section */}
        {renderFooter()}
        {/* Footer Section */}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageBodySection: {
    // height: 140,
    marginTop: -40,
    flexDirection: 'column',
    // backgroundColor: colors.red,
  },
  pageFooterSection: {
    flexDirection: 'row',
    marginTop: 60,
    height: 250,
    justifyContent: 'center',
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
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputSection: {
    marginLeft: 20,
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
  bottomText: {
    fontSize: 13,
    paddingLeft: 5,
  },
  bottomSection: {
    flexDirection: 'row',
    marginLeft: 50,
    marginTop: 20,
  },
  iconDisplaySection: {
    height: 60,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  roundIcons: {
    // borderRadius: 30,
    height: 60,
    width: 60,
    marginHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconDimension: {
    alignSelf: 'center',
    height: 20,
    width: 20,
  },
  iconDimension2: {
    alignSelf: 'center',
    height: 35,
    width: 35,
  },
});
export default SignUp;
