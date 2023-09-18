import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, } from 'react-native';



import React from 'react'
import { FONT_REGULAR } from '../../constants';
import AppColors from '../../contsants/AppColors';

export default function BillingInfoStepOne() {
  return (
    <View style={styles.container}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.headingOne}>Billing Info</Text>
          <Text style={styles.headingTwo}>Step 1 of 4</Text>
        </View>

        <Text style={styles.headingTwo}>Please enter your billing info</Text>


      <Text style={styles.headingSmall}>Name</Text>
      <TextInput style={styles.input} placeholder='Name'/>

      <Text style={styles.headingSmall}>Address</Text>
      <TextInput style={styles.input} placeholder='Address'/>

      <Text style={styles.headingSmall}>Phone Number</Text>
      <TextInput style={styles.input} placeholder='Phone Number'/>

      <Text style={styles.headingSmall}>Town/City</Text>
      <TextInput style={styles.input} placeholder='Town/City'/>

      

      </View>
  )
}



const styles = StyleSheet.create({
  
  container: {
    padding: 16.0,
    marginTop: 60,
    marginHorizontal: 24,
    backgroundColor: '#ffff',
    borderRadius: 12,
    height: 'auto',
    width: 'auto',

},



  headingOne: {
    fontSize: 16.0,
    fontWeight: '700',
    letterSpacing:-0.32,
    fontFamily:FONT_REGULAR
  },

  headingTwo: {
    fontSize: 12.0,
    fontWeight: '500',
    color: AppColors.secondaryTextColor,
    letterSpacing:-0.24,
    fontFamily:FONT_REGULAR

  },

  headingSmall: {
    marginTop:12,
    fontSize: 14.0,
    fontWeight: '600',
    letterSpacing:-0.28,
    fontFamily:FONT_REGULAR,
  },


input:{
  width:'98%',
  height:48.0,
  marginTop:12.0,
  padding:10,
  backgroundColor:AppColors.textInputBackgroundColor,
  borderRadius:6,
  marginBottom:10,
}

});


