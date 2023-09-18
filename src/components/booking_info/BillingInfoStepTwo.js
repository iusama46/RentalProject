import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, } from 'react-native';
import { RadioButton } from 'react-native-paper';
import React from 'react'
import { FONT_REGULAR } from '../../constants';
import AppColors from '../../contsants/AppColors';

export default function BillingInfoStepTwo() {
  const [billingMethod, setBillingMethod] = useState('Credit Card');
  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.headingOne}>Rental Info</Text>
        <Text style={styles.headingTwo}>Step 2 of 4</Text>
      </View>

      <Text style={styles.headingTwo}>Please select your rental date</Text>


      <View style={{ flexDirection: 'row', marginTop:12, end: 10 }}>
        <RadioButton
          value="Credit Card"
          color={AppColors.primaryColor}
          onPress={() => setBillingMethod('Credit Card')}
          status={billingMethod === 'Credit Card' ? 'checked' : 'unchecked'}
        />

        <Text style={styles.radioBtnTxt}>Pick-Up</Text>
      </View>

      <Text style={styles.headingSmall}>Locations</Text>
      <TextInput style={styles.input} placeholder='Name' />

      <Text style={styles.headingSmall}>Time</Text>
      <TextInput style={styles.input} placeholder='Address' />

      <Text style={styles.headingSmall}>Date</Text>
      <TextInput style={styles.input} placeholder='Phone Number' />

      <Text style={styles.headingSmall}>Town/City</Text>
      <TextInput style={styles.input} placeholder='Town/City' />

      <View style={{ flexDirection: 'row', marginTop:12, end: 10 }}>
        <RadioButton
          value="Credit Card"
          color={AppColors.primaryColor}
          onPress={() => setBillingMethod('Credit Card')}
          status={billingMethod === 'Credit Card' ? 'checked' : 'unchecked'}
        />

        <Text style={styles.radioBtnTxt}>Drop-Off</Text>
      </View>

      <Text style={styles.headingSmall}>Locations</Text>
      <TextInput style={styles.input} placeholder='Name' />

      <Text style={styles.headingSmall}>Time</Text>
      <TextInput style={styles.input} placeholder='Address' />

      <Text style={styles.headingSmall}>Date</Text>
      <TextInput style={styles.input} placeholder='Phone Number' />





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
  radioBtnTxt: {
    fontSize: 15.0,
    fontWeight: '700',
    letterSpacing: -0.32,
    fontFamily: FONT_REGULAR,
    alignSelf: 'center'
  },


  headingOne: {
    fontSize: 16.0,
    fontWeight: '700',
    letterSpacing: -0.32,
    fontFamily: FONT_REGULAR
  },

  headingTwo: {
    fontSize: 12.0,
    fontWeight: '500',
    color: AppColors.secondaryTextColor,
    letterSpacing: -0.24,
    fontFamily: FONT_REGULAR

  },

  headingSmall: {
    marginTop: 12,
    fontSize: 14.0,
    fontWeight: '600',
    letterSpacing: -0.28,
    fontFamily: FONT_REGULAR,
  },


  input: {
    width: '98%',
    height: 48.0,
    marginTop: 12.0,
    padding: 10,
    backgroundColor: AppColors.textInputBackgroundColor,
    borderRadius: 6,
    marginBottom: 10,
  }

});


