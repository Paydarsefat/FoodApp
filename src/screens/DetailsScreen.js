import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/colors/colors';
MaterialIcons.loadFont();

const DetailsScreen = ({navigation}) => {
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
