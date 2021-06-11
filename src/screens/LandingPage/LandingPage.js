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
// import {HeartOutline, HeartFilled} from '../../assets/CommonSVG';

const BETWEEN_GRID_WIDTH = Platform.OS === 'ios' ? 14 : 9;

const LandingPage = ({navigation}) => {
  // const [selectFoodCategory, setSelectFoodCategory] = useState(false);
  const [selectHomeTab, setSelectHomeTab] = useState(true);
  const [selectSearchTab, setSelectSearchTab] = useState(false);
  const [selectFavouriteTab, setSelectFavouriteTab] = useState(false);
  const [selectProfileTab, setSelectProfileTab] = useState(false);
  const [selectedFoodCategoryTile, setSelectedFoodCategoryTile] = useState(
    foodAPIMockData[0].categoryName,
  );

  const itemdata = foodAPIMockData[0].menu;

  return (
    <>
      <StatusBar
        backgroundColor={colors.transparentBackgroundColor}
        barStyle="light-content"
      />
      <SafeAreaView backgroundColor={colors.transparentBackgroundColor} />
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.mainContainer}>
        <View style={styles.searchBarSection}>
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                marginTop: 8,
                marginLeft: 20,
              }}
              source={imagePath.menuIcon}></Image>
          </TouchableOpacity>
          <View style={styles.searchBox}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SearchPage');
              }}>
              <Image style={styles.icons2} source={imagePath.searchIcon} />
            </TouchableOpacity>
            <TextInput
              style={{marginLeft: 12, fontSize: 13, letterSpacing: 0.01}}
              placeholder={'Search for food'}
              placeholderTextColor={colors.darkGrey}></TextInput>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyOrdersPage');
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
              <Image style={styles.icons} source={imagePath.bagIcon} />
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          style={styles.headerImage}
          imageStyle={{borderRadius: 10}}
          source={imagePath.backgrounImage1}>
          <View style={styles.headerFoodDisplay}>
            <View style={styles.foodInfoSection}>
              <Text style={styles.foodName}>Cheese Burger</Text>
              <View style={styles.timeStampDisplay}>
                <View style={styles.timeBlock}>
                  <Text style={styles.timeColor}>23</Text>
                </View>
                <View style={styles.timeBlock}>
                  <Text style={styles.timeColor}>18</Text>
                </View>
                <View style={styles.timeBlock}>
                  <Text style={styles.timeColor}>41</Text>
                </View>
                <Text style={{marginTop: 17, marginLeft: 5}}>hrs.</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.orderButton}>
                  <Text style={{fontSize: 17, marginTop: 9}}>Order Now</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodImageSection}>
              <Image
                source={imagePath.burgerImage}
                style={styles.imageDisplay}></Image>
              <View style={styles.offerDisplay}>
                <Text
                  style={{
                    fontSize: 10,
                    color: colors.secondaryGold,
                    // marginLeft: 5,
                    marginTop: 14,
                    textAlign: 'center',
                    fontWeight: '600',
                  }}>
                  SPECIAL <Text style={{color: colors.white}}>OFFER</Text>
                </Text>
                {/* <Text>OFFER</Text> */}
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* <ScrollView
        style={{backgroundColor: 'red', marginTop: -380}}
        showsVerticalScrollIndicator={false}> */}
      <View style={styles.foodScrollView}>
        <FlatList
          // showsVerticalScrollIndicator={false}
          data={foodAPIMockData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                console.log('PRESSED Item', item.categoryName);
                setSelectedFoodCategoryTile(item.categoryName);
              }}>
              <View
                key={index}
                style={[
                  {
                    backgroundColor:
                      selectedFoodCategoryTile === item.categoryName
                        ? colors.secondaryGold
                        : 'white',
                  },
                  styles.foodType,
                ]}>
                <View
                  style={{
                    flexDirection: 'column',
                    flex: 1,
                    // justifyContent: 'flex-end',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      borderRadius: 50,
                      backgroundColor: 'white',
                      height: 60,
                      width: 60,
                      // flex: 1,
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 30,
                        width: 30,
                        marginTop: 15,
                      }}
                      source={foodAPIMockData[index].categoryIcon}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '600',
                      textAlign: 'center',
                    }}>
                    {foodAPIMockData[index].categoryName}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          marginLeft: 25,
          marginBottom: 10,
        }}>
        Available to you
      </Text>
      {/* Line 1 */}
      <FlatList
        style={{
          marginLeft: 9,
        }}
        data={itemdata}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        numColumns={2}
        renderItem={({item, index}) => (
          <View
            style={
              index % 2 === 0
                ? [styles.gridViewBg1, {backgroundColor: colors.white}]
                : [styles.gridViewBg1, {backgroundColor: colors.darkBg}]
            }>
            <View style={styles.gridImage}>
              <Image
                style={{
                  zIndex: 1,
                  height: 130,
                  width: 140,
                  resizeMode: 'contain',
                }}
                source={itemdata[index].image}></Image>
            </View>
            <Text
              style={
                index % 2 === 0
                  ? styles.gridFoodName1
                  : [styles.gridFoodName1, {color: colors.white}]
              }>
              {/* Sub Sandwich */}
              {itemdata[index].itemName}
            </Text>
            <Text
              style={
                index % 2 === 0
                  ? [styles.gridFoodType1, {color: colors.darkGrey}]
                  : [styles.gridFoodType1, {color: colors.white}]
              }>
              {/* Fastfood */}
              {itemdata[index].type}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 3}}>
              <Image
                style={{
                  height: 18,
                  width: 18,
                  marginLeft: 10,
                  marginTop: 2,
                }}
                source={imagePath.startIcon}></Image>
              <Text
                style={
                  index % 2 === 0
                    ? styles.gridRating
                    : [styles.gridRating, {color: colors.white}]
                }>
                {/* (4.5) */}
                {itemdata[index].rating}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={
                  index % 2 === 0
                    ? styles.gridCost
                    : [styles.gridCost, {color: colors.white}]
                }>
                {/* $15.00 */}${itemdata[index].cost}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  const selectedFoodName = itemdata[index].itemName;
                  const selectedFoodRating = itemdata[index].rating;
                  const selectedFoodCost = itemdata[index].cost;
                  const selectedFoodImage = itemdata[index].image;
                  const selectedFoodTimeDuration = itemdata[index].timeDuration;
                  const selectedFoodDescription = itemdata[index].description;
                  const selectedFoodIngredients = itemdata[index].ingredients;
                  const selectedFoodIngredientImages =
                    itemdata[index].ingredientImages;

                  const jsonData = {
                    selectedFoodName: selectedFoodName,
                    selectedFoodRating: selectedFoodRating,
                    selectedFoodCost: selectedFoodCost,
                    selectedFoodImage: selectedFoodImage,
                    selectedFoodTimeDuration: selectedFoodTimeDuration,
                    selectedFoodDescription: selectedFoodDescription,
                    selectedFoodIngredients: selectedFoodIngredients,
                    selectedFoodIngredientImages: selectedFoodIngredientImages,
                  };
                  navigation.navigate('FoodDisplayPage', {jsonData});
                }}>
                <View style={styles.addButton}>
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      marginTop: 4,
                      marginLeft: 2,
                    }}
                    source={imagePath.addIcon}></Image>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {/* Line 1 */}
      {/* </ScrollView> */}
      <View
        style={{
          height: 80,
          paddingTop: 10,
          backgroundColor: colors.darkBg2,
          borderTopWidth: 2,
          borderColor: 'rgba(255,255,255,0.9)',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() => {
            setSelectHomeTab(true);
            setSelectSearchTab(false);
            setSelectFavouriteTab(false);
            setSelectProfileTab(false);
          }}>
          <View>
            <Image
              style={{
                height: 25,
                width: 25,
                marginTop: 4,
                alignSelf: 'center',
              }}
              source={
                selectHomeTab ? imagePath.homeFilled : imagePath.homeWhite
              }
            />
            <Text
              style={
                selectHomeTab
                  ? {color: colors.gold2, fontSize: 12, paddingTop: 3}
                  : {color: colors.white, fontSize: 12, paddingTop: 3}
              }>
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectHomeTab(false);
            setSelectSearchTab(true);
            setSelectFavouriteTab(false);
            setSelectProfileTab(false);
            navigation.navigate('SearchPage');
          }}>
          <View>
            <Image
              style={{
                height: 25,
                width: 25,
                marginTop: 4,
                alignSelf: 'center',
              }}
              source={
                selectSearchTab ? imagePath.searchYellow : imagePath.searchWhite
              }
            />
            <Text
              style={
                selectSearchTab
                  ? {color: colors.gold2, fontSize: 12, paddingTop: 3}
                  : {color: colors.white, fontSize: 12, paddingTop: 3}
              }>
              Search
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectHomeTab(false);
            setSelectSearchTab(false);
            setSelectFavouriteTab(true);
            setSelectProfileTab(false);
          }}>
          <View>
            <Image
              style={{
                height: 25,
                width: 25,
                marginTop: 4,
                alignSelf: 'center',
              }}
              source={
                selectFavouriteTab
                  ? imagePath.heartFilled
                  : imagePath.heartOutline
              }
            />
            <Text
              style={
                selectFavouriteTab
                  ? {color: colors.gold2, fontSize: 12, paddingTop: 3}
                  : {color: colors.white, fontSize: 12, paddingTop: 3}
              }>
              Favourites
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectHomeTab(false);
            setSelectSearchTab(false);
            setSelectFavouriteTab(false);
            setSelectProfileTab(true);
          }}>
          <View>
            <Image
              style={{
                height: 25,
                width: 25,
                marginTop: 4,
                alignSelf: 'center',
              }}
              source={
                selectProfileTab
                  ? imagePath.profileFilled
                  : imagePath.profileWhite
              }
            />
            <Text
              style={
                selectProfileTab
                  ? {color: colors.gold2, fontSize: 12, paddingTop: 3}
                  : {color: colors.white, fontSize: 12, paddingTop: 3}
              }>
              Profile
            </Text>
          </View>
        </TouchableOpacity>

        {/*<HeartFilled width={24} height={24} />  */}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    flexDirection: 'column',
  },
  headerImage: {
    width: '94%',
    // height: '65%',
    height: '60%',
    resizeMode: 'cover',
    marginTop: 20,
    marginHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'column',
  },
  headerFoodDisplay: {
    height: '47%',
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
    // width: '75%',
    width: '65%',
    borderColor: colors.white,
    // borderColor: colors.grey,
    borderWidth: 1,
    borderStyle: 'solid',
    // borderRadius: 5,
    borderRadius: 25,
    // marginLeft: 5,
    paddingTop: 5,
    paddingLeft: 10,
  },
  bagButton: {
    height: 45,
    width: 45,
    backgroundColor: colors.secondaryGold,
    // backgroundColor: colors.vermillionLight,
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
    // backgroundColor: colors.secondaryGold,
    backgroundColor: colors.vermillionLight,
    // borderColor: colors.gold,
    borderColor: colors.vermillionLight,
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
    marginTop: 8,
    height: 20,
    width: 20,
  },
  foodScrollView: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingLeft: 16,
    marginTop: -283,
    marginBottom: 20,
  },
  foodType: {
    // backgroundColor: colors.white,
    // height: 45,
    height: 125,
    width: 85,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.transparentColor,
    borderStyle: 'solid',
    borderRadius: 10,
    alignItems: 'center',
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
});
export default LandingPage;
