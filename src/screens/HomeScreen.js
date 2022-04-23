import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import colors from './../../assets/colors/colors';
import categories from './../../assets/data/categories';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';
Feather.loadFont();
const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    // let urls = item.imageName;
    // console.log('url:', urls);
    return (
      <View
        style={[
          styles.categoryItem,
          {backgroundColor: item.id == 1 ? colors.primary : 'white'},
        ]}>
        <View style={styles.wrapperImageCategory}>
          <Image style={styles.imageCategory} source={item.imageName} />
        </View>

        <View style={styles.wrapperTextCategory}>
          <Text style={styles.itemTextCategory}>{item.name}</Text>
        </View>
        <View
          style={[
            styles.wrapperIconCategory,
            {backgroundColor: item.id == 1 ? 'white' : colors.secondary},
          ]}>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={16}
            color={item.id == 1 ? 'black' : 'white'}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.headerContainer}>
        <Image
          style={styles.profileImage}
          source={require('./../../assets/image/profile.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText1}>Food</Text>
        <Text style={styles.titleText2}>Delivery</Text>
      </View>
      <View style={styles.searchContainer}>
        <Feather name="search" size={16} color="black" />
        <TextInput style={styles.searchInput} placeholder="Search..." />
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>Categories</Text>
      </View>
      <View>
        <FlatList
          data={categories}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          style={styles.flatList}
          horizontal={true}
        />
      </View>

      <View style={styles.popularContainer}>
        <Text style={styles.popularTitle}>Popular</Text>
        <View />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 60,
  },
  titleContainer: {
    marginTop: 15,
    marginHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
  },
  titleText1: {
    fontSize: 16,
    fontFamily: 'montserrat-regular',
  },
  titleText2: {
    fontFamily: 'montserrat-bold',
    fontSize: 32,
  },
  searchInput: {
    flex: 1,
    borderColor: colors.gray,
    borderBottomWidth: 1,
    marginLeft: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  categoryContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  flatList: {
    marginHorizontal: 10,
  },
  categoryItem: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 14,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  imageCategory: {
    resizeMode: 'cover',
  },
  itemTextCategory: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  wrapperIconCategory: {
    borderRadius: 14,
    padding: 5,
  },
  wrapperImageCategory: {},
  wrapperTextCategory: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
});
