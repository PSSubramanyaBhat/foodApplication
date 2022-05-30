import React, {useEffect, useState, useRef} from 'react';
import {connect} from 'react-redux'; // THIS IS FOR CLASS COMPONENT STYLE to connect Redux store to State
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import colors from '../../constants/colors';
import strings from '../../constants/strings';
import imagePath from '../../constants/imagePath';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';
import CountryPicker from 'react-native-region-country-picker';
// import {formatString} from '../../utils/commonFunction';

import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';

const KitchenGramRegister = ({navigation, route}) => {
  const dispatch = useDispatch();

  const [userName, setUsername] = useState('');
  const [registrationModeIcon, setRegistrationModeIcon] = useState(
    imagePath.emailIcon,
  );
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(
    false,
  );

  const [countryFlag, setCountryFlag] = useState('🇮🇳');
  const [countryCode, setCountryCode] = useState(91); //data?.emoji

  const [warningMessage, setWarningMessage] = useState('');
  // a state to be maintained for saved users list of credentials

  const decayAnimationVariable = useRef(new Animated.Value(-500)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  /*
  this.props.getActivityResult(data, token); // THIS IS HOW CLASS COMPONENTS ACTION FILE IS DISPATCHED DIRECTLY
  */

  // THIS IS HOW FUNCTION COMPONENTS OR HOOK STYLE ACTION FILE IS DISPATCHED DIRECTLY
  /*
  dispatch(
      deleteProposalFormFieldAction(
        leadId,
        applicationId,
        'bankDetailsLA',
        permissionMap,
        cloneDeep(bankDetailsLADefaults),
      ),
    );
  */

  let countryPickerRef;

  /* use countryPickerRef
   countryPickerRef.open();
   countryPickerRef.close();
  */

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  }, [fadeAnim]);

  const handleDecayAnimation = () => {
    decayAnimationVariable.setValue(-470);
    Animated.decay(decayAnimationVariable, {
      toValue: 50,
      duration: 50,
      velocity: 0.95,
      deceleration: 0.998,
      useNativeDriver: true,
    }).start();
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const animationDelay = async () => {
    await delay(0);
    handleDecayAnimation();
  };

  useEffect(() => {
    animationDelay();
  }, []);

  const renderFacebookIcon = () => {
    return (
      <TouchableOpacity>
        <ImageBackground
          style={[
            styles.roundIcons,
            {backgroundColor: colors.deepBlue, borderRadius: 30},
          ]}>
          <Image
            style={styles.iconDimension2}
            source={imagePath.facebookIcon}></Image>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderGoogleIcon = () => {
    return (
      <TouchableOpacity>
        <ImageBackground
          style={[
            styles.roundIcons,
            {backgroundColor: colors.vermillion, borderRadius: 30},
          ]}>
          <Image
            style={styles.iconDimension}
            source={imagePath.googleIcon}></Image>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const displayUserName = () => {
    const tempUserName = userName;
    let finalUserName;
    finalUserName = tempUserName[0].toLowerCase() + tempUserName.slice(1);
    return finalUserName;
  };

  const registrationMode = () => {
    if (registrationModeIcon === imagePath.emailIcon) {
      setRegistrationModeIcon(imagePath.mobileIcon);
    } else if (registrationModeIcon === imagePath.mobileIcon) {
      setRegistrationModeIcon(imagePath.profileIcon);
    } else if (registrationModeIcon === imagePath.profileIcon) {
      setRegistrationModeIcon(imagePath.emailIcon);
    }
  };

  // function formatString(str, replacementAray) {
  //   /*
  //     toReplaceString, byNewString
  //     */
  //   console.log('YUVI', str[0]);
  //   return str;
  // }

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          flexDirection: 'row',
          marginLeft: 20,
          marginTop: 50,
        }}>
        <Image
          style={{
            height: 12,
            width: 12,
            marginTop: 3,
          }}
          source={imagePath.backChevronIcon}
        />
        <Text style={{marginLeft: 5, fontFamily: 'Lato-Regular'}}>Back</Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Animated.Image
          style={{
            height: 120,
            width: 120,
            opacity: fadeAnim,
            zIndex: 1,
            // transform: [{translateY: decayAnimationVariable}],
          }}
          source={imagePath.pizzaIcon}
        />
        <Text
          style={{
            color: colors.black,
            fontWeight: 'bold',
            marginTop: 5,
            textAlign: 'center',
            fontSize: 20,
            fontFamily: 'Lato-Regular',
          }}>
          KitchenGRAM
        </Text>
        <Animated.View
          style={{
            backgroundColor: colors.white,
            width: '90%',
            marginTop: 20,
            shadowColor: colors.vermillionLight,
            shadowOpacity: 0.26,
            shadowOffset: {width: 0, height: 10},
            shadowRadius: 14,
            elevation: 3,
            // borderRadius: 510 // interesting design check it out
            borderRadius: 15,
            transform: [{translateY: decayAnimationVariable}],
            // opacity: fadeAnim,
          }}>
          <Text
            style={{
              fontFamily: 'Raleway-ExtraBold',
              fontSize: 16,
              marginTop: 20,
              alignSelf: 'center',
            }}>
            Create Account
          </Text>
          <CountryPicker
            countryPickerRef={(ref) => {
              countryPickerRef = ref;
            }}
            enable={true}
            darkMode={true}
            countryCode={'IN'}
            containerConfig={{
              showFlag: false,
              showCallingCode: false,
              showCountryName: false,
              showCountryCode: false,
            }}
            modalConfig={{
              showFlag: true,
              showCallingCode: true,
              showCountryName: true,
              showCountryCode: true,
            }}
            onSelectCountry={(data) => {
              console.log('DATA 1', typeof data.emoji);
              setCountryCode(data?.callingCode);
              setCountryFlag(data?.emoji);
            }}
            onInit={(data) => {
              // console.log('DATA 2', data);
            }}
            onOpen={() => {
              console.log('Open / Close');
            }}
            onClose={() => {
              console.log('Close / Open');
            }}
            containerStyle={{
              container: {},
              flagStyle: {},
              callingCodeStyle: {},
              countryCodeStyle: {},
              countryNameStyle: {},
            }}
            modalStyle={{
              container: {},
              searchStyle: {fontFamily: 'Lato-Regular'},
              tileStyle: {fontFamily: 'Lato-Regular'},
              itemStyle: {
                itemContainer: {},
                flagStyle: {},
                countryCodeStyle: {fontFamily: 'Lato-Regular'},
                countryNameStyle: {fontFamily: 'Lato-Regular'},
                callingNameStyle: {fontFamily: 'Lato-Regular'},
              },
            }}
            title={'Country'}
            searchPlaceholder={'Search'}
            showCloseButton={true}
            showModalTitle={true}
          />

          <Text
            style={{
              // marginLeft: 5,
              fontFamily: 'Lato-Regular',
              color: colors.grey,
              marginLeft: 15,
              marginTop: 25,
              fontSize: 14,
            }}>
            Username*
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: registrationModeIcon === imagePath.mobileIcon ? 5 : 0,
              marginBottom:
                registrationModeIcon === imagePath.mobileIcon ? 5 : 0,
            }}>
            {registrationModeIcon === imagePath.mobileIcon ? (
              <TouchableOpacity
                onPress={() => {
                  countryPickerRef.open();
                }}>
                <View
                  style={{
                    borderColor: colors.vermillion,
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingHorizontal: 5,
                    marginLeft: 15,
                    height: 35,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lato-Bold',
                      marginTop: 5,
                    }}>
                    {countryFlag}+{countryCode}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null}

            <TextInput
              style={{
                fontFamily: 'Lato-Bold',
                marginTop: 10,
                marginBottom: 10,
                flex: 1,
                paddingLeft: 15,
              }}
              placeholder={
                // Use formatString('abc') to replace a small portion of the string
                registrationModeIcon === imagePath.mobileIcon
                  ? strings.mobileNumberPlaceholder
                  : registrationModeIcon === imagePath.emailIcon
                  ? strings.emailPlaceholder
                  : strings.userNamePlaceholder
              }
              placeholderTextColor={colors.grey}
              onChangeText={(text) => {
                setUsername(text);
                //   setWarningValue(0);
              }}
              // value={userName.toLowerCase()}
              value={userName !== '' && displayUserName()}
              keyboardType={
                registrationModeIcon === imagePath.mobileIcon
                  ? 'number-pad'
                  : 'default'
              }
              onBlur={() => {}}
            />
            <TouchableOpacity
              onPress={() => {
                registrationMode();
              }}>
              <Image
                style={{
                  height: 25,
                  width: 25,
                  marginTop: 5,
                  marginRight: 10,
                }}
                height={25}
                width={25}
                source={registrationModeIcon}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderColor: colors.grey,
              borderBottomWidth: 1,
              marginHorizontal: 10,
            }}
          />
          <Text
            style={{
              marginLeft: 5,
              fontFamily: 'Lato-Regular',
              color: colors.grey,
              marginLeft: 15,
              marginTop: 20,
              fontSize: 14,
            }}>
            Password*
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                fontFamily: 'Lato-Bold',
                paddingLeft: 15,
                marginTop: 10,
                marginBottom: 10,
                flex: 1,
              }}
              secureTextEntry={passwordVisibility ? false : true}
              placeholder={strings.passwordPlaceHolder}
              placeholderTextColor={colors.grey}
              onChangeText={(text) => {
                //   setUsername(text);
                //   setWarningValue(0);
              }}
              onBlur={() => {}}
            />
            <TouchableOpacity
              onPress={() => {
                setPasswordVisibility(!passwordVisibility);
              }}>
              <Image
                style={{
                  height: 25,
                  width: 25,
                  marginTop: 5,
                  marginRight: 10,
                }}
                height={25}
                width={25}
                source={
                  passwordVisibility
                    ? imagePath.passwordVisibilityIcon
                    : imagePath.passwordHideIcon
                }
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderColor: colors.grey,
              borderBottomWidth: 1,
              marginHorizontal: 10,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              marginLeft: 5,
              fontFamily: 'Lato-Regular',
              color: colors.grey,
              marginLeft: 15,
              marginTop: 20,
              fontSize: 14,
            }}>
            Confirm Password*
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                fontFamily: 'Lato-Bold',
                paddingLeft: 15,
                marginTop: 10,
                marginBottom: 10,
                flex: 1,
              }}
              secureTextEntry={confirmPasswordVisibility ? false : true}
              placeholder={strings.confirmPasswordPlaceHolder}
              placeholderTextColor={colors.grey}
              onChangeText={(text) => {
                //   setUsername(text);
                //   setWarningValue(0);
              }}
              onBlur={() => {}}
            />
            <TouchableOpacity
              onPress={() => {
                setConfirmPasswordVisibility(!confirmPasswordVisibility);
              }}>
              <Image
                style={{
                  height: 25,
                  width: 25,
                  marginTop: 5,
                  marginRight: 10,
                }}
                height={25}
                width={25}
                source={
                  confirmPasswordVisibility
                    ? imagePath.passwordVisibilityIcon
                    : imagePath.passwordHideIcon
                }
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderColor: colors.grey,
              borderBottomWidth: 1,
              marginHorizontal: 10,
              marginBottom: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              showMessage({
                message: 'Logged in Successfully',
                description:
                  'Do you want to save the user to save the credential?',
                type: 'success',
                // type: 'info',
                // type: 'error',
                textStyle: {
                  fontFamily: 'Lato-Regular',
                  color: colors.white,
                },
                titleStyle: {
                  fontFamily: 'Lato-Bold',
                  color: colors.white,
                },
                onPress: () => {},
                autoHide: false, // Integrate this once a buttonis added to the flashMessage
              });
            }}
            style={{
              backgroundColor: colors.vermillionLight,
              width: 180,
              height: 40,
              alignSelf: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: 'Raleway-Regular',
                color: colors.white,
                alignSelf: 'center',
              }}>
              Register
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Raleway-Bold',
              fontSize: 14,
              marginTop: 15,
              marginBottom: 10,
              alignSelf: 'center',
            }}>
            Or Register using social medias
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            {renderFacebookIcon()}
            {renderGoogleIcon()}
          </View>
        </Animated.View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 55,
        }}>
        <Text
          style={{
            fontFamily: 'Raleway-Bold',
            fontSize: 14,
            marginBottom: 30,
          }}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              fontFamily: 'Lato-Regular',
              color: colors.linkBlue,
              fontSize: 14,
              marginLeft: 5,
              alignSelf: 'flex-end',
              textDecorationLine: 'underline',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <FlashMessage position="top" />
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 5,
    height: '100%',
    width: '100%',
  },
  roundIcons: {
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

export default KitchenGramRegister;

/*
1.) Build a country code picker - DONE
2.) Build Login screen properly
3.) User name placehodler text replace properly
4.) formatString function build
5.) Build common functions and common components for login and register page.
6.) While saving user data use Proper backend
7.) Crash analytics integrate
8.) Start lerning backend from Saturday ask Reiona for help
9.) Also start flutter and other Udemy course.
*/
