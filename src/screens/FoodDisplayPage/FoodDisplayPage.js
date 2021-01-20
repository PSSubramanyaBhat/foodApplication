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
  const [toggleSection, setToggleSection] = useState(true);
  const itemdata = foodAPIMockData[0].menu;
  const ingredientData = foodAPIMockData[0].menu[0].ingredientImages;
  const ingredientNameData = foodAPIMockData[0].menu[0].ingredients;
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
                  <View style={{flexDirection: 'row', marginLeft: 6}}>
                    <Image
                      style={styles.mapIcon}
                      source={imagePath.startIcon}
                    />
                    <Text style={{marginTop: 9}}>4.5 stars</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginLeft: 6}}>
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
          {/* Ingredient description and more */}
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  setToggleSection(!toggleSection);
                }}>
                <Text
                  style={
                    toggleSection
                      ? styles.ingredient_review_Section
                      : [
                          styles.ingredient_review_Section,
                          {color: colors.darkGrey},
                        ]
                  }>
                  Ingredients
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setToggleSection(!toggleSection);
                }}>
                <Text
                  style={
                    toggleSection
                      ? [
                          styles.ingredient_review_Section,
                          {color: colors.darkGrey},
                        ]
                      : styles.ingredient_review_Section
                  }>
                  Reviews
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginHorizontal: 30, marginTop: 15}}>
              <Text style={{fontSize: 15, lineHeight: 25}}>
                Cheeses like Cheddar, Gruyere, Parmesan, and its Pecorino work
                well with all kinds of burgers.
              </Text>
            </View>
            <FlatList
              style={{marginLeft: 20, marginTop: 20}}
              data={ingredientData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => {
                return item.id;
              }}
              renderItem={({item, index}) => (
                <View key={index} style={styles.foodType}>
                  <Image style={{width: 40, height: 40}} source={item.icon} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '600',
                      paddingTop: 3,
                    }}>
                    {ingredientNameData[index].name}
                  </Text>
                </View>
              )}
            />

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '500',
                  marginLeft: 30,
                  marginTop: 20,
                  marginBottom: -10,
                }}>
                Popular Restaurants
              </Text>
              <Text
                style={{
                  // fontSize: 22,
                  color: colors.darkGrey,
                  fontWeight: '600',
                  marginRight: 20,
                  marginTop: 25,
                  marginBottom: -10,
                }}>
                View All
              </Text>
            </View>
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
                <View key={index} style={styles.centralJustifiedView}>
                  <View style={styles.hotelInfoContainer}>
                    <Image
                      style={styles.hotelImageView}
                      source={hotelData[index].hotelImage}
                    />
                    <View style={styles.hotelInfoView}>
                      <Text style={{fontSize: 20, fontWeight: '600'}}>
                        Hotel {hotelData[index].hotelName}
                        {/* Hotel */}
                      </Text>
                      <View style={{flexDirection: 'row', marginLeft: -11}}>
                        <Image
                          style={styles.mapIcon}
                          source={imagePath.mapIcon}
                        />
                        <Text
                          style={{paddingTop: 9, paddingLeft: 2, fontSize: 12}}>
                          {hotelData[index].hotelLocation},{' '}
                          {hotelData[index].hotelArea},{' '}
                          {hotelData[index].hotelState}
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row', marginLeft: -11}}>
                        <Image
                          style={styles.mapIcon}
                          source={imagePath.startIcon}
                        />
                        <Text
                          style={{paddingTop: 7, paddingLeft: 2, fontSize: 16}}>
                          {hotelData[index].hotelRating} stars
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
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
    marginTop: 10,
    marginLeft: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ingredient_review_Section: {
    fontSize: 22,
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
    width: '90%',
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
});
export default FoodDisplayPage;
