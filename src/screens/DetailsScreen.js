import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/colors/colors';
import ingredients from '../../assets/data/ingredients';
MaterialIcons.loadFont();

const DetailsScreen = ({navigation, route}) => {
  // console.log('param:', route.params.name, route.params.image);
  const {name, image, price, size, deliveryIn, crust} = route.params;
  const renderItem = ({item}) => {
    return (
      <View style={styles.wrapperItemImageIngredient}>
        <Image source={item.image} style={{resizeMode: 'cover'}} />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.arrowBack}>
            <MaterialIcons name="arrow-back-ios" size={10} color="black" />
          </View>
        </TouchableOpacity>

        <View style={styles.heatherIconRate}>
          <MaterialIcons name="star" size={14} color={colors.background} />
        </View>
      </SafeAreaView>
      <View>
        <View
          style={{
            flexDirection: 'column',
            flexWrap: 'wrap',
            marginHorizontal: 20,
          }}>
          <Text
            style={[
              styles.textTitle,
              {
                marginTop: 30,
              },
            ]}>
            {name}
          </Text>
          <View>
            <Text
              style={[styles.textTitle, {marginTop: 15, color: colors.price}]}>
              {price}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.wrapperDetailItem}>
            <View>
              <Text style={styles.textItemTitleDetail}>Size</Text>
              <View style={{marginTop: 5}}>
                <Text style={styles.textItemContentDetail}>{size}</Text>
              </View>
            </View>
            <View>
              <View style={{marginTop: 30}}>
                <Text style={[styles.textItemTitleDetail]}>Crust</Text>
                <View style={{marginTop: 5}}>
                  <Text style={styles.textItemContentDetail}>{crust}</Text>
                </View>
              </View>
            </View>
            <View>
              <View style={{marginTop: 30}}>
                <Text style={styles.textItemTitleDetail}>Delivery in</Text>
                <View style={{marginTop: 5}}>
                  <Text style={styles.textItemContentDetail}>{deliveryIn}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{justifyContent: 'center', marginTop: 35}}>
            <Image source={image} style={{resizeMode: 'cover'}} />
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 60}}>
          <Text style={styles.textItemContentDetail}>Ingredients</Text>
        </View>
        <View>
          <FlatList
            data={ingredients}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            horizontal={true}
            style={{marginHorizontal: 10}}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 80,
            }}>
            <View style={styles.orderButton}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 14,
                }}>
                Place an order
              </Text>
              <MaterialIcons
                name="arrow-forward-ios"
                size={10}
                color="black"
                style={{
                  padding: 5,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 60,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  arrowBack: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 14,
    padding: 14,
    marginLeft: 10,
  },
  heatherIconRate: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    padding: 14,
    marginRight: 10,
  },
  wrapperItemImageIngredient: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 19,
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 10,
  },
  textTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
  },
  wrapperDetailItem: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: 30,
    marginHorizontal: 20,
  },
  textItemTitleDetail: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.gray,
  },
  textItemContentDetail: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: colors.textDark,
  },
  orderButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 28,
    flex: 1,
  },
});
