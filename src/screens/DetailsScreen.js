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
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 10,
          marginTop: 19,
          backgroundColor: colors.white,
          borderRadius: 14,
          padding: 10,
        }}>
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
            style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 32,
              marginTop: 30,
            }}>
            {name}
          </Text>
          <View>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 32,
                marginTop: 15,
                color: colors.price,
              }}>
              {price}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'column',
              flexWrap: 'wrap',
              marginTop: 30,
              marginHorizontal: 20,
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 14,
                  color: colors.gray,
                }}>
                Size
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 16,
                  marginTop: 5,
                  color: colors.textDark,
                }}>
                {size}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 14,
                  marginTop: 30,
                  color: colors.gray,
                }}>
                Crust
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 16,
                  marginTop: 5,
                  color: colors.textDark,
                }}>
                {crust}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 14,
                  marginTop: 30,
                  color: colors.gray,
                }}>
                Delivery in
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 16,
                  marginTop: 5,
                  color: colors.textDark,
                }}>
                {deliveryIn}
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', marginTop: 35}}>
            <Image source={image} style={{resizeMode: 'cover'}} />
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 60}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 16,
            }}>
            Ingredients
          </Text>
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
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 60,
              }}>
              <View
                style={{
                  backgroundColor: colors.primary,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 20,
                  marginHorizontal: 20,
                  borderRadius: 28,
                  flex: 1,
                }}>
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
});
