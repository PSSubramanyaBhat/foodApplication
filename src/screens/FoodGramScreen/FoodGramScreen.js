import React from 'react';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FoodGramScreen = ({navigation, route}) => {
  return (
    <View>
      <LinearGradient
        // colors={['red', 'yellow', 'green']}
        colors={[colors.lightOrange, colors.vermillionLight]}
        style={styles.linearGradient}>
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
            marginTop: 130,
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 120,
              width: 120,
            }}
            source={imagePath.kitchenGramIcon}
          />
          <Text
            style={{
              color: colors.white,
              fontWeight: 'bold',
              marginTop: 10,
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'Lato-Regular',
            }}>
            KitchenGRAM
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            height: 50,
            marginTop: 110,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('KitchenGramLogin');
            }}
            style={{
              backgroundColor: colors.white,
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: 'Raleway-Regular',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('KitchenGramRegister');
            }}
            style={{
              backgroundColor: colors.white,
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: 'Raleway-Regular',
              }}>
              Register Now
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: colors.white,
            fontWeight: 'bold',
            marginTop: 35,
            textAlign: 'center',
            fontFamily: 'Lato-Regular',
          }}>
          Now! Quick Login Use Touch ID
        </Text>

        {/* Check the touchable opacity , ot clicks even on the side of the image */}
        <TouchableOpacity>
          <Image
            style={{
              height: 65,
              width: 65,
              marginTop: 60,
              alignSelf: 'center',
              // backgroundColor: 'red',
            }}
            source={imagePath.fingerPrint}
          />
        </TouchableOpacity>

        <Text
          style={{
            color: colors.white,
            fontWeight: 'bold',
            marginTop: 10,
            textAlign: 'center',
            fontFamily: 'Lato-Regular',
          }}>
          Place your thumb here
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 5,
    height: '100%',
    width: '100%',
  },
});

export default FoodGramScreen;
