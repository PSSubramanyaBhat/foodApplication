import React, {useState, useEffect} from 'react';
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
  LayoutAnimation,
  UIManager,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {ClipPath} from 'react-native-svg';

const BETWEEN_GRID_WIDTH = Platform.OS === 'ios' ? 14 : 9;

const FoodDisplayPage = ({navigation, route}) => {
  // const [selectFoodCategory, setSelectFoodCategory] = useState(false);
  const [toggleSection, setToggleSection] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const itemdata = foodAPIMockData[0].menu;
  const ingredientData = foodAPIMockData[0].menu[0].ingredientImages;
  const ingredientNameData = foodAPIMockData[0].menu[0].ingredients;
  const hotelData = foodAPIMockData[0].alternateHotels;

  const [currentFoodOrderCount, setCurrentFoodOrderCount] = useState(0);
  const [addToFavourite, setAddToFavourite] = useState(false);

  const [descriptionStatus, setDescriptionStatus] = useState(false);

  const selectedData = route.params.jsonData;

  const selectedFoodCost = selectedData.selectedFoodCost;
  const selectedFoodImage = selectedData.selectedFoodImage;
  const selectedFoodName = selectedData.selectedFoodName;
  const selectedFoodRating = selectedData.selectedFoodRating;
  const selectedFoodTimeDuration = selectedData.selectedFoodTimeDuration;
  const selectedFoodDescription = selectedData.selectedFoodDescription;
  const selectedFoodIngredients = selectedData.selectedFoodIngredients;
  const selectedFoodIngredientImages =
    selectedData.selectedFoodIngredientImages;

  const selectedIngredientInformation = {
    selectedFoodIngredients: selectedFoodIngredients,
    selectedFoodIngredientImages: selectedFoodIngredientImages,
  };

  // console.log('FOOD Display Data', selectedIngredientInformation);

  const ingredientsArray = [];

  for (let i = 0; i < selectedFoodIngredients.length; i += 1) {
    ingredientsArray.push({
      name: selectedFoodIngredients[i].name,
      image: selectedFoodIngredientImages[i].icon,
    });
  }

  console.log('FOOD Display Data', ingredientsArray);

  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

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
          <View style={styles.centralJustifiedView}>
            <Image
              style={styles.foodImageDisplay}
              // source={imagePath.burgerImage}
              source={selectedFoodImage}
            />
          </View>

          <View style={styles.centralJustifiedView}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, marginTop: -10}}>
                  Add To Favourite
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setAddToFavourite(!addToFavourite);
                  }}>
                  <Image
                    style={styles.favouriteIcon}
                    source={
                      addToFavourite
                        ? imagePath.favouriteOn
                        : imagePath.favouriteOff
                    }
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <View style={styles.orderButton}>
                  <Text style={{fontSize: 17, marginTop: 9}}>Order</Text>
                </View>
              </TouchableOpacity>
            </View>
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
                  {/* Special Cheese Burger */}
                  {selectedFoodName}
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
                    <Text style={{marginTop: 8, marginLeft: 2}}>
                      {/* $15.00 */}${selectedFoodCost}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginLeft: 6}}>
                    <Image
                      style={styles.mapIcon}
                      source={imagePath.startIcon}
                    />
                    <Text style={{marginTop: 9}}>
                      {/* 4.5 stars */}
                      {selectedFoodRating}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginLeft: 6}}>
                    <Image
                      style={styles.mapIcon}
                      source={imagePath.timerIcon}
                    />
                    <Text style={{marginTop: 9}}>
                      {/* 15-20 mins */}
                      {selectedFoodTimeDuration}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.buttonSection}>
                <TouchableOpacity
                  onPress={() => {
                    setCurrentFoodOrderCount((c) => c + 1);
                  }}>
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
                    paddingLeft: 12,
                    paddingTop: 5,
                  }}>
                  {currentFoodOrderCount}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    if (currentFoodOrderCount > 0) {
                      setCurrentFoodOrderCount((c) => c - 1);
                    }
                  }}>
                  <View style={[styles.plusMinusView, {marginTop: 5}]}>
                    <Image
                      style={styles.plusMinusIcons}
                      source={imagePath.minusIcon}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Ingredient description and more */}
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                  setToggleSection(true);
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
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                  setToggleSection(false);
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
              {toggleSection && (
                <Text style={{fontSize: 15, lineHeight: 25}}>
                  ▶ {selectedFoodDescription}
                  {/* ◘ Cheeses like Cheddar,Gruyere, Parmesan, and Its Pecorino work
                  well with all kinds of burgers. */}
                </Text>
              )}
              {toggleSection === false && (
                <View>
                  <Text style={{fontSize: 15, lineHeight: 25}}>
                    ⦿ This dish is really tasty
                  </Text>
                  <Text style={{fontSize: 15, lineHeight: 25}}>
                    ⦿ The best I've had in a while
                  </Text>
                  <Text style={{fontSize: 15, lineHeight: 25}}>
                    ⦿ It's tasty, a little more spice would make it even better.
                  </Text>
                </View>
              )}
            </View>
            <FlatList
              style={{marginLeft: 20, marginTop: 20}}
              // data={ingredientData}
              data={ingredientsArray}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => {
                return item.id;
              }}
              renderItem={({item, index}) => (
                <View key={index} style={styles.foodType}>
                  <Image
                    style={{width: 40, height: 40}}
                    // source={item.icon}
                    source={item.image}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '600',
                      paddingTop: 3,
                    }}>
                    {/* {ingredientNameData[index].name} */}
                    {item.name}
                  </Text>
                </View>
              )}
            />

            <TouchableOpacity
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
                setDescriptionStatus(!descriptionStatus);
              }}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontWeight: '600',
                      marginLeft: 30,
                      marginTop: 10,
                      // marginBottom: -10,
                      color: descriptionStatus ? 'black' : 'grey',
                    }}>
                    Description
                  </Text>
                  <Image
                    style={styles.chevronDescriptionStyle}
                    source={
                      descriptionStatus
                        ? imagePath.upChevronIcon
                        : imagePath.downChevronIcon
                    }
                  />
                </View>
                {descriptionStatus && (
                  <View
                    style={{marginLeft: 30, marginTop: 10, marginRight: 20}}>
                    <Text>◘ Slice the potatoes 1/2 inch thick.</Text>
                    <Text style={{marginTop: 6}}>
                      ◘ Soak them cold in water for at least an hour or
                      overnight.
                    </Text>
                    <Text style={{marginTop: 6}}>
                      ◘ (Rinse them twice with cold water and pat the completely
                      dry. Heat oil to 300 degrees.
                    </Text>
                    <Text style={{marginTop: 6}}>
                      ◘ Increase heat to 400 degrees. Place them bake on paper
                      towels and sprinkle immediately with salt.
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>

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
            <View
              style={{
                height: 20,
                marginTop: 20,
                backgroundColor: colors.primaryColor,
              }}></View>
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
    marginTop: 20,
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
  favouriteIcon: {
    marginTop: -12,
    marginLeft: 1,
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
    resizeMode: 'contain',
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
    height: 45,
    width: 153,
    marginLeft: 15,
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
  chevronDescriptionStyle: {
    marginTop: 14,
    marginLeft: 7,
    height: 10,
    width: 10,
  },
});
export default FoodDisplayPage;
