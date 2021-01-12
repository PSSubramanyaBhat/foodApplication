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

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [warningvalue, setWarningValue] = useState(0);
  const [warningvalue2, setWarningValue2] = useState(0);
  const [warningvalue3, setWarningValue3] = useState(0);
  const [warningvalue4, setWarningValue4] = useState(0);
  const passwordTextDisplayStatus = showPassword ? false : true;

  function validateUsername() {
    if (username === '') {
      setWarningValue(1);
    }
  }

  function validateEmail(mailText) {
    // CHECK REGEX EXPRESSIONS......
    // const re = /\S+@\S+\.\S+/;
    const re = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g;
    if (mailText === '') {
      setWarningValue2(1);
      return;
    }
    //FIX THIS VALIDATION...
    // if (re.test(mailText)) {
    //   setWarningValue2(2);
    // } else {
    //   setWarningValue2(0);
    // }
  }

  function validatePhoneNumber(number) {
    // const invalid_first_number = ['6','7','8'];
    // console.log('1st Digit Type: ', number[0].type);
    if (number === '') {
      setWarningValue3(1);
      return;
    } else if (number.length !== 10) {
      console.log('LENGTH: ', number.length);
      setWarningValue3(2);
      return;
    }
    //FIX THIS VALIDATION...
    // else if (
    //   // number[0] !== '6' ||
    //   // number[0] !== '7' ||
    //   // number[0] !== '8' ||
    //   // number[0] !== '9'
    //   number[0] !== 6 ||
    //   number[0] !== 7 ||
    //   number[0] !== 8 ||
    //   number[0] !== 9
    // ) {
    //   console.log('1st Digit: ', number[0]);
    //   // console.log('1st Digit Typw: ', number[0].type);
    //   setWarningValue3(2);
    //   return;
    // }
    else {
      setWarningValue3(0);
    }
  }

  function validatePassword() {
    if (password === '') {
      setWarningValue4(1);
      return;
    } else if (password.length < 6) {
      setWarningValue4(2);
      return;
    }
  }

  const renderPageTitle = () => {
    return (
      <View style={styles.pageTitleSection}>
        <Text style={styles.pageTitle}>{strings.signUp1}</Text>
      </View>
    );
  };

  const renderTextField1 = () => {
    return (
      <View
        style={
          username === '' && warningvalue === 1
            ? styles.inputField2
            : styles.inputField
        }>
        <Image style={styles.icons} source={imagePath.personIcon}></Image>
        <TextInput
          style={styles.inputSection}
          placeholder={strings.username}
          placeholderTextColor={colors.darkGrey}
          onChangeText={(text) => {
            setUsername(text);
            setWarningValue(0);
          }}></TextInput>
      </View>
    );
  };

  const renderUsernameWarning = () => {
    return (
      <View style={{marginLeft: 38, marginTop: 5}}>
        <Text style={{fontSize: 12, color: colors.deepred}}>
          {strings.warning_1}
        </Text>
      </View>
    );
  };

  const renderTextField2 = () => {
    return (
      <View
        style={
          // email === '' || warningvalue2 === 1 || warningvalue2 === 2
          (email === '' && warningvalue2 === 1) || warningvalue2 === 2
            ? styles.inputField2
            : styles.inputField
        }>
        <Image style={styles.icons} source={imagePath.mailIcon}></Image>
        <TextInput
          style={styles.inputSection}
          placeholder={strings.emailId}
          placeholderTextColor={colors.darkGrey}
          onChangeText={(emailText) => {
            setEmail(emailText);
            setWarningValue2(0);
          }}></TextInput>
      </View>
    );
  };

  const renderEmailWarning1 = () => {
    return (
      <View style={{marginLeft: 38, marginTop: 5}}>
        <Text style={{fontSize: 12, color: colors.deepred}}>
          {strings.warning_2}
        </Text>
      </View>
    );
  };

  const renderEmailWarning2 = () => {
    return (
      <View style={{marginLeft: 38, marginTop: 5}}>
        <Text style={{fontSize: 12, color: colors.deepred}}>
          {strings.warning_3}
        </Text>
      </View>
    );
  };

  const renderTextField3 = () => {
    return (
      <View
        style={
          (phoneNumber === '' && warningvalue3 === 1) || warningvalue3 === 2
            ? styles.inputField2
            : styles.inputField
        }>
        <Image style={styles.icons} source={imagePath.callIcon}></Image>
        <TextInput
          style={styles.inputSection}
          placeholder={strings.phoneNumber}
          placeholderTextColor={colors.darkGrey}
          keyboardAppearance={'default'}
          keyboardType={'numeric'}
          onChangeText={(text) => {
            setPhoneNumber(text);
            setWarningValue3(0);
          }}></TextInput>
      </View>
    );
  };

  const renderPhoneNumberWarning1 = () => {
    return (
      <View style={{marginLeft: 38, marginTop: 5}}>
        <Text style={{fontSize: 12, color: colors.deepred}}>
          {strings.warning_4}
        </Text>
      </View>
    );
  };

  const renderPhoneNumberWarning2 = () => {
    return (
      <View style={{marginLeft: 38, marginTop: 5}}>
        <Text style={{fontSize: 12, color: colors.deepred}}>
          {strings.warning_5}
        </Text>
      </View>
    );
  };

  const renderTextField4 = () => {
    return (
      <View
        style={
          (password === '' && warningvalue4 === 1) || warningvalue4 === 2
            ? styles.inputField2
            : styles.inputField
        }>
        <Image style={styles.icons} source={imagePath.lockIcon}></Image>
        <TextInput
          style={styles.inputSection}
          placeholder={strings.password}
          secureTextEntry={passwordTextDisplayStatus}
          placeholderTextColor={colors.darkGrey}
          onChangeText={(text) => {
            setPassword(text);
            setWarningValue4(0);
          }}></TextInput>
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

  const renderPasswordWarning1 = () => {
    return (
      <View style={{marginLeft: 38, marginTop: 5}}>
        <Text style={{fontSize: 12, color: colors.deepred}}>
          {strings.warning_6}
        </Text>
      </View>
    );
  };

  const renderPasswordWarning2 = () => {
    return (
      <View style={{marginLeft: 38, marginTop: 5}}>
        <Text style={{fontSize: 12, color: colors.deepred}}>
          {strings.warning_7}
        </Text>
      </View>
    );
  };

  const signUpButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          validateUsername();
          validateEmail(email);
          validatePhoneNumber(phoneNumber);
          validatePassword();
        }}>
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
          {warningvalue === 1 ? renderUsernameWarning() : <View></View>}
          {renderTextField2()}
          {/* {warningvalue2 === 1 || warningvalue === 2 ? (
            renderEmailWarning()
          ) : (
            <View></View>
          )} */}
          {warningvalue2 === 1 ? renderEmailWarning1() : <View></View>}
          {warningvalue2 === 2 ? renderEmailWarning2() : <View></View>}

          {renderTextField3()}
          {warningvalue3 === 1 ? renderPhoneNumberWarning1() : <View></View>}
          {warningvalue3 === 2 ? renderPhoneNumberWarning2() : <View></View>}
          {renderTextField4()}
          {warningvalue4 === 1 ? renderPasswordWarning1() : <View></View>}
          {warningvalue4 === 2 ? renderPasswordWarning2() : <View></View>}
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
