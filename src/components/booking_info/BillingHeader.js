
import React from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, } from 'react-native';
import Images from '../../contsants/images';
import { APP_NAME } from '../../constants';



export default function BillingHeader() {
  return (
    <View style={styles.topBar}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 40, marginHorizontal:20 }}>

        <Text style={styles.rentalText}>{APP_NAME}</Text>

        <Image source={Images.ProfileIcon} style={{ height: 28, width: 28 }}></Image>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
  },

  topBar: {
    bottom: -4,
    marginTop: 0,
    height: 100.0,
    width: '100%',
    backgroundColor: '#ffff',


  },


  rentalText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3563E9',
    
    alignSelf: 'center',
    fontFamily: 'PlusJakartaSans-Regular',
    letterSpacing: -0.72
  },


});