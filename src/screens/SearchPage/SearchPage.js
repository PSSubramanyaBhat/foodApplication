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
import {color} from 'react-native-reanimated';

const BETWEEN_GRID_WIDTH = Platform.OS === 'ios' ? 14 : 9;

const SearchPage = ({navigation}) => {
  // const [selectFoodCategory, setSelectFoodCategory] = useState(false);
  const itemdata = foodAPIMockData[0].menu;
  const hotelData = foodAPIMockData[0].alternateHotels;
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
                style={{marginLeft: 12, fontSize: 15}}
                placeholder={'Search for food'}
                placeholderTextColor={colors.darkGrey}></TextInput>
            </View>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('FoodDisplayPage');
              }}>
              <View style={styles.bagButton}>
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
                <Image style={styles.icons} source={imagePath.optionIcon2} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontSize: 17, marginLeft: 25, marginTop: 15}}>
          11 results found for "Pasta"
        </Text>

        <FlatList
          style={{marginLeft: 0, marginTop: 20}}
          data={hotelData}
          // horizontal={true}
          // showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={({item, index}) => (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View key={index} style={styles.centralJustifiedView}>
                <View
                  style={
                    index % 2 === 0
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
                        index % 2 === 0
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
                          index % 2 === 0
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
                          index % 2 === 0
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
                    <View style={{flexDirection: 'row', marginLeft: -11}}>
                      {/* <Image
                        style={styles.mapIcon}
                        source={imagePath.startIcon}
                      /> */}
                      <Text
                        style={
                          index % 2 === 0
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
                </View>
              </View>
              <View style={styles.buttonSection}>
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
              </View>
            </View>
          )}
        />
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
    borderRadius: 5,
    marginLeft: 20,
    paddingTop: 5,
    paddingLeft: 10,
  },
  bagButton: {
    height: 45,
    width: 45,
    backgroundColor: colors.secondaryGold,
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
    marginTop: -5,
    height: 30,
    width: 30,
  },
  icons2: {
    // marginLeft: 5,
    marginTop: 4,
    height: 30,
    width: 30,
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
    width: 350,
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
    width: 350,
    marginLeft: 20,
    // height: '53%',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  hotelImageView: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  hotelInfoView: {
    flexDirection: 'column',
    marginLeft: 0,
    marginTop: 20,
  },
  mapIcon: {
    marginTop: 8,
    marginLeft: 7,
    height: 18,
    width: 18,
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
