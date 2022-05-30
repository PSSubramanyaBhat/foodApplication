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
import {changeCount} from '../../actions/userDetailActions';

const KitchenGramLogin = ({navigation, route}) => {
  const dispatch = useDispatch();

  const countValue = useSelector((state) => state?.userDetails?.count);

  // const countValue = useSelector((state) => state);

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');
  const [dummyCount, setDummyCount] = useState(countValue); // In CLASS STYLE this.props.countValue that is destuctured from mapStateToProps
  // a state to be maintained for saved users list of credentials

  console.log('countValue', countValue);

  const decayAnimationVariable = useRef(new Animated.Value(-500)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    dispatch(changeCount(dummyCount));
  }, [dummyCount]);
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
          marginTop: 80,
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
          source={imagePath.burgerIcon}
        />
        <Text
          style={{
            color: colors.black,
            fontWeight: 'bold',
            marginTop: 10,
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
              fontSize: 25,
              alignSelf: 'center',
              marginTop: 15,
            }}>
            Namaste
          </Text>
          <Text
            style={{
              fontFamily: 'Raleway-ExtraBold',
              fontSize: 16,
              marginTop: 5,
              alignSelf: 'center',
            }}>
            Sign in to your account
          </Text>
          <Text
            style={{
              marginLeft: 5,
              fontFamily: 'Lato-Regular',
              color: colors.grey,
              marginLeft: 15,
              marginTop: 50,
              fontSize: 14,
            }}>
            Username*
          </Text>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                fontFamily: 'Lato-Bold',
                marginTop: 10,
                marginBottom: 10,
                flex: 1,
                paddingLeft: 15,
              }}
              placeholder={strings.emailPlaceHolder}
              placeholderTextColor={colors.grey}
              onChangeText={(text) => {
                setUsername(text);
                //   setWarningValue(0);
              }}
              // value={userName.toLowerCase()}
              value={userName !== '' && displayUserName()}
              onBlur={() => {}}
            />
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
              secureTextEntry={true}
              placeholder={strings.passwordPlaceHolder}
              placeholderTextColor={colors.grey}
              onChangeText={(text) => {
                //   setUsername(text);
                //   setWarningValue(0);
              }}
              onBlur={() => {}}
            />
          </View>
          <View
            style={{
              borderColor: colors.grey,
              borderBottomWidth: 1,
              marginHorizontal: 10,
              marginBottom: 10,
            }}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                color: colors.linkBlue,
                marginTop: 5,
                fontSize: 14,
                marginRight: 10,
                alignSelf: 'flex-end',
                textDecorationLine: 'underline',
              }}>
              Forgot you Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDummyCount((count) => count + 1);
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
              Login {countValue}
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
            Or Login using social medias
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
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('KitchenGramRegister');
          }}>
          <Text
            style={{
              fontFamily: 'Lato-Regular',
              color: colors.linkBlue,
              fontSize: 14,
              marginLeft: 10,
              alignSelf: 'flex-end',
              textDecorationLine: 'underline',
            }}>
            Register Now
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

export default KitchenGramLogin;

// THIS METHOD IS FOR CLASS COMPONENT STYLE
/*
const mapStateToProps = (state, props) => {
  // const {offline, login, leadCreation, activityResult} = state;
  const {userDetails} = state;

  return {
    ...props,
    // channel,
    countValue: userDetails?.countReducer,
  };
};

export default connect(mapStateToProps, {
  changeCount,
})(KitchenGramLogin);
*/

// --------------------------------------------
// Redux for saving passwod and username.
// LEARM What is Redux Thunk. And other types of reduxes.
// onBlur use.
// maintain a DB for saving multiple users credentials
// if required integrate Firebase...
/// Crashanalytics integrate.
// Integrate online/firebase and local notification when new videos are uploaded
// Use AnimatedLottieView for animated tick after saving cedentials.
// try using different hooks like useContext, useMemo, ueRef, forwardRef, useImperativeHandle and so on.
// Segregate and optimize the app
// Also make it look awesome when app is rotated.
// Push it to personal git hub.
// PLAN TO MAKE A FULL FLEDGED VIDEO STREAMING + VIDEO UPLOADING + SUBSCRIPTION (MONEY) BASED ADDITIONAL FEATURE BASED APP
// Some feature that differentiates it from youtube and instagram...
// Give animated effects and all
// Try doing the same in flutter also
// Also try building a website also for this and a beautiful one if possible.
// Also try buildingan app fo that auto based concept of Rohan
// Finger print login system learn
// Payment portal learn
// IF Possible ty fixing the new react native pp creation issue and do npm install for these and evenually add this code there...
// Talk to Nimisha and Kiran
// Try learnbing Node.js and backend and buy a new domain.
// learn AWS
