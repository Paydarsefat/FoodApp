import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();
const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.headerContainer}>
        <Image
          style={styles.profileImage}
          source={require('./../../assets/image/profile.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
          <Feather
            name="menu"
            size={24}
            color="black"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

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
});
