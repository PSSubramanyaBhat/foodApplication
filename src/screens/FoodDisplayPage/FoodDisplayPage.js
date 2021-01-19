import React, {useState} from 'react';
import colors from '../../constants/colors';
import {MapIcon} from '../../constants/commonSVGFiles';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/strings';
import foodAPIMockData from '../../constants/foodAPIMockData';
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
import {color} from 'react-native-reanimated';

const BETWEEN_GRID_WIDTH = Platform.OS === 'ios' ? 14 : 9;

const FoodDisplayPage = ({navigation}) => {
  // const [selectFoodCategory, setSelectFoodCategory] = useState(false);
  const itemdata = foodAPIMockData[0].menu;
  return (
    <>
      <StatusBar
        backgroundColor={colors.transparentBackgroundColor}
        barStyle="light-content"
      />
      <SafeAreaView backgroundColor={colors.transparentBackgroundColor} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.topSection}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <View
                style={[
                  styles.topSectionButton,
                  {backgroundColor: colors.white, marginLeft: 25},
                ]}>
                <Image style={styles.icons2} source={imagePath.backArrowIcon} />
              </View>
            </TouchableOpacity>
            <View style={[styles.topSectionButton, styles.bagIconView]}>
              <Image style={styles.icons} source={imagePath.bagIcon} />
            </View>
          </View>
          <View style={styles.centralJustifiedView}>
            <Image
              style={styles.foodImageDisplay}
              source={imagePath.burgerImage}
            />
          </View>

          <View style={styles.centralJustifiedView}>
            <View style={styles.foodInfoContainer}>
              <View style={styles.textSection}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '500',
                    marginLeft: 13,
                    marginTop: 15,
                  }}>
                  Special Cheese Burger
                </Text>
                <View style={{flexDirection: 'row', marginLeft: 3}}>
                  <Image style={styles.mapIcon} source={imagePath.mapIcon} />
                  <Text style={{marginTop: 10, fontSize: 12}}>
                    Ayodhya Hotel, PVS, Mangalore
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    marginBottom: 20,
                    marginLeft: 4,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image style={styles.mapIcon} source={imagePath.cashIcon} />
                    <Text style={{marginTop: 8, marginLeft: 2}}>$15.00</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={styles.mapIcon}
                      source={imagePath.startIcon}
                    />
                    <Text style={{marginTop: 9}}>4.5</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={styles.mapIcon}
                      source={imagePath.timerIcon}
                    />
                    <Text style={{marginTop: 9}}>15-20 mins</Text>
                  </View>
                </View>
              </View>
              <View style={styles.buttonSection}>
                <View style={[styles.plusMinusView, {marginTop: 10}]}>
                  <Image
                    style={styles.plusMinusIcons}
                    source={imagePath.addIcon}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    paddingLeft: 12,
                    paddingTop: 5,
                  }}>
                  2
                </Text>
                <View style={[styles.plusMinusView, {marginTop: 5}]}>
                  <Image
                    style={styles.plusMinusIcons}
                    source={imagePath.minusIcon}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topSectionButton: {
    height: 45,
    width: 46,
    // backgroundColor: 'red',
    marginHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  plusMinusView: {
    height: 35,
    width: 35,
    backgroundColor: colors.secondaryGold,
    // marginHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    // marginTop: 15,
    marginRight: 10,
  },
  bagIconView: {
    backgroundColor: colors.secondaryGold,
    borderColor: colors.gold,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    marginRight: 24,
  },
  icons: {
    // marginLeft: 5,
    marginTop: 5,
    height: 30,
    width: 30,
  },
  icons2: {
    marginLeft: -3,
    marginTop: 10,
    height: 25,
    width: 25,
  },
  plusMinusIcons: {
    // marginLeft: 5,
    marginTop: 5,
    height: 25,
    width: 25,
  },
  mapIcon: {
    marginTop: 8,
    marginLeft: 7,
    height: 18,
    width: 18,
  },
  centralJustifiedView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodImageDisplay: {
    height: 250,
    width: 300,
    marginTop: -20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  foodInfoContainer: {
    backgroundColor: colors.white,
    width: '85%',
    // height: '53%',
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default FoodDisplayPage;
