import React, {useState} from 'react';
import colors from '../../constants/colors';
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

const BETWEEN_GRID_WIDTH = Platform.OS === 'ios' ? 14 : 9;

const SearchPage = ({navigation}) => {
  // const [selectFoodCategory, setSelectFoodCategory] = useState(false);

  const itemdata = foodAPIMockData[0].menu;
  const hotelData = foodAPIMockData[0].alternateHotels;

  const foodInfoData = foodAPIMockData[0].menu;

  const [selectSearchType, setSelectSearchType] = useState(false);
  const [selectedHotelName, setSelectedHotelName] = useState(
    hotelData[0].hotelName,
  );
  return (
    <>
      <StatusBar
        backgroundColor={colors.transparentBackgroundColor}
        barStyle="light-content"
      />
      <SafeAreaView backgroundColor={colors.transparentBackgroundColor} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.searchBarSection}>
            <View style={styles.searchBox}>
              <TouchableOpacity>
                <Image style={styles.icons2} source={imagePath.searchIcon} />
              </TouchableOpacity>
              <TextInput
                style={{marginLeft: 12, fontSize: 13, letterSpacing: 0.01}}
                placeholder={
                  selectSearchType
                    ? 'Search for food'
                    : 'Search for hotel / restaurant'
                }
                placeholderTextColor={colors.darkGrey}></TextInput>
            </View>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('FoodDisplayPage');
                setSelectSearchType(!selectSearchType);
              }}>
              <View style={styles.serachTypeButton}>
                {/* <View style={styles.orderCountContainer}>
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
                </View> */}

                {/* <Image style={styles.icons} source={imagePath.optionIcon2} /> */}
                {selectSearchType === false ? (
                  <Image style={styles.icons} source={imagePath.hotelFilled} />
                ) : (
                  <Image style={styles.icons} source={imagePath.fastFoodIcon} />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {selectSearchType === true && (
          <Text
            style={{
              fontSize: 14,
              marginLeft: 25,
              marginTop: 25,
              // fontWeight: 'bold',
              letterSpacing: 0.01,
            }}>
            11 results found for "Pasta"
          </Text>
        )}

        {/* Food Search Type */}
        {selectSearchType === true && (
          <FlatList
            style={{
              marginLeft: 0,
              marginTop: 10,
              height: '100%',
              // backgroundColor: 'red',
            }}
            data={foodInfoData}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={({item, index}) => (
              <View key={index} style={styles.centralJustifiedView}>
                <View
                  style={[
                    styles.foodInfoContainer,
                    {
                      // backgroundColor:
                      //   index % 2 === 0 ? colors.white : colors.gold2,
                      // borderColor: index % 2 === 0 ? colors.grey : colors.white,

                      backgroundColor: colors.white,
                      // borderColor: colors.grey,
                      // borderWidth: 1,
                    },
                  ]}>
                  <Image style={styles.foodImageView} source={item.image} />
                  <View style={styles.foodInfoView}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        // letterSpacing: 0.01,
                      }}>
                      {item.itemName}
                    </Text>
                    {/* <View style={{flexDirection: 'row', marginLeft: -11}}>
                      {index % 2 === 0 && (
                        <Image
                          style={styles.mapIcon}
                          source={imagePath.startIcon}
                        />
                      )}
                      {index % 2 !== 0 && (
                        <Image
                          style={styles.mapIcon}
                          source={imagePath.starVermillion}
                        />
                      )}

                      <Image
                        style={styles.mapIcon}
                        source={imagePath.startIcon}
                      />
                      <Text
                        style={{paddingTop: 7, paddingLeft: 2, fontSize: 16}}>
                        {item.rating} stars
                      </Text>
                    </View> */}
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: -11,
                        // justifyContent: 'space-between',
                        // flex: 1,
                      }}>
                      <Image
                        style={styles.cashIcon}
                        source={imagePath.cashIcon}
                      />
                      <Text
                        style={{
                          paddingTop: 7,
                          paddingLeft: 5,
                          fontSize: 13,
                          fontWeight: '500',
                        }}>
                        ${item.cost}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        )}

        {/* Hotel Search Type */}
        {selectSearchType !== true && (
          <FlatList
            style={{marginLeft: 0, marginTop: 10}}
            data={hotelData}
            // horizontal={true}
            // showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedHotelName(item.hotelName);
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View key={index} style={styles.centralJustifiedView}>
                    <View
                      style={
                        // index % 2 === 0
                        selectedHotelName !== item.hotelName
                          ? styles.hotelInfoContainer
                          : styles.hotelInfoContainer2
                      }>
                      <Image
                        style={styles.hotelImageView}
                        source={hotelData[index].hotelImage}
                      />
                      <View style={styles.hotelInfoView}>
                        <Text
                          style={
                            // index % 2 === 0
                            selectedHotelName !== item.hotelName
                              ? {fontSize: 20, fontWeight: '600', marginTop: -5}
                              : {
                                  fontSize: 20,
                                  fontWeight: '700',
                                  color: colors.white,
                                  marginTop: -5,
                                }
                          }>
                          Hotel {hotelData[index].hotelName}
                          {/* Hotel */}
                        </Text>
                        <View style={{flexDirection: 'row', marginLeft: -11}}>
                          <Image
                            style={styles.mapIcon}
                            source={imagePath.mapIcon}
                          />
                          <Text
                            style={
                              // index % 2 === 0
                              selectedHotelName !== item.hotelName
                                ? {paddingTop: 9, paddingLeft: 2, fontSize: 12}
                                : {
                                    paddingTop: 9,
                                    paddingLeft: 2,
                                    fontSize: 12,
                                    fontWeight: '600',
                                    color: colors.white,
                                  }
                            }>
                            {hotelData[index].hotelLocation},{' '}
                            {hotelData[index].hotelArea},{' '}
                            {/* {hotelData[index].hotelState} */}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginLeft: -11}}>
                          <Image
                            style={styles.mapIcon}
                            source={imagePath.stateicon2}
                          />
                          <Text
                            style={
                              // index % 2 === 0
                              selectedHotelName !== item.hotelName
                                ? {paddingTop: 11, paddingLeft: 2, fontSize: 12}
                                : {
                                    paddingTop: 11,
                                    paddingLeft: 2,
                                    fontSize: 12,
                                    fontWeight: '600',
                                    color: colors.white,
                                  }
                            }>
                            {hotelData[index].hotelState}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginLeft: -11,
                            justifyContent: 'space-between',
                            // flex: 1,
                          }}>
                          <Text
                            style={
                              // index % 2 === 0
                              selectedHotelName !== item.hotelName
                                ? {
                                    paddingTop: 7,
                                    paddingLeft: 10,
                                    fontSize: 18,
                                    fontWeight: '500',
                                  }
                                : {
                                    paddingTop: 7,
                                    paddingLeft: 10,
                                    fontSize: 18,
                                    fontWeight: '600',
                                    color: colors.white,
                                  }
                            }>
                            {/* {hotelData[index].hotelRating} stars */}
                            $16.00
                          </Text>
                        </View>
                      </View>
                      {selectedHotelName === item.hotelName && (
                        <TouchableOpacity
                          style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            marginBottom: 15,
                          }}>
                          <View
                            style={{
                              height: 30,
                              width: 30,
                              backgroundColor: 'white',
                              alignItems: 'center',
                              borderRadius: 25,
                            }}>
                            <Image
                              style={styles.getLocationStyle}
                              source={imagePath.mapIcon}
                            />
                          </View>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                  {/* <View style={styles.buttonSection}>
                    <TouchableOpacity>
                      <View style={[styles.plusMinusView, {marginTop: 10}]}>
                        <Image
                          style={styles.plusMinusIcons}
                          source={imagePath.addIcon}
                        />
                      </View>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '600',
                        paddingLeft: 8,
                        paddingTop: 5,
                      }}>
                      0
                    </Text>
                    <TouchableOpacity>
                      <View style={[styles.plusMinusView, {marginTop: 5}]}>
                        <Image
                          style={styles.plusMinusIcons}
                          source={imagePath.minusIcon}
                        />
                      </View>
                    </TouchableOpacity>
                  </View> */}
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  headerImage: {
    width: '94%',
    // height: '65%',
    height: '95%',
    resizeMode: 'cover',
    marginTop: 20,
    marginHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'column',
  },
  headerFoodDisplay: {
    height: '74%',
    width: '85%',
    marginTop: 25,
    marginLeft: -22,
    borderWidth: 1,
    borderColor: colors.transparentColor,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: colors.transparentColor,
    flexDirection: 'row',
  },
  timeStampDisplay: {
    flexDirection: 'row',
    marginLeft: 7,
  },
  searchBarSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderColor: colors.deepBlue,
    // borderWidth: 1,
    // borderStyle: 'solid',
    marginTop: 10,
    // marginBottom: 10,
    marginLeft: 5,
    height: 45,
  },
  foodName: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.6,
    marginTop: 10,
    marginLeft: 13,
  },
  foodInfoSection: {
    flexDirection: 'column',
    // justifyContent: 'space-evenly',
  },
  orderButton: {
    height: 45,
    width: 113,
    marginLeft: 15,
    marginTop: 15,
    borderWidth: 2,
    borderColor: colors.transparentColor,
    borderStyle: 'solid',
    borderRadius: 10,
    justifyContent: 'center',
    // fontSize: 25,
    // textAlign: 'center',
    flexDirection: 'row',
    backgroundColor: colors.secondaryGold,
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
  timeBlock: {
    height: 35,
    width: 35,
    marginLeft: 6,
    marginTop: 10,
    backgroundColor: colors.darkBg,
    borderColor: colors.secondaryGold,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
    // marginTop:5,
    flexDirection: 'row',
    // alignSelf: 'center',
    // textAlign: 'center',
  },
  timeColor: {
    fontSize: 14,
    color: colors.white,
    fontWeight: '600',
    alignSelf: 'center',
    marginLeft: 6,
    paddingLeft: 1,
    // textAlign: 'center',
  },
  imageDisplay: {
    height: 140,
    // width: 180,
    width: 170,
  },
  offerDisplay: {
    height: 65,
    width: 65,
    backgroundColor: colors.darkBg,
    borderColor: colors.secondaryGold,
    borderWidth: 5,
    borderStyle: 'solid',
    borderRadius: 35,
    // zIndex: 1,
    marginTop: -65,
    // marginLeft: -5,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: 45,
    width: '75%',
    borderColor: colors.white,
    // borderColor: colors.grey,
    borderWidth: 1,
    borderStyle: 'solid',
    // borderRadius: 5,
    borderRadius: 25,
    marginLeft: 20,
    paddingTop: 5,
    paddingLeft: 10,
  },
  serachTypeButton: {
    height: 45,
    width: 45,
    // backgroundColor: colors.secondaryGold,
    // backgroundColor: colors.vermillionLight,
    backgroundColor: colors.darkBg2,
    borderColor: colors.gold,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    marginRight: 24,
    alignItems: 'center',
  },
  addButton: {
    height: 35,
    width: 35,
    backgroundColor: colors.secondaryGold,
    borderColor: colors.gold,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    marginRight: 12,
    alignItems: 'center',
  },
  icons: {
    // marginLeft: 5,
    // marginTop: -5,
    marginTop: 5,
    height: 30,
    width: 30,
  },
  icons2: {
    // marginLeft: 5,
    // marginTop: 4,
    // height: 30,
    // width: 30,
    marginTop: 8,
    height: 20,
    width: 20,
  },
  foodScrollView: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingLeft: 16,
  },
  foodType: {
    backgroundColor: colors.white,
    height: 45,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.transparentColor,
    borderStyle: 'solid',
    borderRadius: 10,
    // backgroundColor: colors.secondaryGold,
  },
  gridViewBg1: {
    height: 250,
    width: 170,
    borderWidth: 1,
    borderColor: colors.white,
    borderStyle: 'solid',
    borderRadius: 8,
    marginHorizontal: BETWEEN_GRID_WIDTH,
    marginTop: 20,
  },
  gridFoodName1: {
    fontSize: 16,
    marginLeft: 13,
    marginTop: 5,
    fontWeight: '600',
  },
  gridFoodType1: {
    fontSize: 12,
    marginLeft: 13,
    marginTop: 5,
    fontWeight: '500',
  },
  gridRating: {
    marginLeft: 2,
    marginTop: 4,
    fontSize: 12,
  },
  gridCost: {
    marginLeft: 13,
    marginTop: 8,
    fontSize: 19,
    fontWeight: '700',
  },
  gridImage: {
    height: 120,
    width: 145,
    backgroundColor: colors.primaryColor,
    marginTop: 10,
    marginLeft: 12,
    borderWidth: 1,
    borderColor: colors.primaryColor,
    borderStyle: 'solid',
    borderRadius: 8,
  },
  centralJustifiedView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hotelInfoContainer: {
    backgroundColor: colors.white,
    // width: '90%',
    // width: 350,
    width: 375,
    marginLeft: 20,
    // height: '53%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.grey,
    borderStyle: 'solid',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  hotelInfoContainer2: {
    backgroundColor: colors.darkBg2,
    // width: '90%',
    // width: 350,
    width: 375,
    marginLeft: 20,
    // height: '53%',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  foodInfoContainer: {
    // backgroundColor: colors.white,
    width: '100%',
    // height: '55%',
    // borderRadius: 10,
    // marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    // justifyContent: 'space-between',

    // elevation: 5,
    // shadowColor: colors.darkBg2,
    // shadowOffset: {width: 0, height: 12},
    // shadowOpacity: 0.6,
    // shadowRadius: 10,
  },
  hotelImageView: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  foodImageView: {
    // marginVertical: 8,
    marginTop: 10,
    // marginHorizontal: 10,
    marginLeft: 6,
    marginRight: 10,
    height: 40,
    width: 40,
    // borderRadius: 10,
  },
  hotelInfoView: {
    flexDirection: 'column',
    marginLeft: 0,
    marginTop: 20,
  },
  foodInfoView: {
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 4,
  },
  mapIcon: {
    marginTop: 8,
    marginLeft: 7,
    height: 18,
    width: 18,
  },
  cashIcon: {
    marginTop: 8,
    marginLeft: 7,
    height: 13,
    width: 13,
  },
  getLocationStyle: {
    marginTop: 2,
    // marginLeft: 7,
    height: 25,
    width: 25,
  },
  plusMinusView: {
    height: 25,
    width: 25,
    backgroundColor: colors.secondaryGold,
    // marginHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    // marginTop: 15,
    marginRight: 10,
  },
  plusMinusIcons: {
    // marginLeft: 5,
    marginTop: 5,
    height: 15,
    width: 15,
  },
  buttonSection: {
    marginTop: 30,
  },
});
export default SearchPage;
