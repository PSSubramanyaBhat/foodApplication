import React, {useState} from 'react';
import colors from '../../constants/colors';
// import {MapIcon} from '../../constants/commonSVGFiles';
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
// import {color} from 'react-native-reanimated';
// import {ClipPath} from 'react-native-svg';

const BETWEEN_GRID_WIDTH = Platform.OS === 'ios' ? 14 : 9;

const MyOrdersPage = ({navigation}) => {
  // const [selectFoodCategory, setSelectFoodCategory] = useState(false);
  const [toggleSection, setToggleSection] = useState(true);
  const itemdata = foodAPIMockData[0].menu;
  //   const dishNameData = foodAPIMockData[0].categoryName;
  const ingredientData = foodAPIMockData[0].menu[0].ingredientImages;
  const ingredientNameData = foodAPIMockData[0].menu[0].ingredients;
  const hotelData = foodAPIMockData[0].alternateHotels;

  const [currentFoodOrderCount, setCurrentFoodOrderCount] = useState(0);
  const [addToFavourite, setAddToFavourite] = useState(false);
  const [longPressFlag, setLongPressFlag] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState(hotelData[0].hotelName);

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
              <View style={styles.orderCountContainer}>
                <Text
                  style={{
                    color: colors.white,
                    fontWeight: '600',
                    marginLeft: 5,
                    marginTop: 1,
                    fontSize: 12,
                  }}>
                  0
                </Text>
              </View>
              <Image style={styles.icons} source={imagePath.bagIcon} />
            </View>
          </View>

          <View style={{flex: 1}}>
            <View>
              <Text style={styles.ingredient_review_Section}>My Orders</Text>
            </View>

            <FlatList
              style={{marginLeft: 0, marginTop: 15}}
              data={hotelData}
              // horizontal={true}
              // showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => {
                return item.id;
              }}
              renderItem={({item, index}) => (
                <View key={index} style={{marginLeft: 20}}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      onPress={() => {
                        setLongPressFlag(false);
                        setSelectedOrder(item.hotelName);
                      }}
                      onLongPress={() => {
                        setLongPressFlag(true);
                        setSelectedOrder(item.hotelName);
                      }}
                      style={[
                        styles.hotelInfoContainer,
                        {
                          // shadowColor: '#000000',
                          shadowColor:
                            longPressFlag && selectedOrder === item.hotelName
                              ? colors.borderGrey
                              : colors.white,
                          shadowOffset: {width: 4, height: 2},
                          shadowOpacity: 0.9,
                          shadowRadius: 3,
                          elevation: longPressFlag ? 3 : 0,
                          width:
                            longPressFlag && selectedOrder === item.hotelName
                              ? '86%'
                              : '83%',
                        },
                      ]}>
                      <Image
                        style={styles.hotelImageView}
                        source={hotelData[index].hotelImage}
                      />
                      <View style={styles.hotelInfoView}>
                        <Text style={{fontSize: 20, fontWeight: '600'}}>
                          Hotel {hotelData[index].hotelName}
                          {/* Hotel */}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginLeft: -11,
                            // flexWrap: 'wrap',
                            // flex: 1,
                          }}>
                          <Image
                            style={styles.mapIcon}
                            source={imagePath.mapIcon}
                          />
                          <Text
                            style={{
                              paddingTop: 9,
                              paddingLeft: 2,
                              fontSize: 12,
                              // flexShrink: 1,
                              // flexWrap: 'wrap',
                              // width: 150,
                            }}>
                            {hotelData[index].hotelLocation},{' '}
                            {hotelData[index].hotelArea},{' '}
                            {/* {hotelData[index].hotelState} */}
                            {/* I WOULD LIKE TO SHOW the complete Map Via a dialogue box which appeares when I hover the cursor/tap on map icon... and then can connect to Maps/Google Maps */}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginLeft: -11}}>
                          <Image
                            style={styles.mapIcon}
                            source={imagePath.startIcon}
                          />
                          <Text
                            style={{
                              paddingTop: 7,
                              paddingLeft: 2,
                              fontSize: 16,
                            }}>
                            {hotelData[index].hotelRating} stars
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    {longPressFlag && selectedOrder === item.hotelName && (
                      <TouchableOpacity>
                        <View
                          style={[
                            styles.plusMinusView,
                            {
                              marginTop: 55,
                              marginLeft: 11,
                              backgroundColor: colors.vermillion,
                              borderColor: colors.white,
                              borderWidth: 1,
                              shadowColor: colors.vermillion,
                              shadowOffset: {width: 3, height: 3},
                              shadowOpacity: 0.9,
                              shadowRadius: 3,
                              elevation: 3,
                            },
                          ]}>
                          {/* <Text
                            style={{
                              fontSize: 25,
                              fontWeight: 'bold',
                              color: colors.white,
                              marginTop: -3,
                            }}>
                            𝘅
                          </Text> */}
                          <Image
                            style={styles.cancelIcon}
                            source={imagePath.cancelIconWhite}
                          />
                        </View>
                      </TouchableOpacity>
                    )}

                    {!longPressFlag && (
                      <View style={styles.buttonSection}>
                        <TouchableOpacity>
                          <View
                            style={[
                              styles.plusMinusView,
                              {marginTop: 10, backgroundColor: colors.darkBg2},
                            ]}>
                            {/* <Image
                            style={styles.plusMinusIcons}
                            source={imagePath.addIcon}
                          /> */}
                            <Text
                              style={{
                                // fontSize: 20,
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: colors.white,
                              }}>
                              +
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '600',
                            paddingLeft: 8,
                            paddingTop: 5,
                            marginLeft: 5,
                          }}>
                          0
                        </Text>
                        <TouchableOpacity>
                          <View
                            style={[
                              styles.plusMinusView,
                              {marginTop: 5, backgroundColor: colors.darkBg2},
                            ]}>
                            {/* <Image
                            style={styles.plusMinusIcons}
                            source={imagePath.minusIcon}
                          /> */}
                            <Text
                              style={{
                                // fontSize: 20,
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: colors.white,
                              }}>
                              -
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
              )}
            />

            <View
              style={{
                height: 20,
                marginTop: 20,
                backgroundColor: colors.primaryColor,
              }}></View>
          </View>
        </View>
      </ScrollView>
      <View style={{marginBottom: 20}}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity>
            <View style={styles.orderButton}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  marginTop: 14,
                }}>
                Order Now $80
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // flexDirection: 'column',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topSectionButton: {
    height: 45,
    width: 46,
    // backgroundColor: 'red',
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  plusMinusView: {
    height: 35,
    width: 35,
    // backgroundColor: colors.secondaryGold,
    // backgroundColor: colors.darkBg2,
    // marginHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    // marginTop: 15,
    marginRight: 10,
    justifyContent: 'center',
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
    marginTop: -5,
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
  cancelIcon: {
    // marginTop: 8,
    // marginLeft: 7,
    height: 18,
    width: 18,
  },
  favouriteIcon: {
    marginTop: -12,
    marginLeft: 1,
    height: 18,
    width: 18,
  },
  centralJustifiedView: {
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
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
    marginTop: 10,
    marginLeft: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ingredient_review_Section: {
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 30,
    marginTop: 25,
  },
  foodType: {
    backgroundColor: colors.white,
    height: 80,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.grey,
    borderStyle: 'solid',
    // opacity: 0.9,
    borderRadius: 10,
    // backgroundColor: colors.secondaryGold,
  },
  hotelInfoContainer: {
    backgroundColor: colors.white,
    // width: '90%',//ORIGINAL SIZE
    // width: '83%',
    // height: '53%',
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  hotelImageView: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  hotelInfoView: {
    flexDirection: 'column',
    marginLeft: 0,
    marginTop: 20,
  },
  orderCountContainer: {
    height: 22,
    width: 22,
    backgroundColor: colors.darkBg,
    borderWidth: 2,
    borderColor: colors.transparentColor,
    borderStyle: 'solid',
    borderRadius: 5,
    zIndex: 1,
    marginTop: -10,
    marginLeft: 35,
  },
  orderButton: {
    // height: 45,
    height: 55,
    // width: 153,
    width: 375,
    // marginLeft: 15,
    marginTop: 15,
    borderWidth: 2,
    borderColor: colors.white,
    borderStyle: 'solid',
    borderRadius: 10,
    justifyContent: 'center',
    // fontSize: 25,
    // textAlign: 'center',
    flexDirection: 'row',
    backgroundColor: colors.secondaryGold,
  },
  buttonSection: {
    marginTop: 10,
    marginLeft: 15,
  },
});
export default MyOrdersPage;
